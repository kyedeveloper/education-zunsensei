import { AnimatePresence, motion } from 'framer-motion'
import { AlertOctagon, CheckCircle2, Loader2, MonitorPlay } from 'lucide-react'

export default function LiveSandboxFrame({ srcDoc, status, frameKey }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-3 py-2">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
          <MonitorPlay size={12} /> Preview
        </span>

        <AnimatePresence mode="wait" initial={false}>
          {status === 'success' ? (
            <motion.span
              key="ok"
              initial={{ opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 34 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className="flex items-center gap-1.5 rounded-full border border-emerald/60 bg-emerald/15 px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-emerald shadow-[0_0_22px_-4px_rgba(52,211,153,0.8)]"
            >
              <CheckCircle2 size={11} /> STATUS: BERHASIL DIRENDER
            </motion.span>
          ) : null}

          {status === 'error' ? (
            <motion.span
              key="err"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, x: [0, -7, 7, -4, 4, 0] }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.42 }}
              className="flex items-center gap-1.5 rounded-full border border-rose/60 bg-rose/15 px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-rose shadow-[0_0_22px_-4px_rgba(251,113,133,0.85)]"
            >
              <AlertOctagon size={11} /> STATUS: GAGAL / ERROR
            </motion.span>
          ) : null}

          {status === 'running' ? (
            <motion.span
              key="run"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 rounded-full border border-cyan/50 bg-cyan/10 px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-cyan"
            >
              <Loader2 size={11} className="animate-spin" /> MENGEKSEKUSI
            </motion.span>
          ) : null}

          {status === 'idle' ? (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-full border border-line bg-panel px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-slate-500"
            >
              STATUS: MENUNGGU
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="relative flex-1 bg-white">
        {status === 'running' ? (
          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden bg-ink/40">
            <div className="animate-scan h-16 w-full bg-gradient-to-b from-transparent via-cyan/60 to-transparent" />
          </div>
        ) : null}

        {srcDoc ? (
          <iframe
            key={frameKey}
            title="Preview sandbox"
            srcDoc={srcDoc}
            sandbox="allow-scripts allow-modals"
            className="h-full w-full border-0 bg-white"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-ink text-center">
            <MonitorPlay size={22} className="text-slate-700" />
            <p className="max-w-[15rem] text-[12px] leading-relaxed text-slate-600">
              Preview muncul di sini setelah kamu menekan tombol jalankan.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}