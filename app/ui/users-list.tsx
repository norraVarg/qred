import { QredUser } from '../lib/definitions'
import Link from 'next/link'

interface Props {
  ids: number[]
  entities: Record<number, QredUser>
}

const UsersList = (props: Props) => {
  const { ids, entities } = props

  return (<main className='grid grid-rows-12 h-screen px-5 py-3'>
    <h1 className="text-lg font-semibold leading-6 text-gray-900">Users</h1>
    <ul role="list" className="row-start-2 row-span-10 divide-y divide-gray-200 overflow-y-auto">
      {ids.map(id => (
        <Link href={`/admin/user-details?id=${id}`} key={id} className="flex justify-between gap-x-6 py-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold leading-6 text-gray-900">{entities[id].name}</p>
            <p className="truncate text-xs leading-5 text-gray-500">Company: {entities[id].company.name}</p>
            <p className="truncate text-xs leading-5 text-gray-500">Email: {entities[id].email}</p>
            <p className="truncate text-xs leading-5 text-gray-500">Phone: {entities[id].phone}</p>
          </div>
        </Link>
      ))}
    </ul>
  </main>)
}

export default UsersList