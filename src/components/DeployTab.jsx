import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, ArrowUpRight, Coins, Rocket } from 'lucide-react'
import { deployFree, deployPaid } from '../data/lessonsData.js'
import CodeBlock from './CodeBlock.jsx'
import SectionHeading from './SectionHeading.jsx'

const SUBTABS = [
  { id: 'free', label: 'Jalur Gratis', icon: Rocket, accent: 'emerald' },
  { id: 'paid', label: 'Jalur Berbayar', icon: Coins, accent: 'violet' }
]

export default function DeployTab() {
  const [sub, setSub] = useState('free')
  const items = sub === 'free' ? deployFree : deployPaid

  return (
    <div className="space-y-7">
      <SectionHeading
        eyebrow="Tab 2 · Deploying"
        title="Dari kode lokal ke alamat publik"
        description="Ikuti urutan ini apa adanya. Jalur gratis cukup untuk belajar dan portofolio. Jalur berbayar dipakai saat butuh domain sendiri dan kendali server penuh."
      />

      <div className="inline-flex rounded-full border border-line bg-card p-1">
        {SUBTABS.map((tab) => {
          const isActive = sub === tab.id
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSub(tab.id)}
              className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-semibold transition-colors ${
                isActive ? 'text-ink' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="deploy-pill"
                  className={`absolute inset-0 -z-10 rounded-full ${
                    tab.id === 'free' ? 'bg-emerald' : 'bg-violet'
                  }`}
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
              className="group relative overflow-hidden rounded-2xl border border-line bg-card p-5 transition-colors hover:border-cyan/40"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
                <ArrowUpRight size={16} className="shrink-0 text-slate-600" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.summary}</p>

              <div className="mt-3 rounded-xl border border-violet/25 bg-violet/5 px-3.5 py-2.5">
                <p className="text-[12.5px] leading-relaxed text-violet-soft">{item.analogy}</p>
              </div>

              <ol className="mt-4 space-y-1.5">
                {item.steps.map((step, stepIndex) => (
                  <li key={step} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-300">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md bg-cyan/15 px-1 text-[10px] font-bold text-cyan">
                      {stepIndex + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              {item.code ? (
                <div className="mt-4">
                  <CodeBlock code={item.code} language="bash" title="Terminal" />
                </div>
              ) : null}

              {item.warning ? (
                <div className="mt-4 flex gap-2.5 rounded-xl border border-rose/35 bg-rose/10 px-3.5 py-3">
                  <AlertTriangle size={16} className="mt-0.5 shrink-0 text-rose" />
                  <p className="text-[12.5px] leading-relaxed text-rose-soft">{item.warning}</p>
                </div>
              ) : null}

              {item.note ? (
                <p className="mt-3 text-[12px] leading-relaxed text-slate-500">Catatan: {item.note}</p>
              ) : null}
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}