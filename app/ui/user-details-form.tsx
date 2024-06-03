import { useState } from 'react'
import { QredUser } from '../lib/definitions'
import { updateUserById } from '../lib/features/user/userSlice'

interface Props {
  user: QredUser
}

const UserDetailsForm = (props: Props) => {
  const { user } = props

  const [isEditMode, setIsEditMode] = useState(false)

  const onClickEdit = () => {
    setIsEditMode(true)
  }

  const onClickCancle = () => {
    setIsEditMode(false)
  }

  const onClickSave = () => {
    setIsEditMode(false)
  }

  return (
    <main className='grid grid-rows-12 h-screen px-5 py-3'>
      <h1 className="row-start-1 row-end-2 text-lg font-semibold leading-6 text-gray-900">User details</h1>
      <form className='space-y-4 row-start-2 row-end-10 overflow-y-auto pr-3' >
        <div className='space-y-2'>
          <label className="capitalize block text-xs font-medium text-gray-900" htmlFor="street">
            street name
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
            id="street"
            name="street"
            placeholder="Enter street name"
            type="text"
            required
            disabled={!isEditMode}
          />
        </div>
        <div className='space-y-2'>
          <label className="capitalize block text-xs font-medium text-gray-900" htmlFor="postal">
            postal code
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
            id="postal"
            name="postal"
            placeholder="Enter postal code"
            type="text"
            required
            disabled={!isEditMode}
          />
        </div>
        <div className='space-y-2'>
          <label className="capitalize block text-xs font-medium text-gray-900" htmlFor="city">
            city
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
            id="city"
            name="city"
            placeholder="Enter city"
            type="text"
            required
            disabled={!isEditMode}
          />
        </div>
        <div className='space-y-2'>
          <label className="capitalize block text-xs font-medium text-gray-900" htmlFor="email">
            email
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
            id="email"
            name="email"
            placeholder="Enter email"
            type="email"
            required
            disabled={!isEditMode}
          />
        </div>
        <div className='space-y-2'>
          <label className="capitalize block text-xs font-medium text-gray-900" htmlFor="phone">
            phone
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            type="tel"
            required
            disabled={!isEditMode}
          />
        </div>
      </form>
      <div className='flex justify-center row-start-10 row-end-12'>
        {!isEditMode && (
          <button onClick={onClickEdit} className='w-20 bg-sky-500 hover:bg-sky-700 text-white text-xs font-bold py-1 px-3 rounded self-center capitalize'>edit</button>
        )}
        {isEditMode && (
          <div className='flex gap-5 '>
            <button onClick={onClickCancle} className='w-20 bg-gray-500 hover:bg-gray-700 text-white text-xs font-bold py-1 px-3 rounded self-center capitalize' >cancel</button>
            <button onClick={onClickSave} className='w-20 bg-sky-500 hover:bg-sky-700 text-white text-xs font-bold py-1 px-3 rounded self-center capitalize' >save</button>
          </div>
        )}
      </div>
    </main >
  )
}

export default UserDetailsForm