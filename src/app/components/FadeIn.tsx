'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'

type FadeInProps = HTMLMotionProps<'div'> & {
  delay?: number
  y?: number
}

export default function FadeIn({
  children,
  delay = 0,
  y = 16,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
