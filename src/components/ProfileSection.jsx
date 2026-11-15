import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Gamepad2, Github, MessageCircle, Send, Sparkles, Music2 } from 'lucide-react'
import { profile } from '../data/lessonsData.js'

const SOCIAL_ICONS = {
  github: Github,
  tiktok: Music2,
  telegram: Send,
  whatsapp: MessageCircle
}

const ACCENT_MAP = {
  cyan: 'border-cyan/40 bg-cyan/10 text-cyan hover:border-cyan hover:bg-cyan/20',
  violet: 'border-violet/40 bg-violet/10 text-violet hover:border-violet hover:bg-violet/20',
  emerald: 'border-emerald/40 bg-emerald/10 text-emerald hover:border-emerald hover:bg-emerald/20',
  rose: 'border-rose/40 bg-rose/10 text-rose hover:border-rose hover:bg-rose/20'
}

export default function ProfileSection() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 22 })
  const springY = useSpring(y, { stiffness: 220, damping: 22 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [9, -9])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-9, 9])

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="space-y-7">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl"
      >
        <span className="chip mb-3 border-cyan/30 bg-cyan/10 text-cyan">Tab 6 · Profil</span>
        <h2 className="text-balance text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">
          Orang di balik DevLab
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          DevLab dibuat karena tutorial deploy sering berputar-putar. Di sini semuanya ditulis lurus:
          langkah, kode, dan jeblokannya.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 gpu"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -inset-x-10 -top-24 h-48 bg-gradient-to-b from-cyan/25 to-transparent blur-2xl" />
          </div>

          <div className="sweep-mask">
            <div className="absolute inset-y-0 -left-full w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-[1400ms] group-hover:translate-x-[420%]" />
          </div>

          <div className="relative flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan/40 bg-gradient-to-br from-cyan/25 to-violet/25 text-xl font-black text-cyan">
              Z
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">{profile.name}</h3>
              <p className="text-[12.5px] font-medium uppercase tracking-wider text-cyan">
                {profile.role}
              </p>
            </div>
          </div>

          <p className="relative mt-4 text-sm leading-relaxed text-slate-400">{profile.bio}</p>

          <div className="relative mt-4 rounded-xl border border-line bg-ink/60 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Hobi</p>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-300">{profile.hobby}</p>
          </div>

          <div className="relative mt-4">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              <Gamepad2 size={13} /> Game favorit
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.games.map((game) => (
                <motion.span
                  key={game.id}
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={`inline-flex cursor-default items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold ${
                    ACCENT_MAP[game.accent]
                  }`}
                >
                  <Sparkles size={12} />
                  {game.label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="surface p-6"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
            Media Sosial & Kontak
          </h3>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-500">
            Semua tautan aktif dan langsung menuju akun resmi.
          </p>

          <div className="mt-4 space-y-2">
            {profile.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.id] || Sparkles
              return (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 transition-colors ${
                    ACCENT_MAP[social.accent]
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon size={15} />
                    <span className="text-[13px] font-semibold">{social.label}</span>
                  </span>
                  <span className="font-mono text-[11.5px] opacity-80">{social.handle}</span>
                </motion.a>
              )
            })}
          </div>

          <p className="mt-4 text-[11.5px] leading-relaxed text-slate-600">
            Balasan paling cepat lewat Telegram. Untuk kerja sama proyek, sertakan detail singkat.
          </p>
        </motion.div>
      </div>
    </div>
  )
}