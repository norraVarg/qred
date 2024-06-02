import { User } from 'next-auth'

interface Props {
  account: User
}

const Account = (props: Props) => {
  const { account } = props

  return (<main className='grid grid-rows-12 h-screen px-5 py-3'>
    <h1 className="text-lg font-semibold leading-6 text-gray-900">Account</h1>
    <div className="space-y-4">
      <div className='space-y-2'>
        <label className="block text-xs font-medium text-gray-900" htmlFor="name">Name</label>
        <input
          className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
          id="name"
          type="text"
          name="name"
          value={account.name || ''}
          disabled
        />
      </div>
      <div className='space-y-2'>
        <label className="block text-xs font-medium text-gray-900" htmlFor="email">Email</label>
        <input
          className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
          id="email"
          type="email"
          name="email"
          value={account.email || ''}
          disabled
        />
      </div>
    </div>
  </main>)
}

export default Account