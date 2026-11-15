import { motion } from 'framer-motion'
import { Menu, X, TerminalSquare } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function Navbar({ tabs, active, onChange }) {
  const [open, setOpen] = useState(false)

  const handleSelect = (id) => {
    onChange(id)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => handleSelect('coding')}
          className="flex items-center gap-2.5"
          aria-label="ZunSensei DevLab"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-cyan">
            <TerminalSquare size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-slate-100">ZunSensei DevLab</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Belajar tanpa ribet
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {tabs.map((tab) => {
            const isActive = active === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleSelect(tab.id)}
                className={`relative rounded-xl px-3 py-2 text-[12.5px] font-semibold transition-colors duration-200 ${
                  isActive ? 'text-ink' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-xl bg-cyan shadow-[0_0_28px_-6px_rgba(56,189,248,0.75)]"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="whitespace-nowrap">
                  {tab.emoji} {tab.short}
                </span>
              </button>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-card text-slate-300 lg:hidden"
          aria-label="Buka menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line/70 lg:hidden"
          >
            <div className="grid grid-cols-1 gap-1 px-3 py-3 sm:grid-cols-2">
              {tabs.map((tab) => {
                const isActive = active === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleSelect(tab.id)}
                    className={`relative rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                      isActive ? 'text-ink' : 'text-slate-400'
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill-mobile"
                        className="absolute inset-0 -z-10 rounded-xl bg-cyan"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    {tab.emoji} {tab.label}
                  </button>
                )
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}