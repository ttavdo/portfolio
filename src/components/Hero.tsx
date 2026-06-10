import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import MagneticButton from './MagneticButton'
import temoPhoto from '../assets/temo.webp'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative z-10 min-h-screen flex items-center px-4 md:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-neon-cyan text-sm mb-4 tracking-widest uppercase">
            Portfolio 2026
          </motion.p>

          <motion.h1 variants={item} className="font-display text-5xl md:text-7xl font-bold neon-text mb-4 leading-tight">
            {t.hero.name}
          </motion.h1>

          <motion.p variants={item} className="font-display text-xl md:text-2xl text-text-primary mb-2 font-semibold">
            {t.hero.slogan}
          </motion.p>

          <motion.p variants={item} className="font-mono text-text-secondary text-sm md:text-base mb-8 typing-cursor">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <MagneticButton href="#projects">
              <span className="btn-neon">{t.hero.ctaWork}</span>
            </MagneticButton>
            <MagneticButton href="#contact">
              <span className="btn-glass">{t.hero.ctaContact}</span>
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-6 md:gap-10">
            {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((stat) => (
              <div key={stat} className="text-center">
                <p className="font-display text-sm text-text-secondary">{stat}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-2xl border border-neon-cyan/20 rotate-6 animate-pulse" />
            <div className="absolute inset-4 rounded-2xl border border-neon-violet/20 -rotate-3" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card w-72 h-72 overflow-hidden p-0">
                <img
                  src={temoPhoto}
                  alt="Temo Tavdgiridze"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
              <span className="text-neon-cyan font-mono text-xs">{'{}'}</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-neon-violet/10 border border-neon-violet/30 flex items-center justify-center">
              <span className="text-neon-violet font-mono text-xs">{'</>'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
