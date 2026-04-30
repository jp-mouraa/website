'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiKaggle, SiHuggingface } from 'react-icons/si'

const portalSections = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'research', label: 'RESEARCH' },
  { id: 'work', label: 'WORK' },
  { id: 'contact', label: 'CONTACT' },
]

const portalSocials = [
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

type PortalTheme = 'cosmic' | 'crimson' | 'parchment'

const headerThemes: Record<PortalTheme, {
  bg: string
  border: string
  divider: string
  link: string
  linkHover: string
  social: string
  socialHover: string
  meta: string
  metaHover: string
  buttonBorder: string
  buttonHoverBorder: string
  buttonHoverBg: string
  arrow: string
}> = {
  cosmic: {
    bg: 'bg-[#060814]/75',
    border: 'border-[#1c2138]',
    divider: 'bg-[#1c2138]',
    link: 'text-[#7a809a]',
    linkHover: 'hover:text-[#ededed]',
    social: 'text-[#a8aec5]',
    socialHover: 'hover:text-white',
    meta: 'text-[#7a809a]',
    metaHover: 'hover:text-white',
    buttonBorder: 'border-[#2c3147]',
    buttonHoverBorder: 'group-hover:border-[#4a5070]',
    buttonHoverBg: 'group-hover:bg-[#0e1226]',
    arrow: 'text-[#cfd6f0]',
  },
  crimson: {
    bg: 'bg-[#0a0505]/80',
    border: 'border-[#2a1818]',
    divider: 'bg-[#2a1818]',
    link: 'text-[#b89090]',
    linkHover: 'hover:text-white',
    social: 'text-[#c8a8a4]',
    socialHover: 'hover:text-white',
    meta: 'text-[#b89090]',
    metaHover: 'hover:text-white',
    buttonBorder: 'border-[#3a1818]',
    buttonHoverBorder: 'group-hover:border-[#5a2828]',
    buttonHoverBg: 'group-hover:bg-[#1a0a0a]',
    arrow: 'text-[#c84a4a]',
  },
  parchment: {
    bg: 'bg-[#120c05]/80',
    border: 'border-[#3a2c18]',
    divider: 'bg-[#3a2c18]',
    link: 'text-[#a89070]',
    linkHover: 'hover:text-[#f0e2c4]',
    social: 'text-[#c8b690]',
    socialHover: 'hover:text-[#f0e2c4]',
    meta: 'text-[#a89070]',
    metaHover: 'hover:text-[#f0e2c4]',
    buttonBorder: 'border-[#3a2c18]',
    buttonHoverBorder: 'group-hover:border-[#5a3e1c]',
    buttonHoverBg: 'group-hover:bg-[#1a1208]',
    arrow: 'text-[#c8923c]',
  },
}

function PortalHeader({
  theme,
  onClose,
  onBack,
}: {
  theme: PortalTheme
  onClose: () => void
  onBack?: () => void
}) {
  const t = headerThemes[theme]

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    onClose()
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 900)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
      className={`sticky top-0 z-20 border-b ${t.border} ${t.bg} backdrop-blur-md`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className={`hidden items-center gap-7 text-[13px] sm:flex ${t.link}`}>
          {portalSections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSectionClick(e, id)}
              className={`transition-colors ${t.linkHover}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {portalSocials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`transition-colors ${t.social} ${t.socialHover}`}
            >
              <Icon className="text-[15px] sm:text-[17px]" />
            </a>
          ))}

          <span className={`mx-1 hidden h-4 w-px sm:inline-block ${t.divider}`} />

          {onBack && (
            <button
              type="button"
              onClick={onBack}
              aria-label="Previous page"
              className={`group inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.25em] uppercase transition-colors ${t.meta} ${t.metaHover}`}
            >
              <motion.span
                className={t.arrow}
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                ←
              </motion.span>
              <span className="hidden md:inline">back</span>
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={`group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase transition-colors ${t.meta} ${t.metaHover}`}
          >
            <span className="hidden md:inline">close</span>
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full border text-base leading-none transition-all ${t.buttonBorder} ${t.buttonHoverBorder} ${t.buttonHoverBg}`}
            >
              ×
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  )
}

