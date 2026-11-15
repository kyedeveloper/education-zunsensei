import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ACCENTS = {
  cyan: 'from-cyan/70 to-transparent text-cyan border-cyan/40 bg-cyan/10',
  violet: 'from-violet/70 to-transparent text-violet border-violet/40 bg-violet/10',
  emerald: 'from-emerald/70 to-transparent text-emerald border-emerald/40 bg-emerald/10',
  rose: 'from-rose/70 to-transparent text-rose border-rose/40 bg-rose/10'
}

export default function LessonCard({ title, subtitle, meta, accent = 'cyan', onClick, icon: Icon }) {
  const tone = ACCENTS[accent] || ACCENTS.cyan

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.975 }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-line bg-card p-5 text-left gpu transition-colors duration-300 hover:border-cyan/50"
    >
      <div className="sweep-mask">
        <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]" />
      </div>

      <div className="relative flex items-start justify-between gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${tone}`}>
          {Icon ? <Icon size={18} /> : <span className="text-sm font-bold">{title.slice(0, 2)}</span>}
        </div>
        <ArrowUpRight
          size={16}
          className="shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
        />
      </div>

      <h3 className="relative mt-4 text-base font-semibold text-slate-100 transition-colors group-hover:text-cyan">
        {title}
      </h3>
      <p className="relative mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-400">{subtitle}</p>
      {meta ? (
        <span className="relative mt-4 inline-flex rounded-full border border-line bg-panel px-2.5 py-1 text-[11px] font-medium text-slate-500">
          {meta}
        </span>
      ) : null}
    </motion.button>
  )
}