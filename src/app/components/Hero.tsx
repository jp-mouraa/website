'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center px-6 pt-20 pb-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-10"
        >
          <div className="flex-1 min-w-0">
            <div className="text-[11px] text-[#707070] tracking-[0.2em] uppercase mb-6">
              Porto Alegre · BR
            </div>

            <h1 className="font-serif text-[clamp(44px,8vw,88px)] leading-[1.02] tracking-tight text-white mb-8">
              Hi, I&apos;m <br />
              João Pedro.
            </h1>

            <p className="text-[16px] md:text-[17px] text-[#a8a8a8] leading-[1.7] max-w-xl">
              Student at{' '}
              <span className="text-[#ededed]">PUCRS</span>. BSc in Data
              Science and AI, now pursuing an MSc in Computer Science with a
              focus on Computer Vision.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="shrink-0 relative"
          >
            <div className="absolute inset-0 rounded-full ring-1 ring-[#333] animate-pulse-ring pointer-events-none" />
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden bg-[#1a1a1a] ring-1 ring-[#333]">
              <Image
                src="/me.jpg"
                alt="João Pedro de Moura"
                fill
                sizes="320px"
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-[11px] text-[#4a4a4a] tracking-[0.2em] uppercase"
        >
          ↓ Scroll
        </motion.div>
      </div>
    </section>
  )
}