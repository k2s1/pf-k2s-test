import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'K2S — AI + Web3 Content Creator',
  description:
    'K2S — ai + web3 content creator. i make AI demos, videos, and threads, build modern web experiences, ship free AI tools, and help communities grow. worked with MiniMax, Alibaba Cloud, Seismic, and Zama.',
  generator: 'K2S',
  keywords: [
    'K2S',
    'k2sbhai',
    'AI content creator',
    'web3',
    'community manager',
    'AI tools',
    'AI demos',
    'MiniMax',
    'Alibaba Cloud',
    'Seismic',
    'Zama',
  ],
  icons: {
    icon: '/k2s.png',
    shortcut: '/k2s.png',
    apple: '/k2s.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ background: '#000' }}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