const CLOSED =
  'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%)'
const HALF =
  'polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)'
const OPEN =
  'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const coordinates = [
  { label: 'Coordinates', value: '30°S 51°W — Porto Alegre, under southern skies' },
  { label: 'Orbiting', value: 'computer vision research, applied ML, slow-cooked side projects' },
  { label: 'Listening', value: 'lo-fi instrumentals, ambient electronic, the occasional silence' },
  { label: 'Reading', value: 'Deep Learning (Goodfellow et al.) and whatever paper just dropped' },
  { label: 'Playing', value: 'Arc Raiders, sometimes Outer Wilds — one is space, one is just loud' },
  { label: 'Instruments', value: 'PyTorch, FastAPI, Neovim, Claude Code' },
  { label: 'Quietly into', value: 'astronomy, sci-fi, building things that don’t need to exist' },
  { label: 'Bad at', value: 'keeping things short — ironic, given the format' },
  { label: 'Trajectory', value: 'research that ships. not just publishes.' },
]

const animeShelf = [
  'Cowboy Bebop',
  'Mushishi',
  'Steins;Gate',
  'Vinland Saga',
  'Mob Psycho 100',
  'Made in Abyss',
  'FMA: Brotherhood',
  'Frieren: Beyond Journey’s End',
]

const animeNow = [
  { title: 'One Piece', note: 'somewhere past Wano, refusing to skip filler on principle' },
  { title: 'Frieren: Beyond Journey’s End', note: 'a slow rewatch — the rare show that earns its silences' },
  { title: 'Whatever just dropped', note: 'taste-testing the season with low expectations and high hopes' },
]

const strata = [
  { era: '1995', layer: 'Earliest layer', note: 'born in Porto Alegre, under the same southern sky I’d later try to map' },
  { era: '~2003', layer: 'First machine', note: 'a computer that felt like mine. Mostly broken things. Sometimes I fixed them' },
  { era: '~2010', layer: 'Olympiad years', note: 'the first time problems felt like puzzles instead of homework' },
  { era: '2020', layer: 'Data Science & AI', note: 'enrolled at PUCRS — slow recognition that I’d been circling this for years' },
  { era: '2024', layer: 'Computer vision', note: 'the first paper that actually shipped past the PDF' },
  { era: 'now', layer: 'Master’s thesis', note: 'research that ships — not just publishes' },
]

const artifacts = [
  { label: 'First book that lit me up', value: '“The Hitchhiker’s Guide to the Galaxy” — Douglas Adams' },
  { label: 'First code I felt proud of', value: 'a Python script to scrape my own grades, for a spreadsheet I was secretly maintaining' },
  { label: 'First wow in research', value: 'backpropagation, written by hand on paper, until it finally clicked' },
  { label: 'A tool I’ll never outgrow', value: 'pen, paper, and silence — despite everything else' },
  { label: 'Most worn artifact', value: 'a Moleskine I refuse to retire, half ruined, fully irreplaceable' },
]

const readingList = [
  'Deep Learning — Goodfellow, Bengio & Courville',
  'The Pragmatic Programmer',
  'Pale Blue Dot — Carl Sagan',
  'The Beginning of Infinity — David Deutsch',
  'whatever paper just landed on arXiv',
]

type Star = {
  x: number
  y: number
  r: number
  o: number
  tw: number
  d: number
}

