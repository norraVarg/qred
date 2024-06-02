import { QredUser } from '../lib/definitions'

interface Props {
  profile: QredUser | null
}

const Profile = (props: Props) => {
  const { profile } = props

  if (!profile) return (<main className='grid grid-rows-12 h-screen px-5 py-3'>
    <h1 className="text-lg font-semibold leading-6 text-gray-900">Profile</h1>
    <div className="row-start-2 row-span-10 divide-y divide-gray-200 overflow-y-auto">
      <div className="flex justify-between gap-x-6 py-4">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-xs font-semibold leading-6 text-gray-900">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  </main>)

  return (<main className='grid grid-rows-12 h-screen px-5 py-3'>
    <h1 className="text-lg font-semibold leading-6 text-gray-900">Profile</h1>
    <div className="row-start-2 row-span-10 divide-y divide-gray-200 overflow-y-auto">
      <div key={profile.id} className="flex justify-between gap-x-6 py-4">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-xs font-semibold leading-6 text-gray-900">{profile.name}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Company: {profile.company.name}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Email: {profile.email}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Phone: {profile.phone}</p>
          </div>
        </div>
      </div>
    </div>
  </main>)
}

export default Profile