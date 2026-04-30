import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CornerPortal from './components/CornerPortal'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'João Pedro de Moura',
  description:
    'Student at PUCRS. BSc in Data Science and AI, MSc in Computer Science with a focus on Computer Vision.',
  metadataBase: new URL('https://jp-moura.vercel.app'),
  openGraph: {
    title: 'João Pedro de Moura',
    description:
      'Student at PUCRS. BSc in Data Science and AI, MSc in Computer Science with a focus on Computer Vision.',
    url: 'https://jp-moura.vercel.app',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="page-gradient min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CornerPortal />
      </body>
    </html>
  )
}