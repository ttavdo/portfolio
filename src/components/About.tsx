import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import SectionWrapper from './SectionWrapper'

export default function About() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="section-title">{t.about.title}</h2>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-green-400/30 text-green-400 bg-green-400/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t.about.available}
          </span>
          <p className="text-text-secondary text-lg leading-relaxed">{t.about.text}</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/40 via-neon-violet/20 to-transparent" />
          <div className="space-y-8">
            {t.about.timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-12"
              >
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
                <span className="font-mono text-neon-cyan text-sm">{item.year}</span>
                <h3 className="font-display text-text-primary font-semibold mt-1">{item.title}</h3>
                <p className="text-text-secondary text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
