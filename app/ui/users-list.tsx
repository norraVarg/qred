import { QredUser } from '../lib/definitions'
import Link from 'next/link'

interface Props {
  users: QredUser[]
}

const UsersList = (props: Props) => {
  const { users } = props

  return (<main className='grid grid-rows-12 h-screen px-5 py-3'>
    <h1 className="text-lg font-semibold leading-6 text-gray-900">Users</h1>
    <ul role="list" className="row-start-2 row-span-10 divide-y divide-gray-200 overflow-y-auto">
      {users.map(user => (
        <Link href={`/admin/user-details?id=${user.id}`} key={user.id} className="flex justify-between gap-x-6 py-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold leading-6 text-gray-900">{user.name}</p>
            <p className="truncate text-xs leading-5 text-gray-500">Company: {user.company.name}</p>
            <p className="truncate text-xs leading-5 text-gray-500">Email: {user.email}</p>
            <p className="truncate text-xs leading-5 text-gray-500">Phone: {user.phone}</p>
          </div>
        </Link>
      ))}
    </ul>
  </main>)
}

export default UsersList