import { useRef, useCallback } from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './icons'
import { useLanguage } from '../hooks/useLanguage'

const navLinks = [
  { key: 'about' as const, href: '#about' },
  { key: 'projects' as const, href: '#projects' },
  { key: 'skills' as const, href: '#skills' },
  { key: 'contact' as const, href: '#contact' },
]

export default function Footer() {
  const { t } = useLanguage()
  const burstRef = useRef<HTMLDivElement>(null)

  const triggerBurst = useCallback(() => {
    const container = burstRef.current
    if (!container) return

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      const angle = (Math.PI * 2 * i) / 20
      const velocity = 60 + Math.random() * 40
      const size = 3 + Math.random() * 4

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: #00f5ff;
        box-shadow: 0 0 6px #00f5ff;
        left: 50%;
        top: 50%;
        pointer-events: none;
        transition: all 0.8s ease-out;
      `
      container.appendChild(particle)

      requestAnimationFrame(() => {
        particle.style.transform = `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px)`
        particle.style.opacity = '0'
      })

      setTimeout(() => particle.remove(), 900)
    }
  }, [])

  return (
    <footer className="relative z-10 border-t border-[rgba(255,255,255,0.06)] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <div ref={burstRef} className="relative">
              <button
                onClick={triggerBurst}
                className="w-10 h-10 rounded-lg border border-neon-cyan/30 flex items-center justify-center font-display font-bold text-neon-cyan text-sm hover:shadow-neon transition-shadow cursor-pointer"
                aria-label="TT logo easter egg"
              >
                TT
              </button>
            </div>
            <div>
              <p className="font-display font-semibold text-text-primary">Temo Tavdgiridze</p>
              <p className="text-text-secondary text-sm">{t.footer.tagline}</p>
            </div>
          </div>

          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link.key} href={link.href} className="nav-link text-xs">
                {t.nav[link.key]}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {[
              { icon: GithubIcon, href: 'https://github.com/tavdo', custom: true },
              { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/%E1%83%97%E1%83%94%E1%83%9B%E1%83%9D-%E1%83%97%E1%83%90%E1%83%95%E1%83%93%E1%83%92%E1%83%98%E1%83%A0%E1%83%98%E1%83%AB%E1%83%94-225bb038b/', custom: true },
              { icon: InstagramIcon, href: 'https://instagram.com/tavdgiridze_temo', custom: true },
              { icon: FacebookIcon, href: 'https://www.facebook.com/temo.tavdgiridzeee', custom: true },
              { icon: Mail, href: 'mailto:temotavdgiridze1226@gmail.com', custom: false },
            ].map(({ icon: Icon, href, custom }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-neon-cyan/30 transition-colors"
                aria-label={href}
              >
                {custom ? (
                  <Icon size={18} className="text-text-secondary hover:text-neon-cyan" />
                ) : (
                  <Icon size={18} className="text-text-secondary hover:text-neon-cyan" />
                )}
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-text-secondary text-xs font-mono">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
