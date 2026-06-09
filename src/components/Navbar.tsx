import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import logoHeader from '../assets/logo-header.webp'

const navLinks = [
  { key: 'about' as const, href: '#about' },
  { key: 'projects' as const, href: '#projects' },
  { key: 'skills' as const, href: '#skills' },
  { key: 'teaching' as const, href: '#teaching' },
  { key: 'services' as const, href: '#services' },
  { key: 'contact' as const, href: '#contact' },
]

export default function Navbar() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(5,5,8,0.8)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center group" aria-label="Home">
          <img
            src={logoHeader}
            alt="Temo Tavdgiridze — Creative Developer"
            className="h-10 w-auto group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.4)] transition-all"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.key} href={link.href} className="nav-link">
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="px-3 py-1.5 rounded-lg border border-glass-border text-sm font-mono text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/30 transition-all"
            aria-label="Toggle language"
          >
            {lang === 'en' ? '🇬🇪 KA' : '🇬🇧 EN'}
          </button>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-16 bg-[rgba(5,5,8,0.95)] backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.key}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-display text-2xl text-text-primary hover:text-neon-cyan transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[link.key]}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
