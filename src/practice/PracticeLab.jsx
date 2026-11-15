import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bug, Play, Sparkles, Target } from 'lucide-react'
import { challenges, practiceTemplates } from './practiceTemplates.js'
import VirtualFileExplorer from './VirtualFileExplorer.jsx'
import LiveSandboxFrame from './LiveSandboxFrame.jsx'
import ConsolePanel from './ConsolePanel.jsx'

const VOID_TAGS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']
const CHECKED_TAGS = ['html', 'head', 'body', 'div', 'section', 'main', 'article', 'header', 'footer', 'aside', 'nav', 'ul', 'ol', 'li', 'p', 'span', 'a', 'button', 'form', 'label', 'table', 'tr', 'td', 'th', 'h1', 'h2', 'h3']

let uid = 0
const nextId = () => {
  uid += 1
  return `f${uid}`
}

function buildStateFromTemplate(template) {
  return {
    folders: ['root'],
    files: template.files.map((file) => ({
      id: nextId(),
      name: file.name,
      folder: 'root',
      content: file.content
    }))
  }
}

function validateHtml(html) {
  const stack = []
  const problems = []
  const lines = html.split('\n')

  lines.forEach((line, lineIndex) => {
    const tagPattern = /<\/?([a-zA-Z0-9]+)([^>]*)>/g
    let match = tagPattern.exec(line)
    while (match !== null) {
      const raw = match[0]
      const tag = match[1].toLowerCase()
      const selfClosing = raw.endsWith('/>')
      const isClosing = raw.startsWith('</')

      if (CHECKED_TAGS.includes(tag) && !VOID_TAGS.includes(tag) && !selfClosing) {
        if (isClosing) {
          const last = stack.pop()
          if (!last || last.tag !== tag) {
            problems.push({
              message: `Baris ${lineIndex + 1}: tag </${tag}> tidak cocok dengan <${last ? last.tag : 'tidak ada'}> yang dibuka.`,
              line: lineIndex + 1
            })
          }
        } else {
          stack.push({ tag, line: lineIndex + 1 })
        }
      }
      match = tagPattern.exec(line)
    }
  })

  stack.forEach((open) => {
    problems.push({
      message: `Baris ${open.line}: tag <${open.tag}> dibuka tetapi tidak pernah ditutup.`,
      line: open.line
    })
  })

  return problems
}

function buildDocument(html, css, js) {
  const capture = `<script>
(function () {
  var kirim = function (tipe, data) {
    try { parent.postMessage(Object.assign({ sumber: 'devlab', tipe: tipe }, data), '*'); } catch (e) {}
  };
  window.onerror = function (pesan, sumber, baris, kolom) {
    kirim('error', { pesan: String(pesan), baris: baris || 0, kolom: kolom || 0 });
    return false;
  };
  window.addEventListener('unhandledrejection', function (event) {
    var alasan = event.reason && event.reason.message ? event.reason.message : event.reason;
    kirim('error', { pesan: 'Promise ditolak: ' + String(alasan), baris: 0, kolom: 0 });
  });
  ['log', 'info', 'warn', 'error'].forEach(function (level) {
    var asli = console[level] ? console[level].bind(console) : function () {};
    console[level] = function () {
      var argumen = Array.prototype.slice.call(arguments).map(function (item) {
        if (item instanceof Error) return item.message;
        if (typeof item === 'object' && item !== null) {
          try { return JSON.stringify(item); } catch (e) { return String(item); }
        }
        return String(item);
      });
      kirim('konsol', { level: level, isi: argumen.join(' ') });
      asli.apply(console, arguments);
    };
  });
  document.addEventListener('DOMContentLoaded', function () { kirim('render', {}); });
})();
</script>`

  let doc = html
  if (!/<html[\s>]/i.test(doc)) {
    doc = `<!DOCTYPE html>\n<html lang="id">\n<head><meta charset="utf-8" /></head>\n<body>\n${doc}\n</body>\n</html>`
  }
  if (!/<\/head>/i.test(doc)) {
    doc = doc.replace(/<body[^>]*>/i, (match) => `<head></head>\n${match}`)
  }

  const styleBlock = `<style>\n${css}\n</style>\n`
  doc = doc.replace(/<\/head>/i, `${styleBlock}${capture}\n</head>`)

  const beforeScript = doc
  const jsStartLine = beforeScript.split('\n').length + 2
  const scriptBlock = `<script>\n${js}\n</script>\n`

  if (/<\/body>/i.test(doc)) {
    doc = doc.replace(/<\/body>/i, `${scriptBlock}</body>`)
  } else {
    doc = `${doc}\n${scriptBlock}`
  }

  return { doc, jsStartLine }
}

