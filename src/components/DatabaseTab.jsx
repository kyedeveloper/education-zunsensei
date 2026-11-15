import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cloud, FileJson, Server } from 'lucide-react'
import { databaseDocs } from '../data/lessonsData.js'
import CodeBlock from './CodeBlock.jsx'
import SectionHeading from './SectionHeading.jsx'

const SUBTABS = [
  { id: 'manual', label: 'Manual dari Code', icon: FileJson, accent: 'cyan' },
  { id: 'cloudFree', label: 'Cloud Gratis', icon: Cloud, accent: 'emerald' },
  { id: 'paid', label: 'Berbayar & VPS', icon: Server, accent: 'violet' }
]

export default function DatabaseTab() {
  const [sub, setSub] = useState('manual')
  const items = databaseDocs[sub]

  return (
    <div className="space-y-7">
      <SectionHeading
        eyebrow="Tab 4 · Database"
        title="Simpan data dengan cara yang sesuai skala"
        description="Mulai dari file JSON kalau masih belajar. Naik ke cloud gratis saat butuh akses dari mana saja. Pindah ke layanan berbayar atau VPS sendiri saat data mulai serius."
      />

      <div className="no-scrollbar inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-card p-1">
        {SUBTABS.map((tab) => {
          const isActive = sub === tab.id
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSub(tab.id)}
              className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-semibold transition-colors ${
                isActive ? 'text-ink' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="db-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-cyan"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              ) : null}
              <Icon size={14} />
              {tab.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={sub}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="surface p-5"
            >
              <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.summary}</p>
              <div className="mt-3 rounded-xl border border-violet/25 bg-violet/5 px-3.5 py-2.5">
                <p className="text-[12.5px] leading-relaxed text-violet-soft">{item.analogy}</p>
              </div>
              <div className="mt-4">
                <CodeBlock code={item.code} language="javascript" title="Contoh" />
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-slate-500">{item.note}</p>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}