import { motion } from 'framer-motion'
import { Github, MessageCircle, Send, Music2, Heart } from 'lucide-react'
import { profile } from '../data/lessonsData.js'

const ICONS = {
  github: Github,
  tiktok: Music2,
  telegram: Send,
  whatsapp: MessageCircle
}

export default function Footer({ onNavigate }) {
  return (
    <footer className="mt-16 border-t border-line/70 bg-panel/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
            ZunSensei DevLab
          </h3>
          <p className="mt-2 max-w-md text-[12.5px] leading-relaxed text-slate-500">
            Materi belajar coding, deploy, API publik, dan database. Semua contoh nyata, semua bisa
            dicoba di tab Praktik Visual.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => onNavigate('practice')} className="btn-ghost !px-4 !py-2 !text-[12px]">
              Buka Sandbox
            </button>
            <button type="button" onClick={() => onNavigate('deploy')} className="btn-ghost !px-4 !py-2 !text-[12px]">
              Mulai Deploy
            </button>
          </div>

          <p className="mt-5 flex items-center gap-1.5 text-[11.5px] text-slate-600">
            Dibuat dengan <Heart size={12} className="text-rose" /> oleh ZunSensei
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-sm font-black text-cyan">
              Z
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-slate-100">{profile.name}</p>
              <p className="truncate text-[11px] uppercase tracking-wider text-slate-500">
                {profile.role}
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {profile.socials.map((social) => {
              const Icon = ICONS[social.id] || Github
              return (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-panel text-slate-400 transition-colors hover:border-cyan/60 hover:text-cyan"
                >
                  <Icon size={14} />
                </motion.a>
              )
            })}
          </div>

          <p className="mt-3 text-[11px] leading-relaxed text-slate-600">
            GitHub kyedeveloper · TikTok @feyzzie1 · Telegram @fiyaaw · WA +6281936573304
          </p>
        </div>
      </div>

      <div className="border-t border-line/60 px-4 py-4 text-center">
        <p className="text-[11px] text-slate-600">
          © {new Date().getFullYear()} ZunSensei DevLab. Satu file API, nol drama limit Vercel.
        </p>
      </div>
    </footer>
  )
}