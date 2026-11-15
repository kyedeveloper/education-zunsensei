import { AnimatePresence, motion } from 'framer-motion'
import { apiDocs } from '../data/lessonsData.js'
import ApiSimulator from './ApiSimulator.jsx'
import CodeBlock from './CodeBlock.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function ApiTab() {
  return (
    <div className="space-y-7">
      <SectionHeading
        eyebrow="Tab 3 · Public Open-Source API"
        title="Bangun API publik yang rapi, aman, dan tetap 1 file"
        description="API publik berarti orang lain boleh memanggilnya. Karena itu format jawaban harus konsisten, CORS harus benar, dan parameter wajib divalidasi. Semua contoh di bawah memakai pola router tunggal."
      />

      <ApiSimulator />

      <div className="space-y-5">
        {apiDocs.map((doc, index) => (
          <motion.section
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="surface p-5"
          >
            <h3 className="text-base font-semibold text-slate-100">{doc.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{doc.summary}</p>
            <div className="mt-3 rounded-xl border border-cyan/25 bg-cyan/5 px-3.5 py-2.5">
              <p className="text-[12.5px] leading-relaxed text-cyan-soft">{doc.analogy}</p>
            </div>
            <div className="mt-4">
              <CodeBlock code={doc.code} language="javascript" title="Contoh" />
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-slate-500">{doc.note}</p>
          </motion.section>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-emerald/30 bg-emerald/5 p-5"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald">Batas Vercel</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
            Folder <span className="font-mono text-emerald">api/</span> pada proyek ini berisi tepat
            <span className="font-semibold text-emerald"> 1 file</span>. Satu file = satu Serverless
            Function. Selama kamu memakai pola <span className="font-mono">?action=</span>, kamu bisa
            menambah puluhan fitur tanpa menyentuh limit 12 functions sama sekali.
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}