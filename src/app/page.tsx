import Link from 'next/link'
import Container from '@/components/Container'

export default function Home() {
  return (
    <main>
      <Container className='h-[calc(100vh-7rem)] flex-col justify-center items-center'>
        <p className='text-2xl lg:text-6xl text-center uppercase font-black mb-8'>
          Control and manage your data<br />on a server you own
        </p>
        <p className='text-base lg:text-xl text-center text-neutral-400 mb-12'>
          Open source file server written in Go with intuitive and modern UI for easy management
        </p>
        <Link
          href='/docs/installation'
          className='bg-red-400 hover:bg-red-800 rounded-xl transition duration-300 px-8 py-4 mb-20'
        >
          Get started!
        </Link>
        <div
          className='absolute -z-20 w-full h-screen top-0 left-0'
          style={{
            backgroundImage: 'radial-gradient(#333333 2px, transparent 0px)',
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0',
            backgroundRepeat: 'repeat',
          }}
        >
          <div className='absolute -z-10 w-full h-72 top-0 left-0 bg-gradient-to-b from-zinc-950 to-transparent' />
          <div className='absolute -z-10 w-full h-72 bottom-0 left-0 bg-gradient-to-t from-zinc-950 to-transparent' />
          <div className='absolute -z-10 h-full w-72 top-0 left-0 bg-gradient-to-r from-zinc-950 to-transparent' />
          <div className='absolute -z-10 h-full w-72 top-0 right-0 bg-gradient-to-l from-zinc-950 to-transparent' />
        </div>

      </Container>
      <Container>
        <p>Home</p>
      </Container>
    </main>
  )
}
