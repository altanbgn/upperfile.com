import type { Metadata } from 'next'
import { Martian_Mono } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/navbar'

const martianMono = Martian_Mono({ subsets: ['cyrillic-ext', 'latin'] })

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
      <body className={martianMono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
