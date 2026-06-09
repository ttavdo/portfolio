import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons'
import { useLanguage } from '../hooks/useLanguage'
import { projects } from '../data/projects'
import SectionWrapper from './SectionWrapper'

export default function Projects() {
  const { t, lang } = useLanguage()

  return (
    <SectionWrapper id="projects">
      <h2 className="section-title">{t.projects.title}</h2>
      <p className="section-subtitle">{t.projects.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card overflow-hidden group"
          >
            <div
              className="h-48 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)` }}
            >
              <img
                src={project.image}
                alt={project.title[lang]}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 border-b-2 opacity-40 pointer-events-none"
                style={{ borderColor: project.color, boxShadow: `inset 0 -20px 30px -20px ${project.color}40` }}
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="badge-pill">{tech}</span>
                ))}
              </div>

              <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                {project.title[lang]}
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {project.description[lang]}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-mono text-neon-cyan hover:underline"
                >
                  <ExternalLink size={14} />
                  {t.projects.liveDemo}
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-mono text-text-secondary hover:text-neon-cyan transition-colors"
                >
                  <GithubIcon size={14} />
                  {t.projects.github}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
