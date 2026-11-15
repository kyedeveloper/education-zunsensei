import { AnimatePresence, motion } from 'framer-motion'
import { Eraser, Terminal } from 'lucide-react'

const LEVEL_STYLE = {
  log: 'text-slate-300',
  info: 'text-cyan',
  warn: 'text-amber-300',
  error: 'text-rose',
  system: 'text-slate-500'
}

export default function ConsolePanel({ logs, onClear }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-line px-3 py-2">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
          <Terminal size={12} /> Console
        </span>
        <button
          type="button"
          onClick={onClear}
          className="flex items-center gap-1 rounded-md border border-line px-2 py-0.5 text-[10.5px] text-slate-500 transition-colors hover:border-rose/50 hover:text-rose"
        >
          <Eraser size={10} /> Bersihkan
        </button>
      </div>

      <div className="thin-scroll flex-1 overflow-y-auto px-3 py-2 font-mono text-[11.5px] leading-relaxed">
        {logs.length === 0 ? (
          <p className="text-slate-600">
            Console kosong. Tekan &quot;Jalankan &amp; Visualkan&quot; untuk melihat output dan error asli.
          </p>
        ) : null}

        <AnimatePresence initial={false}>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className={`flex gap-2 border-b border-line/40 py-1 ${LEVEL_STYLE[log.level] || 'text-slate-300'}`}
            >
              <span className="shrink-0 select-none text-slate-700">
                {log.level === 'error' ? '✕' : log.level === 'warn' ? '!' : '›'}
              </span>
              <span className="break-words whitespace-pre-wrap">{log.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}