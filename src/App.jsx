import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Database,
  FlaskConical,
  Globe2,
  Rocket,
  Terminal,
  UserRound
} from 'lucide-react'
import AmbientBackground from './components/AmbientBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CodingTab from './components/CodingTab.jsx'
import DeployTab from './components/DeployTab.jsx'
import ApiTab from './components/ApiTab.jsx'
import DatabaseTab from './components/DatabaseTab.jsx'
import ProfileSection from './components/ProfileSection.jsx'
import PracticeLab from './practice/PracticeLab.jsx'

const TABS = [
  { id: 'coding', emoji: '💻', label: 'Coding (Semua Bahasa)', short: 'Coding', icon: Terminal },
  { id: 'deploy', emoji: '🚀', label: 'Deploying (Gratis & VPS)', short: 'Deploying', icon: Rocket },
  { id: 'api', emoji: '🔌', label: 'Public Open-Source API', short: 'Public API', icon: Globe2 },
  { id: 'database', emoji: '🗄️', label: 'Database (Code, Gratis & Pro)', short: 'Database', icon: Database },
  { id: 'practice', emoji: '🧪', label: 'Praktik Visual (Live Sandbox)', short: 'Praktik', icon: FlaskConical },
  { id: 'profile', emoji: '👨‍💻', label: 'Profil ZunSensei', short: 'Profil', icon: UserRound }
]

const HERO_STATS = [
  { value: '20', label: 'bahasa dijelaskan' },
  { value: '1', label: 'file API router' },
  { value: '3', label: 'tantangan sandbox' }
]

export default function App() {
  const [activeTab, setActiveTab] = useState('coding')

  const renderTab = () => {
    if (activeTab === 'coding') return <CodingTab />
    if (activeTab === 'deploy') return <DeployTab />
    if (activeTab === 'api') return <ApiTab />
    if (activeTab === 'database') return <DatabaseTab />
    if (activeTab === 'practice') return <PracticeLab />
    return <ProfileSection />
  }

  return (
    <div className="min-h-screen">
      <AmbientBackground />
      <Navbar tabs={TABS} active={activeTab} onChange={setActiveTab} />

      <main className="mx-auto max-w-7xl px-4 pb-4 pt-10 sm:px-6">
        <motion.section
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
          }}
          className="mb-12"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="chip border-cyan/30 bg-cyan/10 text-cyan"
          >
            ZunSensei DevLab · v1.0
          </motion.span>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-4xl text-balance text-3xl font-extrabold leading-[1.12] text-slate-100 sm:text-5xl"
          >
            Belajar coding, deploy, API, dan database{' '}
            <span className="bg-gradient-to-r from-cyan via-violet to-emerald bg-clip-text text-transparent">
              tanpa berputar-putar
            </span>
            .
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            Enam tab, semua terisi. Analogi dunia nyata, contoh kode siap salin, dan sandbox yang
            benar-benar menampilkan error kalau kodemu salah. Dibuat oleh ZunSensei.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            <motion.button
              type="button"
              onClick={() => setActiveTab('coding')}
              whileTap={{ scale: 0.96 }}
              className="btn-primary"
            >
              Mulai belajar <ArrowRight size={15} />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActiveTab('practice')}
              whileTap={{ scale: 0.96 }}
              className="btn-ghost"
            >
              Buka sandbox
            </motion.button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-6"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-extrabold text-cyan">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-wider text-slate-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setActiveTab} />
    </div>
  )
}