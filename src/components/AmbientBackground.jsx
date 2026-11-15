import { motion } from 'framer-motion'

const ORBS = [
  {
    id: 'a',
    className: 'left-[-12%] top-[-10%] h-[26rem] w-[26rem] bg-cyan/20',
    duration: 18,
    delay: 0
  },
  {
    id: 'b',
    className: 'right-[-14%] top-[18%] h-[30rem] w-[30rem] bg-violet/20',
    duration: 22,
    delay: 1.5
  },
  {
    id: 'c',
    className: 'left-[22%] bottom-[-18%] h-[24rem] w-[24rem] bg-emerald/15',
    duration: 26,
    delay: 3
  }
]

export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.35]" />
      {ORBS.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-[110px] gpu ${orb.className}`}
          animate={{
            y: [0, -38, 0],
            x: [0, 24, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink" />
    </div>
  )
}