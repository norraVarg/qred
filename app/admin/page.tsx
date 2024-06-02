import { getAuth } from '../lib/actions'

const AdminPage = async () => {
  const auth = await getAuth()

  if (auth && auth.user && auth.user.name) {
    return (
      <main className="flex justify-center px-5 py-3">
        <h1>Welcome back, {auth.user.name} &#128512;</h1>
      </main>
    )
  }

  return (
    <main>
      <h1>Something went wrong.</h1>
    </main>
  )
}

export default AdminPage