import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['cyrillic-ext', 'latin'] })

export const metadata: Metadata = {
  title: 'Upperfile',
  description: 'Open source self-host REST API file server',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