export default function CornerPortal() {
  const [open, setOpen] = useState(false)
  const [showAnime, setShowAnime] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [visible, setVisible] = useState(false)
  const [stargazerNearBottom, setStargazerNearBottom] = useState(false)
  const [animeNearBottom, setAnimeNearBottom] = useState(false)

  const stars = useMemo<Star[]>(() => {
    let seed = 1337
    const rng = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }
    return Array.from({ length: 90 }, () => ({
      x: rng() * 100,
      y: rng() * 100,
      r: 0.3 + rng() * 1.3,
      o: 0.2 + rng() * 0.7,
      tw: 2 + rng() * 4,
      d: rng() * 3,
    }))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      setVisible(total - scrolled < 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (showHistory) setShowHistory(false)
      else if (showAnime) setShowAnime(false)
      else setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, showAnime, showHistory])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeAll = () => {
    setShowHistory(false)
    setShowAnime(false)
    setOpen(false)
  }

  const showRootTrigger = visible && !open
  const showStargazerTrigger =
    open && !showAnime && !showHistory && stargazerNearBottom
  const showAnimeTrigger = open && showAnime && !showHistory && animeNearBottom

  return (
    <>
      <AnimatePresence>
        {showRootTrigger && (
          <FloatingFold
            key="root-trigger"
            onPull={() => setOpen(true)}
            zIndexClass="z-30"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <StargazerPortal
            key="stargazer-portal"
            stars={stars}
            onClose={closeAll}
            onNearBottomChange={setStargazerNearBottom}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showStargazerTrigger && (
          <FloatingFold
            key="stargazer-trigger"
            onPull={() => setShowAnime(true)}
            zIndexClass="z-[55]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && showAnime && (
          <AnimePortal
            key="anime-portal"
            onClose={closeAll}
            onBack={() => setShowAnime(false)}
            onNearBottomChange={setAnimeNearBottom}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAnimeTrigger && (
          <FloatingFold
            key="anime-trigger"
            onPull={() => setShowHistory(true)}
            zIndexClass="z-[65]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && showAnime && showHistory && (
          <HistoryPortal
            key="history-portal"
            onClose={closeAll}
            onBack={() => setShowHistory(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function FloatingFold({
  onPull,
  zIndexClass,
}: {
  onPull: () => void
  zIndexClass: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, x: 24 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`fixed bottom-0 right-0 ${zIndexClass}`}
    >
      <CornerFold onPull={onPull} />
    </motion.div>
  )
}

function CornerFold({ onPull }: { onPull: () => void }) {
  const rawId = useId()
  const safeId = rawId.replace(/[^a-zA-Z0-9]/g, '')
  const fillId = `cf-fill-${safeId}`
  const shadowId = `cf-shadow-${safeId}`

  return (
    <motion.button
      type="button"
      onClick={onPull}
      onTap={onPull}
      aria-label="Pull the corner to open"
      drag
      dragSnapToOrigin
      dragElastic={0.4}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onDragEnd={(_, info) => {
        if (info.offset.x < -70 || info.offset.y < -70) {
          onPull()
        }
      }}
      className="group relative block h-[110px] w-[110px] cursor-grab select-none active:cursor-grabbing"
    >
      <svg
        viewBox="0 0 110 110"
        className="absolute inset-0 h-full w-full drop-shadow-[0_-6px_18px_rgba(0,0,0,0.5)]"
        aria-hidden
      >
        <defs>
          <linearGradient id={fillId} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1f1f1f" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
          <linearGradient id={shadowId} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path d="M 110 30 L 110 110 L 30 110 Z" fill={`url(#${fillId})`} />
        <path
          d="M 110 30 L 30 110"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
          className="stroke-[#3a3a3a] transition-[stroke] duration-300 group-hover:stroke-[#5a5a5a]"
        />
        <path
          d="M 110 30 L 30 110 L 110 110 Z"
          fill={`url(#${shadowId})`}
          opacity="0.35"
        />
        <text
          x="83"
          y="86"
          textAnchor="middle"
          fontSize="7"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          letterSpacing="2"
          transform="rotate(-45 83 83)"
          className="fill-[#7a7a7a] transition-[fill] duration-300 group-hover:fill-[#cfcfcf]"
        >
          PULL
        </text>
        <path
          d="M 96 96 L 88 88 M 88 92 L 88 88 L 92 88"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
          className="stroke-[#5a5a5a] transition-[stroke] duration-300 group-hover:stroke-[#cfcfcf]"
        />
      </svg>
    </motion.button>
  )
}

function StargazerPortal({
  stars,
  onClose,
  onNearBottomChange,
}: {
  stars: Star[]
  onClose: () => void
  onNearBottomChange: (near: boolean) => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const handler = () => {
      const remaining = el.scrollHeight - el.scrollTop - el.clientHeight
      onNearBottomChange(remaining < 400)
    }
    handler()
    el.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      el.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
      onNearBottomChange(false)
    }
  }, [onNearBottomChange])

  return (
    <motion.div
      key="stargazer-portal-inner"
      initial={{ clipPath: CLOSED }}
      animate={{ clipPath: [CLOSED, HALF, OPEN] }}
      exit={{ clipPath: [OPEN, HALF, CLOSED] }}
      transition={{
        duration: 0.85,
        ease: EASE,
        times: [0, 0.55, 1],
      }}
      className="fixed inset-0 z-50 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 80% 10%, #0e1326 0%, #060814 45%, #020308 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 85%, rgba(120, 90, 200, 0.15) 0%, transparent 35%), radial-gradient(circle at 90% 30%, rgba(80, 130, 200, 0.12) 0%, transparent 40%)',
        }}
      />

      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r * 0.12}
            fill="#ffffff"
            opacity={s.o}
          >
            <animate
              attributeName="opacity"
              values={`${s.o};${s.o * 0.25};${s.o}`}
              dur={`${s.tw}s`}
              begin={`${s.d}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </motion.svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        animate={{ opacity: 0.18, scale: 1, rotate: 0 }}
        transition={{ duration: 1.6, delay: 0.6, ease: EASE }}
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#3a3f55]"
      >
        <div className="absolute inset-6 rounded-full border border-[#2c3147]" />
        <div className="absolute inset-16 rounded-full border border-[#22273a]" />
      </motion.div>

      <div ref={scrollRef} className="relative h-full overflow-y-auto">
        <PortalHeader theme="cosmic" onClose={onClose} />

        <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-10 md:pt-24">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
            className="mb-8 font-serif text-[clamp(36px,6vw,64px)] leading-[1.02] tracking-tight text-white"
          >
            A self-portrait, <br />
            <span className="italic text-[#cfd6f0]">in coordinates.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
            className="max-w-xl text-[16px] leading-[1.75] text-[#a8aec5]"
          >
            Most points on a star map are dim — a few burn brighter than they
            should. This is mine. The longer answer to who I am, what fuels
            the work, and the small details that don&apos;t belong on a CV.
          </motion.p>
        </div>

        <Section number="01" title="Origin">
          <p>
            I grew up in Porto Alegre, on the southern edge of Brazil — a
            city where the sky is wide and the winters smell like rain on
            cold pavement. Computers were the first thing that felt like
            mine: a quiet kind of toy that didn&apos;t need anyone else to
            be played with.
          </p>
          <p>
            That&apos;s the version that fits in a paragraph. The longer
            one is messier — full of detours through math problems, late
            nights tinkering with code that didn&apos;t need to exist, and
            a slow obsession with how machines see the world.
          </p>
        </Section>

        <Section number="02" title="How I work">
          <p>
            I&apos;m a Computer Science researcher, currently somewhere
            between a Master&apos;s thesis and a list of side projects. My
            focus is computer vision and applied machine learning, but the
            part I care about most isn&apos;t the model — it&apos;s the
            moment a system starts being useful to someone who isn&apos;t
            me.
          </p>
          <p>
            I&apos;m drawn to problems where the math is doing real work,
            and where the answer matters past the paper. I read more than I
            publish. I prototype more than I ship. I&apos;m trying to fix
            the second part.
          </p>
        </Section>

        <Section number="03" title="Coordinates">
          <div className="flex flex-col">
            {coordinates.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                className="group flex flex-col gap-1 border-t border-[#1c2138] py-4 last:border-b last:border-[#1c2138] md:grid md:grid-cols-[180px_1fr] md:gap-5"
              >
                <span className="flex items-center gap-2 pt-0.5 font-mono text-[12px] uppercase tracking-[0.15em] text-[#7a809a] md:text-[13px] md:tracking-[0.2em]">
                  <span className="h-1 w-1 rounded-full bg-[#4a5070] transition-colors group-hover:bg-[#cfd6f0]" />
                  {item.label}
                </span>
                <span className="text-[15px] text-[#ededed]">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section number="04" title="What I believe">
          <ul className="flex flex-col gap-3 text-[#cfd6f0]">
            {[
              'The best research finds its way out of PDFs.',
              'Good code reads like prose.',
              'Taste matters more than tools.',
              'Shipping is a moral act.',
              'Wonder is a renewable resource.',
            ].map((line, i) => (
              <motion.li
                key={line}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="flex items-start gap-3 font-serif text-[18px] leading-[1.6] md:text-[20px]"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#cfd6f0]" />
                <span>{line}</span>
              </motion.li>
            ))}
          </ul>
        </Section>

        <div className="mx-auto w-full max-w-3xl px-6 py-12">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="border-l border-[#2c3147] pl-6 font-serif text-[18px] italic leading-[1.6] text-[#cfd6f0] md:text-[21px]"
          >
            &quot;Look again at that dot. That&apos;s here. That&apos;s home.
            That&apos;s us. On it everyone you love, everyone you know,
            everyone you ever heard of, every human being who ever was, lived
            out their lives.&quot;
            <span className="mt-3 block font-sans text-[11px] not-italic tracking-[0.2em] uppercase text-[#7a809a]">
              — Carl Sagan, Pale Blue Dot
            </span>
          </motion.blockquote>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 border-t border-[#1c2138] bg-[#040611]/40"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#4a5070]">
                Signed
              </span>
              <span className="font-serif text-[24px] italic text-white md:text-[28px]">
                João Pedro
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#7a809a]">
                Transmitting from 30°S · Porto Alegre · {new Date().getFullYear()}
              </span>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#4a5070]">
                There&apos;s another page tucked in the corner
              </span>
              <span className="max-w-[260px] font-mono text-[11px] tracking-[0.15em] uppercase text-[#7a809a] md:text-right">
                pull the fold to keep going.
              </span>
            </div>
          </div>
        </motion.footer>

        <div className="h-[140px]" aria-hidden />
      </div>
    </motion.div>
  )
}

function AnimePortal({
  onClose,
  onBack,
  onNearBottomChange,
}: {
  onClose: () => void
  onBack: () => void
  onNearBottomChange: (near: boolean) => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const handler = () => {
      const remaining = el.scrollHeight - el.scrollTop - el.clientHeight
      onNearBottomChange(remaining < 400)
    }
    handler()
    el.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      el.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
      onNearBottomChange(false)
    }
  }, [onNearBottomChange])

  return (
    <motion.div
      key="anime-portal-inner"
      initial={{ clipPath: CLOSED }}
      animate={{ clipPath: [CLOSED, HALF, OPEN] }}
      exit={{ clipPath: [OPEN, HALF, CLOSED] }}
      transition={{
        duration: 0.85,
        ease: EASE,
        times: [0, 0.55, 1],
      }}
      className="fixed inset-0 z-[60] overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 18% 0%, #1a0c0c 0%, #0c0606 50%, #050202 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="pointer-events-none absolute -right-24 top-[6%] h-[460px] w-[460px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, #c84a4a 0%, #8a2828 35%, transparent 72%)',
          filter: 'blur(36px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 80%, rgba(150, 50, 50, 0.10) 0%, transparent 38%), radial-gradient(circle at 10% 30%, rgba(220, 130, 90, 0.06) 0%, transparent 35%)',
        }}
      />

      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-serif text-[clamp(80px,22vw,260px)] font-light leading-none text-[#3a1818]/40 sm:right-6">
        ア
      </div>

      <div ref={scrollRef} className="relative h-full overflow-y-auto">
        <PortalHeader theme="crimson" onClose={onClose} onBack={onBack} />

        <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-10 md:pt-24">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
            className="mb-8 font-serif text-[clamp(36px,6vw,64px)] leading-[1.02] tracking-tight text-white"
          >
            ED themes <br />
            <span className="italic text-[#e8c4c0]">on loop.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
            className="max-w-xl text-[16px] leading-[1.75] text-[#d8c4be]"
          >
            Anime is the medium I keep coming back to. Not because of escapism
            — because the best stories I&apos;ve read were drawn frame by
            frame. This is a small map of mine.
          </motion.p>
        </div>

        <Section number="01" title="Why anime" theme="crimson">
          <p>
            Live-action grew up on its own clichés. Anime gets to invent
            rules, rewrite them, and still make you cry over a sandwich.
            There&apos;s an unguarded earnestness baked into the medium I
            haven&apos;t found anywhere else.
          </p>
          <p>
            I started with the Saturday-morning stuff. I stayed for the slow
            shows that mistake themselves for action, and the action shows
            that mistake themselves for poetry.
          </p>
        </Section>

        <Section number="02" title="Currently watching" theme="crimson">
          <div className="flex flex-col">
            {animeNow.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                className="group flex flex-col gap-1 border-t border-[#2a1818]/70 py-4 last:border-b last:border-[#2a1818]/70"
              >
                <div className="flex items-baseline gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c84a4a] transition-transform group-hover:scale-125" />
                  <span className="font-serif text-[20px] text-white md:text-[22px]">
                    {it.title}
                  </span>
                </div>
                <span className="ml-[14px] text-[14px] leading-[1.6] text-[#a89090]">
                  {it.note}
                </span>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section number="03" title="On the shelf" theme="crimson">
          <p className="text-[14px] leading-[1.7] text-[#b89090]">
            The ones I keep recommending. Not a ranking — more like a list of
            shows that earned a permanent spot on the shelf.
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {animeShelf.map((title, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                className="group flex items-center gap-3 border-l border-[#2a1818] py-1.5 pl-4 transition-colors hover:border-[#c84a4a]"
              >
                <span className="font-mono text-[11px] text-[#6a3838]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-[17px] text-[#ededed] transition-colors group-hover:text-white">
                  {title}
                </span>
              </motion.li>
            ))}
          </ul>
        </Section>

        <Section number="04" title="A line I keep" theme="crimson">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="border-l border-[#4a2424] pl-6 font-serif text-[20px] italic leading-[1.5] text-[#e8c4c0] md:text-[24px]"
          >
            &quot;Whatever happens, happens.&quot;
            <span className="mt-3 block font-sans text-[11px] not-italic tracking-[0.2em] uppercase text-[#a89090]">
              — Spike Spiegel, Cowboy Bebop
            </span>
          </motion.blockquote>
        </Section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 border-t border-[#2a1818] bg-[#070303]/60"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#6a3838]">
                Pages don&apos;t end
              </span>
              <span className="font-serif text-[24px] italic text-white md:text-[28px]">
                they just turn.
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#a89090]">
                Watching from 30°S · Porto Alegre · {new Date().getFullYear()}
              </span>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#6a3838]">
                Another page is buried in the corner
              </span>
              <span className="max-w-[260px] font-mono text-[11px] tracking-[0.15em] uppercase text-[#a89090] md:text-right">
                pull the fold to dig further.
              </span>
            </div>
          </div>
        </motion.footer>

        <div className="h-[140px]" aria-hidden />
      </div>
    </motion.div>
  )
}

function HistoryPortal({
  onClose,
  onBack,
}: {
  onClose: () => void
  onBack: () => void
}) {
  return (
    <motion.div
      key="history-portal-inner"
      initial={{ clipPath: CLOSED }}
      animate={{ clipPath: [CLOSED, HALF, OPEN] }}
      exit={{ clipPath: [OPEN, HALF, CLOSED] }}
      transition={{
        duration: 0.85,
        ease: EASE,
        times: [0, 0.55, 1],
      }}
      className="fixed inset-0 z-[70] overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 30% 20%, #2a1f12 0%, #1a1308 45%, #0a0703 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="pointer-events-none absolute -left-32 top-[10%] h-[480px] w-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, #c8923c 0%, #6a4a1a 35%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(180deg, transparent 0px, transparent 28px, rgba(150, 110, 60, 0.05) 28px, rgba(150, 110, 60, 0.05) 29px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 88% 88%, rgba(200, 140, 60, 0.08) 0%, transparent 40%), radial-gradient(circle at 10% 80%, rgba(120, 80, 40, 0.06) 0%, transparent 38%)',
        }}
      />

      <div className="pointer-events-none absolute left-4 bottom-[8%] select-none font-serif text-[clamp(90px,24vw,300px)] font-light leading-none text-[#5a3e1c]/30 sm:left-8">
        Ψ
      </div>

      <div className="relative h-full overflow-y-auto">
        <PortalHeader theme="parchment" onClose={onClose} onBack={onBack} />

        <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-10 md:pt-24">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
            className="mb-8 font-serif text-[clamp(36px,6vw,64px)] leading-[1.02] tracking-tight text-[#f0e2c4]"
          >
            Field notes, <br />
            <span className="italic text-[#e8c98a]">from the dig.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
            className="max-w-xl text-[16px] leading-[1.75] text-[#c8b690]"
          >
            Every life is a layered site. Some strata are obvious — the
            framed dates and titles. Others you have to scrape at carefully.
            This is what I keep finding when I dig through mine.
          </motion.p>
        </div>

        <Section number="01" title="Strata" theme="parchment">
          <p className="text-[14px] leading-[1.7] text-[#a89070]">
            Layer by layer, in roughly the order they got buried.
          </p>
          <div className="mt-2 flex flex-col">
            {strata.map((s, i) => (
              <motion.div
                key={s.era + s.layer}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="group flex flex-col gap-2 border-t border-[#3a2c18]/70 py-5 last:border-b last:border-[#3a2c18]/70 md:grid md:grid-cols-[120px_1fr] md:gap-5"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c8923c] md:pt-1 md:text-[12px]">
                  {s.era}
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="flex items-center gap-2 font-serif text-[19px] text-[#f0e2c4] md:text-[21px]">
                    <span className="h-1 w-1 rounded-full bg-[#c8923c] transition-transform group-hover:scale-150" />
                    {s.layer}
                  </span>
                  <span className="text-[14px] leading-[1.6] text-[#a89070]">
                    {s.note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section number="02" title="Artifacts" theme="parchment">
          <p className="text-[14px] leading-[1.7] text-[#a89070]">
            Objects, ideas, small obsessions that shaped the soil.
          </p>
          <div className="mt-2 flex flex-col">
            {artifacts.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                className="group flex flex-col gap-1 border-t border-[#3a2c18]/70 py-4 last:border-b last:border-[#3a2c18]/70 md:grid md:grid-cols-[200px_1fr] md:gap-5"
              >
                <span className="flex items-center gap-2 pt-0.5 font-mono text-[12px] uppercase tracking-[0.15em] text-[#a89070] md:text-[13px] md:tracking-[0.2em]">
                  <span className="h-1 w-1 rounded-full bg-[#5a3e1c] transition-colors group-hover:bg-[#c8923c]" />
                  {a.label}
                </span>
                <span className="text-[15px] text-[#e8d8b8]">{a.value}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section number="03" title="Reading list" theme="parchment">
          <p className="text-[14px] leading-[1.7] text-[#a89070]">
            Currently on the shelf. Some half-read, some re-read, all keeping
            company.
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-2">
            {readingList.map((title, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                className="group flex items-center gap-3 border-l border-[#3a2c18] py-1.5 pl-4 transition-colors hover:border-[#c8923c]"
              >
                <span className="font-mono text-[11px] text-[#6a4a20]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-[17px] text-[#e8d8b8] transition-colors group-hover:text-[#f0e2c4]">
                  {title}
                </span>
              </motion.li>
            ))}
          </ul>
        </Section>

        <Section number="04" title="A line I carry" theme="parchment">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="border-l border-[#5a3e1c] pl-6 font-serif text-[20px] italic leading-[1.5] text-[#e8c98a] md:text-[24px]"
          >
            &quot;The past is a foreign country: they do things differently
            there.&quot;
            <span className="mt-3 block font-sans text-[11px] not-italic tracking-[0.2em] uppercase text-[#a89070]">
              — L. P. Hartley, The Go-Between
            </span>
          </motion.blockquote>
        </Section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 border-t border-[#3a2c18] bg-[#0a0703]/60"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#6a4a20]">
                Filed under
              </span>
              <span className="font-serif text-[24px] italic text-[#f0e2c4] md:text-[28px]">
                personal archaeology.
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#a89070]">
                Excavated at 30°S · Porto Alegre · {new Date().getFullYear()}
              </span>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <button
                type="button"
                onClick={onBack}
                className="group inline-flex items-center gap-3 rounded-full border border-[#3a2c18] bg-[#150e06] px-5 py-2.5 font-mono text-[12px] tracking-[0.2em] uppercase text-[#e8d8b8] transition-all hover:border-[#5a3e1c] hover:bg-[#1a1208]"
              >
                <motion.span
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-[#c8923c]"
                >
                  ←
                </motion.span>
                previous page
              </button>
              <button
                type="button"
                onClick={onClose}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#6a4a20] transition-colors hover:text-[#e8d8b8]"
              >
                close the book ↘
              </button>
            </div>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  )
}

type SectionTheme = 'cosmic' | 'crimson' | 'parchment'

const sectionThemes: Record<SectionTheme, {
  border: string
  numberMute: string
  accentLine: string
  label: string
  body: string
}> = {
  cosmic: {
    border: 'border-[#1c2138]/60',
    numberMute: 'text-[#4a5070]',
    accentLine: 'bg-[#2c3147]',
    label: 'text-[#7a809a]',
    body: 'text-[#a8aec5]',
  },
  crimson: {
    border: 'border-[#2a1818]/70',
    numberMute: 'text-[#6a3838]',
    accentLine: 'bg-[#4a2424]',
    label: 'text-[#b89090]',
    body: 'text-[#d8c4be]',
  },
  parchment: {
    border: 'border-[#3a2c18]/70',
    numberMute: 'text-[#6a4a20]',
    accentLine: 'bg-[#5a3e1c]',
    label: 'text-[#a89070]',
    body: 'text-[#c8b690]',
  },
}

function Section({
  number,
  title,
  delay = 0,
  theme = 'cosmic',
  children,
}: {
  number: string
  title: string
  delay?: number
  theme?: SectionTheme
  children: React.ReactNode
}) {
  const c = sectionThemes[theme]
  return (
    <section className={`border-t ${c.border}`}>
      <div className="mx-auto grid w-full max-w-3xl gap-8 px-6 py-14 md:grid-cols-[180px_1fr] md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay, ease: EASE }}
          className={`flex items-baseline gap-3 font-mono text-[11px] tracking-[0.25em] uppercase ${c.label} md:flex-col md:items-start md:gap-2`}
        >
          <span className={c.numberMute}>{number}</span>
          <span className={`hidden h-px w-8 ${c.accentLine} md:inline-block`} />
          <span>{title}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: delay + 0.05, ease: EASE }}
          className={`flex flex-col gap-5 text-[16px] leading-[1.8] ${c.body} md:text-[17px]`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
