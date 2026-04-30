'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const headline = ['Hi,', "I'm", 'João', 'Pedro.']

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[88vh] flex flex-col justify-center px-6 pt-20 pb-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-10">
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-[11px] text-[#707070] tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a4a4a] opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#a8a8a8]" />
              </span>
              Porto Alegre · BR
            </motion.div>

            <h1 className="font-serif text-[clamp(44px,8vw,88px)] leading-[1.02] tracking-tight text-white mb-8">
              {headline.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: '0.4em' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.08,
                    ease: EASE,
                  }}
                  className="inline-block mr-[0.2em]"
                >
                  {word === 'João' || word === 'Pedro.' ? (
                    <span className="text-[#ededed]">{word}</span>
                  ) : (
                    word
                  )}
                  {word === "I'm" && <br />}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              className="text-[16px] md:text-[17px] text-[#a8a8a8] leading-[1.7] max-w-xl"
            >
              Computer Science researcher at{' '}
              <span className="text-[#ededed]">PUCRS</span>, building the
              boundary between{' '}
              <span className="text-[#ededed]">computer vision</span> and
              applied machine learning — from the paper to the API.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="shrink-0 relative"
          >
            <div className="absolute inset-0 rounded-full ring-1 ring-[#333] animate-pulse-ring pointer-events-none" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden bg-[#1a1a1a] ring-1 ring-[#333]"
            >
              <Image
                src="/me.jpg"
                alt="João Pedro de Moura"
                fill
                sizes="320px"
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex items-center gap-3 text-[11px] text-[#4a4a4a] tracking-[0.2em] uppercase"
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ↓
          </motion.span>
          Scroll
        </motion.div>
      </div>
    </section>
  )
}
