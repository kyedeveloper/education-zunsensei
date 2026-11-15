import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Terminal } from 'lucide-react'

export default function CodeBlock({ code, language = 'bash', title }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code)
      } else {
        const area = document.createElement('textarea')
        area.value = code
        document.body.appendChild(area)
        area.select()
        document.execCommand('copy')
        document.body.removeChild(area)
      }
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch (error) {
      console.warn('Gagal menyalin', error)
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0A0F1C]">
      <div className="flex items-center justify-between gap-3 border-b border-line/80 bg-panel/70 px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <Terminal size={14} className="shrink-0 text-cyan" />
          <span className="truncate text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {title || language}
          </span>
        </div>
        <motion.button
          type="button"
          onClick={handleCopy}
          whileTap={{ scale: 0.92 }}
          whileHover={{ y: -1 }}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition-colors ${
            copied
              ? 'border-emerald/60 bg-emerald/10 text-emerald'
              : 'border-line bg-card text-slate-400 hover:border-cyan/60 hover:text-cyan'
          }`}
          aria-label="Salin kode"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="ok"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 520, damping: 22 }}
                className="flex items-center gap-1.5"
              >
                <Check size={12} />
                Tersalin!
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.16 }}
                className="flex items-center gap-1.5"
              >
                <Copy size={12} />
                Copy
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      <pre className="thin-scroll max-h-[26rem] overflow-auto px-4 py-3">
        <code className="block whitespace-pre font-mono text-[12.5px] leading-relaxed text-slate-300">
          {code}
        </code>
      </pre>
    </div>
  )
}