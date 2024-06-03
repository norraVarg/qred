import LoginForm from './ui/login-form'

const Home = () => {
  return (
    <main className="flex flex-col bg-sky-500 flex min-h-screen flex-col items-center justify-between py-8 px-4">
      <div className='flex grow items-center'>
        <h1 className='text-white font-bold text-lg'>Welcome to Qred App</h1>
      </div>
      <div className='flex grow items-center'>
        <LoginForm />
      </div>
    </main>
  )
}

export default Home