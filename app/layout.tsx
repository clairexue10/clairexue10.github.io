import type { Metadata } from 'next'
import { Crimson_Pro, Inter } from 'next/font/google'
import './globals.css'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Claire Xue',
  description: 'CS student at Wellesley College — systems, programming languages, and data science.',
  openGraph: {
    title: 'Claire Xue',
    description: 'CS student at Wellesley College — systems, programming languages, and data science.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
