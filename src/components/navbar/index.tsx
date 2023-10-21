import Link from 'next/link'
import { Bungee_Shade } from 'next/font/google'

const BungeeShade = Bungee_Shade({ subsets: ['latin'], weight: '400' })

export default function Navbar() {
  return (
    <nav className='container flex justify-between items-center px-18 py-6 mx-auto '>
      <Link href="/" className={`text-3xl text-red-400 font-bold ${BungeeShade.className}`}>
        Upperfile
      </Link>

      <div className="flex justify-end items-center gap-20">
        <Link href="docs">
          Docs
        </Link>
        <Link href="docs">
          About Us
        </Link>
      </div>
    </nav>
  )
}
