import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { coreSkills, techBadges } from '../data/projects'
import SectionWrapper from './SectionWrapper'

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm text-text-primary">{name}</span>
        <span className="font-mono text-sm text-neon-cyan">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="skills">
      <h2 className="section-title">{t.skills.title}</h2>
      <p className="section-subtitle">{t.skills.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8">
          <h3 className="font-display text-xl font-semibold text-text-primary mb-6">
            {t.skills.coreTitle}
          </h3>
          {coreSkills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
          ))}
        </div>

        <div className="glass-card p-8">
          <h3 className="font-display text-xl font-semibold text-text-primary mb-6">
            {t.skills.badgesTitle}
          </h3>
          <div className="flex flex-wrap gap-3">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card px-4 py-2 font-mono text-sm text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/20 cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
