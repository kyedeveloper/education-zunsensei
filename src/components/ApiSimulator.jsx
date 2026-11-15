import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, Play, RotateCcw } from 'lucide-react'

const ACTIONS = [
  { id: 'info', label: 'info', needsText: false },
  { id: 'slugify', label: 'slugify', needsText: true },
  { id: 'base64-encode', label: 'base64-encode', needsText: true },
  { id: 'base64-decode', label: 'base64-decode', needsText: true },
  { id: 'uuid', label: 'uuid', needsText: false },
  { id: 'password', label: 'password', needsText: false },
  { id: 'reverse', label: 'reverse', needsText: true },
  { id: 'word-count', label: 'word-count', needsText: true }
]

function localFallback(action, text) {
  const base = { creator: 'ZunSensei' }
  if (action === 'info') {
    return {
      httpStatus: 200,
      body: {
        ...base,
        status: true,
        message: 'API aktif (mode lokal: serverless belum berjalan).',
        result: { available: ACTIONS.map((a) => a.id) }
      }
    }
  }
  if (action === 'uuid') {
    const rand = Math.random().toString(16).slice(2, 10)
    return {
      httpStatus: 200,
      body: { ...base, status: true, message: 'UUID dibuat.', result: { uuid: `local-${rand}-${Date.now()}` } }
    }
  }
  if (action === 'password') {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'
    let out = ''
    for (let i = 0; i < 16; i += 1) out += chars[Math.floor(Math.random() * chars.length)]
    return { httpStatus: 200, body: { ...base, status: true, message: 'Password dibuat.', result: { password: out } } }
  }
  if (text.trim() === '') {
    return {
      httpStatus: 400,
      body: { ...base, status: false, message: 'Parameter "text" wajib diisi.', result: null }
    }
  }
  if (action === 'slugify') {
    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
    return { httpStatus: 200, body: { ...base, status: true, message: 'Slug dibuat.', result: { slug } } }
  }
  if (action === 'reverse') {
    return {
      httpStatus: 200,
      body: { ...base, status: true, message: 'Teks dibalik.', result: { reversed: text.split('').reverse().join('') } }
    }
  }
  if (action === 'word-count') {
    const words = text.trim().split(/\s+/).filter(Boolean)
    return {
      httpStatus: 200,
      body: {
        ...base,
        status: true,
        message: 'Teks dihitung.',
        result: { words: words.length, characters: text.length }
      }
    }
  }
  if (action === 'base64-encode') {
    return {
      httpStatus: 200,
      body: { ...base, status: true, message: 'Teks di-encode.', result: { base64: btoa(text) } }
    }
  }
  return {
    httpStatus: 200,
    body: { ...base, status: true, message: 'Teks di-decode.', result: { text: atob(text) } }
  }
}

export default function ApiSimulator() {
  const [action, setAction] = useState('info')
  const [text, setText] = useState('Belajar API Tanpa Ribet')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const current = ACTIONS.find((a) => a.id === action)

  const run = async () => {
    setLoading(true)
    setResult(null)
    const url = `/api/tools?action=${encodeURIComponent(action)}&text=${encodeURIComponent(text)}`
    let payload = null

    try {
      const response = await fetch(url)
      const contentType = response.headers.get('content-type') || ''
      if (contentType.includes('application/json')) {
        payload = { httpStatus: response.status, body: await response.json() }
      }
    } catch (error) {
      payload = null
    }

    if (!payload) {
      await new Promise((resolve) => window.setTimeout(resolve, 320))
      payload = localFallback(action, text)
    }

    setResult(payload)
    setLoading(false)
  }

  const reset = () => {
    setAction('info')
    setText('Belajar API Tanpa Ribet')
    setResult(null)
  }

  const isOk = result && result.httpStatus >= 200 && result.httpStatus < 300

  return (
    <div className="surface overflow-hidden">
      <div className="border-b border-line bg-panel/60 px-5 py-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Live API Simulator</h3>
        <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">
          Kirim permintaan nyata ke <span className="font-mono text-cyan">/api/tools</span>. Kalau serverless
          belum aktif di mesin lokal, simulator otomatis memakai salinan logika yang sama.
        </p>
      </div>

      <div className="space-y-4 p-5">
        <div className="no-scrollbar flex gap-1.5 overflow-x-auto pb-1">
          {ACTIONS.map((item) => {
            const isActive = action === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setAction(item.id)}
                className={`relative shrink-0 rounded-lg px-2.5 py-1.5 font-mono text-[11.5px] font-semibold transition-colors ${
                  isActive ? 'text-ink' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="api-action-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-cyan"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                ) : (
                  <span className="absolute inset-0 -z-10 rounded-lg border border-line bg-card" />
                )}
                {item.label}
              </button>
            )
          })}
        </div>

        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Parameter text
          </span>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            disabled={current && !current.needsText}
            placeholder={current && !current.needsText ? 'Tidak dipakai untuk aksi ini' : 'Tulis teks di sini'}
            className="mt-1.5 w-full rounded-xl border border-line bg-ink/70 px-3.5 py-2.5 font-mono text-[12.5px] text-slate-200 outline-none transition-colors placeholder:text-slate-600 focus:border-cyan/60 disabled:opacity-50"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <motion.button
            type="button"
            onClick={run}
            disabled={loading}
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -2 }}
            className="btn-primary disabled:opacity-60"
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <Play size={15} />}
            {loading ? 'Mengirim...' : 'Kirim Request'}
          </motion.button>
          <button type="button" onClick={reset} className="btn-ghost">
            <RotateCcw size={15} />
            Reset
          </button>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {result ? (
            <motion.div
              key={`${action}-${result.httpStatus}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.26 }}
              className={`overflow-hidden rounded-xl border ${
                isOk ? 'border-emerald/40 bg-emerald/5' : 'border-rose/40 bg-rose/5'
              }`}
            >
              <div
                className={`flex items-center justify-between border-b px-3.5 py-2 ${
                  isOk ? 'border-emerald/30' : 'border-rose/30'
                }`}
              >
                <span
                  className={`font-mono text-[11.5px] font-bold ${isOk ? 'text-emerald' : 'text-rose'}`}
                >
                  HTTP {result.httpStatus}
                </span>
                <span className="font-mono text-[10.5px] text-slate-500">
                  {isOk ? 'OK' : 'GAGAL'}
                </span>
              </div>
              <pre className="thin-scroll max-h-64 overflow-auto px-3.5 py-3">
                <code className="block whitespace-pre font-mono text-[12px] leading-relaxed text-slate-300">
                  {JSON.stringify(result.body, null, 2)}
                </code>
              </pre>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}