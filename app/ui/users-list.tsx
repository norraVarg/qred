import { QredUser } from '../lib/definitions'

interface Props {
  users: QredUser[]
}

const UsersList = (props: Props) => {
  const { users } = props

  return (<main className='grid grid-rows-12 h-screen px-5 py-3'>
    <h1 className="text-lg font-semibold leading-6 text-gray-900">Users</h1>
    <ul role="list" className="row-start-2 row-span-10 divide-y divide-gray-100 overflow-y-auto">
      {users.map(user => (
        <li key={user.id} className="flex justify-between gap-x-6 py-4">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-xs font-semibold leading-6 text-gray-900">{user.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">Company: {user.company.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">Email: {user.email}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">Phone: {user.phone}</p>
            </div>
          </div>

        </li>
      ))}
    </ul>
  </main>)
}

export default UsersList