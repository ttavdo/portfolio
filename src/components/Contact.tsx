import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './icons'
import { useLanguage } from '../hooks/useLanguage'
import SectionWrapper from './SectionWrapper'
import MagneticButton from './MagneticButton'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = t.contact.nameError
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t.contact.emailError
    if (form.message.trim().length < 10) errs.message = t.contact.messageError
    return errs
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  const contactLinks = [
    { icon: Mail, label: 'temotavdgiridze1226@gmail.com', href: 'mailto:temotavdgiridze1226@gmail.com', custom: false },
    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/%E1%83%97%E1%83%94%E1%83%9B%E1%83%9D-%E1%83%97%E1%83%90%E1%83%95%E1%83%93%E1%83%92%E1%83%98%E1%83%A0%E1%83%98%E1%83%AB%E1%83%94-225bb038b/', custom: true },
    { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/tavdo', custom: true },
    { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/tavdgiridze_temo', custom: true },
    { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/temo.tavdgiridzeee', custom: true },
    { icon: MapPin, label: t.contact.location, href: '#', custom: false },
  ]

  return (
    <SectionWrapper id="contact">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="section-subtitle">{t.contact.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          {contactLinks.map(({ icon: Icon, label, href, custom }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center group-hover:border-neon-cyan/30 transition-colors">
                {custom ? (
                  <Icon size={20} className="text-neon-cyan" />
                ) : (
                  <Icon size={20} className="text-neon-cyan" />
                )}
              </div>
              <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                {label}
              </span>
            </motion.a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5" noValidate>
          <div>
            <input
              type="text"
              placeholder={t.contact.name}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`input-glass ${errors.name ? 'input-error' : ''}`}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1 font-mono">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder={t.contact.email}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`input-glass ${errors.email ? 'input-error' : ''}`}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1 font-mono">{errors.email}</p>}
          </div>

          <div>
            <textarea
              placeholder={t.contact.message}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`input-glass resize-none ${errors.message ? 'input-error' : ''}`}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>}
          </div>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm font-mono"
            >
              {t.contact.success}
            </motion.p>
          )}

          <MagneticButton type="submit">
            <span className="btn-neon w-full text-center block">{t.contact.send}</span>
          </MagneticButton>
        </form>
      </div>
    </SectionWrapper>
  )
}
