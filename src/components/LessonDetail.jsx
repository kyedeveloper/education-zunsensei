import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Boxes, FunctionSquare, Lightbulb, Repeat, Sparkles } from 'lucide-react'
import CodeBlock from './CodeBlock.jsx'

const SECTIONS = [
  { key: 'analogy', label: 'Analogi Dunia Nyata', icon: Lightbulb, accent: 'text-cyan' },
  { key: 'structure', label: 'Struktur Dasar', icon: Boxes, accent: 'text-violet' },
  { key: 'variables', label: 'Variabel / Penyimpanan', icon: BookOpen, accent: 'text-emerald' },
  { key: 'functions', label: 'Fungsi', icon: FunctionSquare, accent: 'text-cyan' },
  { key: 'loops', label: 'Perulangan (Loop)', icon: Repeat, accent: 'text-violet' },
  { key: 'example', label: 'Contoh Mini Siap Pakai', icon: Sparkles, accent: 'text-emerald' }
]

export default function LessonDetail({ language, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 26 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -26 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <button type="button" onClick={onBack} className="btn-ghost">
        <ArrowLeft size={16} />
        Kembali ke daftar bahasa
      </button>

      <div className="surface p-6">
        <span className="chip border-cyan/30 bg-cyan/10 text-cyan">{language.tagline}</span>
        <h2 className="mt-4 text-2xl font-bold text-slate-100">{language.name}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">{language.description}</p>
      </div>

      <div className="space-y-5">
        {SECTIONS.map((section, index) => {
          const Icon = section.icon
          const value = language[section.key]
          if (!value) return null

          return (
            <motion.section
              key={section.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
              className="surface p-5"
            >
              <div className="flex items-center gap-2.5">
                <Icon size={16} className={section.accent} />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  {section.label}
                </h3>
              </div>

              {typeof value === 'string' ? (
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{value}</p>
              ) : (
                <div className="mt-3 space-y-3">
                  {value.title ? (
                    <p className="text-sm font-semibold text-slate-200">{value.title}</p>
                  ) : null}
                  {value.note ? (
                    <p className="text-[13px] leading-relaxed text-slate-400">{value.note}</p>
                  ) : null}
                  <CodeBlock code={value.code} language={language.name} title={language.name} />
                </div>
              )}
            </motion.section>
          )
        })}
      </div>
    </motion.div>
  )
}