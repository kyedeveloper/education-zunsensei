import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { codingCategories, languages } from '../data/lessonsData.js'
import LessonCard from './LessonCard.jsx'
import LessonDetail from './LessonDetail.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function CodingTab() {
  const [category, setCategory] = useState('frontend')
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  const selected = useMemo(
    () => languages.find((item) => item.id === selectedId) || null,
    [selectedId]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return languages.filter((item) => {
      const matchCategory = q ? true : item.category === category
      const matchQuery =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      return matchCategory && matchQuery
    })
  }, [category, query])

  return (
    <div className="space-y-7">
      <SectionHeading
        eyebrow="Tab 1 · Coding"
        title="Pilih bahasa, pahami analoginya, lalu salin contohnya"
        description="Semua bahasa di sini dijelaskan dengan analogi dunia nyata dan contoh kode mini yang bisa langsung kamu jalankan. Mulai dari yang paling relevan dengan tujuanmu."
      />

      <AnimatePresence mode="wait" initial={false}>
        {selected ? (
          <LessonDetail key={selected.id} language={selected} onBack={() => setSelectedId(null)} />
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari bahasa, misalnya: python, flutter, roblox"
                className="w-full rounded-xl border border-line bg-card py-3 pl-10 pr-4 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-600 focus:border-cyan/60"
              />
            </div>

            <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1">
              {codingCategories.map((item) => {
                const isActive = category === item.id && query.trim() === ''
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setCategory(item.id)
                      setQuery('')
                    }}
                    className={`relative shrink-0 rounded-full px-3.5 py-2 text-[12px] font-semibold transition-colors ${
                      isActive ? 'text-ink' : 'text-slate-400 hover:text-slate-100'
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="category-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-cyan shadow-[0_0_24px_-6px_rgba(56,189,248,0.8)]"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    ) : (
                      <span className="absolute inset-0 -z-10 rounded-full border border-line bg-card" />
                    )}
                    {item.label}
                  </button>
                )
              })}
            </div>

            <p className="text-xs text-slate-500">
              {query.trim()
                ? `Hasil pencarian "${query}" — ${filtered.length} bahasa ditemukan.`
                : codingCategories.find((c) => c.id === category)?.hint}
            </p>

            <motion.div layout className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.24 }}
                  >
                    <LessonCard
                      title={item.name}
                      subtitle={item.tagline}
                      meta={
                        codingCategories.find((c) => c.id === item.category)?.label || 'Bahasa'
                      }
                      accent={
                        codingCategories.find((c) => c.id === item.category)?.accent || 'cyan'
                      }
                      onClick={() => setSelectedId(item.id)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 ? (
              <div className="surface p-8 text-center">
                <p className="text-sm text-slate-400">
                  Tidak ada bahasa yang cocok. Coba kata kunci lain seperti &quot;api&quot;,
                  &quot;game&quot;, atau &quot;database&quot;.
                </p>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}