import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  delay?: number
}

export default function SectionWrapper({ id, children, className = '', delay = 0 }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`relative z-10 py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  )
}
