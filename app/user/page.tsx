import { signOut } from '@/auth'

const UserPage = () => {
  return (
    <div>
      <h1>User page</h1>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button>Sign Out</button>
      </form>
    </div>
  )
}

export default UserPage