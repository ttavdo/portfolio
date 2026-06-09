import { motion, AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import { useLanguage } from './hooks/useLanguage'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Teaching from './components/Teaching'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  const { lang } = useLanguage()

  return (
    <div className="relative min-h-screen bg-void">
      <ParticleBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Teaching />
          <Services />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
