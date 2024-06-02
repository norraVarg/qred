
import { getAuth } from '@/app/lib/actions'
import Account from '@/app/ui/account'

const AccountPage = async () => {
  const auth = await getAuth()

  if (auth && auth.user) {
    return <Account account={auth.user} />
  }

  return (
    <main>
      <h1>Something went wrong.</h1>
    </main>
  )
}

export default AccountPage