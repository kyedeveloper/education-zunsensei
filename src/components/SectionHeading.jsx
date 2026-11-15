import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      {eyebrow ? (
        <span className="chip mb-3 border-cyan/30 bg-cyan/10 text-cyan">{eyebrow}</span>
      ) : null}
      <h2 className="text-balance text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-[15px]">{description}</p>
      ) : null}
    </motion.div>
  )
}