export default function PracticeLab() {
  const [templateId, setTemplateId] = useState(practiceTemplates[0].id)
  const [folders, setFolders] = useState(['root'])
  const [files, setFiles] = useState(() => buildStateFromTemplate(practiceTemplates[0]).files)
  const [activeId, setActiveId] = useState(null)
  const [status, setStatus] = useState('idle')
  const [logs, setLogs] = useState([])
  const [srcDoc, setSrcDoc] = useState('')
  const [frameKey, setFrameKey] = useState(0)
  const [showChallenge, setShowChallenge] = useState(true)

  const jsStartRef = useRef(0)
  const statusRef = useRef('idle')
  const pendingRef = useRef(null)

  const activeFile = useMemo(() => files.find((file) => file.id === activeId) || null, [files, activeId])

  useEffect(() => {
    if (!activeId && files.length > 0) {
      setActiveId(files[0].id)
    }
  }, [activeId, files])

  useEffect(() => {
    statusRef.current = status
  }, [status])

  const pushLog = useCallback((level, message) => {
    setLogs((prev) => [...prev.slice(-120), { id: `${Date.now()}-${Math.random()}`, level, message }])
  }, [])

  useEffect(() => {
    const handler = (event) => {
      const data = event.data
      if (!data || data.sumber !== 'devlab') return

      if (data.tipe === 'konsol') {
        pushLog(data.level || 'log', data.isi || '')
        return
      }

      if (data.tipe === 'error') {
        const relative = data.baris ? Math.max(1, data.baris - jsStartRef.current + 1) : 0
        const where = relative ? ` (script.js baris ${relative})` : ''
        pushLog('error', `ERROR${where}: ${data.pesan}`)
        setStatus('error')
        if (pendingRef.current) {
          window.clearTimeout(pendingRef.current)
          pendingRef.current = null
        }
        return
      }

      if (data.tipe === 'render') {
        if (statusRef.current === 'running') {
          setStatus('success')
          pushLog('system', 'Render selesai tanpa error runtime.')
        }
      }
    }

    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [pushLog])

  useEffect(() => {
    return () => {
      if (pendingRef.current) window.clearTimeout(pendingRef.current)
    }
  }, [])

  const loadTemplate = (id) => {
    const template = practiceTemplates.find((item) => item.id === id)
    if (!template) return
    const built = buildStateFromTemplate(template)
    setTemplateId(id)
    setFolders(built.folders)
    setFiles(built.files)
    setActiveId(built.files[0] ? built.files[0].id : null)
    setStatus('idle')
    setLogs([])
    setSrcDoc('')
  }

  const updateContent = (value) => {
    if (!activeFile) return
    setFiles((prev) => prev.map((file) => (file.id === activeFile.id ? { ...file, content: value } : file)))
  }

  const addFile = (name, folder) => {
    const finalName = name.includes('.') ? name : `${name}.txt`
    const created = { id: nextId(), name: finalName, folder, content: '' }
    setFiles((prev) => [...prev, created])
    setActiveId(created.id)
    pushLog('system', `File "${finalName}" dibuat.`)
  }

  const addFolder = (name) => {
    setFolders((prev) => (prev.includes(name) ? prev : [...prev, name]))
    pushLog('system', `Folder "${name}" dibuat.`)
  }

  const deleteFile = (id) => {
    setFiles((prev) => {
      const next = prev.filter((file) => file.id !== id)
      if (activeId === id) setActiveId(next[0] ? next[0].id : null)
      return next
    })
  }

  const deleteFolder = (name) => {
    setFiles((prev) => prev.filter((file) => file.folder !== name))
    setFolders((prev) => prev.filter((folder) => folder !== name))
  }

  const run = () => {
    const htmlFile = files.find((file) => file.name === 'index.html')
    const cssFile = files.find((file) => file.name === 'style.css')
    const jsFile = files.find((file) => file.name === 'script.js')

    setLogs([])
    setStatus('running')

    if (!htmlFile) {
      setStatus('error')
      pushLog('error', 'ERROR: index.html tidak ditemukan. Buat file index.html terlebih dahulu.')
      return
    }

    const problems = validateHtml(htmlFile.content)
    if (problems.length > 0) {
      setStatus('error')
      problems.forEach((problem) => pushLog('error', `ERROR: ${problem.message}`))
      pushLog('system', 'Perbaiki struktur HTML lalu jalankan ulang.')
      return
    }

    const built = buildDocument(htmlFile.content, cssFile ? cssFile.content : '', jsFile ? jsFile.content : '')
    jsStartRef.current = built.jsStartLine
    setSrcDoc(built.doc)
    setFrameKey((prev) => prev + 1)

    if (pendingRef.current) window.clearTimeout(pendingRef.current)
    pendingRef.current = window.setTimeout(() => {
      if (statusRef.current === 'running') {
        setStatus('success')
        pushLog('system', 'Tidak ada error terdeteksi.')
      }
      pendingRef.current = null
    }, 2200)
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl"
      >
        <span className="chip mb-3 border-cyan/30 bg-cyan/10 text-cyan">Tab 5 · Praktik Visual</span>
        <h2 className="text-balance text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">
          Live coding sandbox yang jujur
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Tulis kode, jalankan, lihat hasilnya. Kalau berhasil muncul badge hijau. Kalau gagal, error asli
          dan nomor barisnya ditampilkan apa adanya.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center gap-2">
        {practiceTemplates.map((template) => {
          const isActive = templateId === template.id
          return (
            <button
              key={template.id}
              type="button"
              onClick={() => loadTemplate(template.id)}
              className={`relative rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold transition-colors ${
                isActive ? 'text-ink' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="template-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-cyan"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              ) : (
                <span className="absolute inset-0 -z-10 rounded-full border border-line bg-card" />
              )}
              {template.name}
            </button>
          )
        })}
      </div>

      <AnimatePresence initial={false}>
        {showChallenge ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-2xl border border-violet/30 bg-violet/5 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <Target size={15} className="mt-0.5 shrink-0 text-violet" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-violet">
                      Tantangan Praktik Mini
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {challenges.map((item) => (
                        <p key={item.id} className="text-[12.5px] leading-relaxed text-slate-300">
                          <span className="font-semibold text-violet-soft">{item.title}</span>{' '}
                          <span className="text-slate-500">({item.level})</span> — {item.goal}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowChallenge(false)}
                  className="shrink-0 text-[11px] text-slate-500 hover:text-slate-300"
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="overflow-hidden rounded-2xl border border-line bg-card">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-panel/60 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-cyan" />
            <span className="text-[11.5px] font-semibold text-slate-400">
              {activeFile ? activeFile.name : 'belum ada file aktif'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {!showChallenge ? (
              <button
                type="button"
                onClick={() => setShowChallenge(true)}
                className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-[11px] font-semibold text-slate-400 transition-colors hover:border-violet/60 hover:text-violet"
              >
                <Bug size={12} /> Tantangan
              </button>
            ) : null}
            <motion.button
              type="button"
              onClick={run}
              whileTap={{ scale: 0.96 }}
              whileHover={{ y: -2 }}
              className="flex items-center gap-1.5 rounded-lg bg-cyan px-3 py-1.5 text-[11.5px] font-bold text-ink shadow-[0_0_24px_-6px_rgba(56,189,248,0.9)]"
            >
              <Play size={12} /> Jalankan &amp; Visualkan
            </motion.button>
          </div>
        </div>

        <div className="grid min-h-[34rem] grid-cols-1 lg:grid-cols-[13rem_1fr]">
          <aside className="border-b border-line lg:border-b-0 lg:border-r">
            <VirtualFileExplorer
              folders={folders}
              files={files}
              activeId={activeId}
              onSelect={setActiveId}
              onAddFile={addFile}
              onAddFolder={addFolder}
              onDeleteFile={deleteFile}
              onDeleteFolder={deleteFolder}
            />
          </aside>

          <div className="grid grid-rows-[1fr_1fr] lg:grid-cols-[1fr_1fr] lg:grid-rows-1">
            <div className="flex min-h-[16rem] flex-col border-b border-line lg:border-b-0 lg:border-r">
              <div className="border-b border-line px-3 py-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Editor
                </span>
              </div>
              <textarea
                value={activeFile ? activeFile.content : ''}
                onChange={(event) => updateContent(event.target.value)}
                spellCheck={false}
                placeholder="Pilih atau buat file terlebih dahulu."
                className="thin-scroll h-full min-h-[14rem] w-full flex-1 resize-none bg-[#0A0F1C] px-3 py-2.5 font-mono text-[12px] leading-relaxed text-slate-300 outline-none placeholder:text-slate-600"
              />
            </div>

            <div className="grid grid-rows-[1.35fr_1fr]">
              <div className="min-h-[14rem] border-b border-line">
                <LiveSandboxFrame srcDoc={srcDoc} status={status} frameKey={frameKey} />
              </div>
              <div className="min-h-[10rem]">
                <ConsolePanel logs={logs} onClear={() => setLogs([])} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}