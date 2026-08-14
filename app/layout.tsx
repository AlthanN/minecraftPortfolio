import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Press_Start_2P, Inter } from 'next/font/google'
import './globals.css'

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Althan Nguyen — Portfolio',
  description:
    'A block-by-block personal portfolio: About, Experience, Projects and Contact, dug straight out of a Minecraft world.',
  icons: {
    icon: 
      {
        url: '/webLogo.png',
      },
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#7ec0ee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pressStart.variable} ${inter.variable} bg-sky-top`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
