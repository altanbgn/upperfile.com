import Link from 'next/link'
import Container from "@/components/Container"

export default function Home() {
  return (
    <main>
      <Container className='h-[calc(100vh-7rem)] flex-col justify-center items-center'>
        <p className='text-6xl text-center uppercase font-black mb-4'>
          Control and manage your data<br/>on a server you own
        </p>
        <p className='text-xl text-center text-neutral-400 mb-12'>
          Open source file server written in Go with intuitive and modern UI for easy management
        </p>
        <Link href='/docs/installation' className='bg-red-400 hover:bg-red-800 rounded-xl transition duration-300 px-8 py-4 mb-20'>
          Get started!
        </Link>
      </Container>
    </main>
  )
}
