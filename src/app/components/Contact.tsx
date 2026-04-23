'use client'

import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiKaggle, SiHuggingface } from 'react-icons/si'
import FadeIn from './FadeIn'

const EMAIL = 'joaomoura70718@gmail.com'

const socials = [
  {
    href: 'https://github.com/jp-mouraa',
    label: 'GitHub',
    Icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-de-moura-medeiros-aaab05202/',
    label: 'LinkedIn',
    Icon: FaLinkedin,
  },
  {
    href: 'https://www.kaggle.com/joopedrodemoura',
    label: 'Kaggle',
    Icon: SiKaggle,
  },
  {
    href: 'https://huggingface.co/jpmoura',
    label: 'Hugging Face',
    Icon: SiHuggingface,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section
      id="contact"
      className="px-6 py-32 border-t border-[#262626]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <div className="text-[11px] text-[#707070] tracking-[0.2em] uppercase mb-10">
            05 — Contact
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-[clamp(44px,8vw,80px)] leading-[1.05] tracking-tight text-white mb-8">
            Let&apos;s build <br />
            something.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[16px] text-[#a8a8a8] mb-10 max-w-md mx-auto leading-relaxed">
            Open to collaborations, interesting problems, and good
            conversations. Drop me a line.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <button
            onClick={handleCopy}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#333333] hover:border-[#4a4a4a] text-[14px] text-[#ededed] transition-all hover:bg-[#1a1a1a] cursor-pointer"
          >
            <span className="font-mono">{copied ? 'copied!' : EMAIL}</span>
            <span className="text-[#707070] group-hover:text-[#a8a8a8] transition-colors">
              {copied ? '✓' : '⧉'}
            </span>
          </button>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-6 mt-12">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#707070] hover:text-white transition-colors"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}