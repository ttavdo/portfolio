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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center mt-12"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-2xl border border-neon-cyan/20 rotate-6 animate-pulse" />
              <div className="absolute inset-4 rounded-2xl border border-neon-violet/20 -rotate-3" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card w-64 h-64 flex items-center justify-center">
                  <pre className="font-mono text-neon-cyan text-sm leading-relaxed select-none">
{`<Temo>
  role="dev"
  stack={[
    "React",
    "NestJS",
    "TypeScript"
  ]}
  location="Batumi"
</Temo>`}
                  </pre>
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
