'use client'

import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiKaggle, SiHuggingface } from 'react-icons/si'

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'research', label: 'RESEARCH' },
  { id: 'work', label: 'WORK' },
  { id: 'contact', label: 'CONTACT' },
]

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

export default function Navbar() {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#141414]/70 border-b border-[#262626]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="hidden sm:flex items-center gap-7 text-[13px]">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                active === id
                  ? 'text-[#ededed]'
                  : 'text-[#707070] hover:text-[#a8a8a8]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="text-[#a8a8a8] text-[17px] hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}