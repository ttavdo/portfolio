import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import SectionWrapper from './SectionWrapper'

export default function Services() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="services">
      <h2 className="section-title">{t.services.title}</h2>
      <p className="section-subtitle">{t.services.subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.services.items.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <span className="text-4xl block mb-4">{service.icon}</span>
            <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
              {service.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {service.desc}
            </p>
            <p className="font-mono text-xs text-neon-cyan">{service.price}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
