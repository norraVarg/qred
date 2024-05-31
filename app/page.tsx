import exp from 'constants'
import Link from 'next/link'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-2 backdrop-blur-2xl light:border-neutral-800 light:bg-zinc-800/30 light:from-inherit ">
        <Link href="/login" >Login</Link>
      </div>

      <div >
        Welcome to Qred App
      </div>
    </main>
  )
}

export default Home