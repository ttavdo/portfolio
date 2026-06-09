import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import SectionWrapper from './SectionWrapper'
import MagneticButton from './MagneticButton'

export default function Teaching() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="teaching">
      <h2 className="section-title">{t.teaching.title}</h2>
      <p className="section-subtitle">{t.teaching.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.teaching.cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-8 flex flex-col"
          >
            <span className="text-4xl mb-4">{card.icon}</span>
            <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
              {card.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
              {card.desc}
            </p>
            <p className="font-mono text-xs text-neon-cyan mb-6">{card.meta}</p>
            <MagneticButton href="#contact">
              <span className="btn-glass text-sm w-full text-center block">
                {i === 2 ? t.teaching.contact : t.teaching.learnMore}
              </span>
            </MagneticButton>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
