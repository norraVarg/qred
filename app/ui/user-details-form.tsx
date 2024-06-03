import { useEffect, useState } from 'react'
import { FetchStatus, FormErrors, QredUser, UserForm } from '../lib/definitions'
import { useInterval } from '../lib/hooks/useInterval'
import { validateEmail } from '../lib/validators/emailValidator'
import { validatePhone } from '../lib/validators/phoneValidator'

const initialFormErrors: FormErrors = {
  email: null,
  phone: null,
}

interface Props {
  user: QredUser
  submitForm: (userForm: UserForm) => void
  cancelEdit: () => void
  fetchStatus: string | null
  message: string | null
}

const UserDetailsForm = (props: Props) => {
  const { user, submitForm, fetchStatus, message, cancelEdit } = props
  const [showMessage, setShowMessage] = useState(true)
  const [showFormErrors, setShowFormErrors] = useState(false)
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors)

  const initialFormValues: UserForm = {
    address: {
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
    email: user.email,
    phone: user.phone,
  }

  const [userForm, setUserForm] = useState<UserForm>(initialFormValues)
  const [isEditMode, setIsEditMode] = useState(false)

  const hasFormErrors = checkFormErrors(formErrors)

  useInterval(() => {
    setShowMessage(false)
  }, 1000)

  useEffect(() => {
    if (fetchStatus === FetchStatus.SUCCESS || fetchStatus === FetchStatus.ERROR) {
      setShowMessage(true)
    }

    if (fetchStatus === FetchStatus.SUCCESS) {
      setIsEditMode(false)
    }
  }, [fetchStatus])

  const onClickEdit = () => {
    setIsEditMode(true)
  }

  const onClickCancle = () => {
    setIsEditMode(false)
    setUserForm(initialFormValues)
    setFormErrors(initialFormErrors)
    setShowFormErrors(false)
    cancelEdit()
  }

  const onClickSave = () => {
    if (hasFormErrors) {
      setShowFormErrors(true)
      return
    }

    setIsEditMode(false)
    setFormErrors(initialFormErrors)
    setShowFormErrors(false)
    submitForm(userForm)
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
            className="disabled:bg-slate-50 disabled:text-slate-500 peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
            id="street"
            name="street"
            placeholder="Enter street name"
            type="text"
            disabled={!isEditMode}
            value={userForm.address.street}
            onChange={(e) => setUserForm({ ...userForm, address: { ...userForm.address, street: e.target.value } })}
          />
        </div>
        <div className='space-y-2'>
          <label className="capitalize block text-xs font-medium text-gray-900" htmlFor="postal">
            postal code
          </label>
          <input
            className="disabled:bg-slate-50 disabled:text-slate-500 peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
            id="postal"
            name="postal"
            placeholder="Enter postal code"
            type="text"
            disabled={!isEditMode}
            value={userForm.address.zipcode}
            onChange={(e) => setUserForm({ ...userForm, address: { ...userForm.address, zipcode: e.target.value } })}
          />
        </div>
        <div className='space-y-2'>
          <label className="capitalize block text-xs font-medium text-gray-900" htmlFor="city">
            city
          </label>
          <input
            className="disabled:bg-slate-50 disabled:text-slate-500 peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
            id="city"
            name="city"
            placeholder="Enter city"
            type="text"
            disabled={!isEditMode}
            value={userForm.address.city}
            onChange={(e) => setUserForm({ ...userForm, address: { ...userForm.address, city: e.target.value } })}
          />
        </div>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <label className="capitalize block text-xs font-medium text-gray-900" htmlFor="email">
              email
            </label>
            {showFormErrors && !!formErrors.email && (<p className='text-xs text-red-600'>{formErrors.email}</p>)}
          </div>
          <input
            className={`${!!formErrors.email && showFormErrors && 'outline-red-600 border-red-600'} disabled:bg-slate-50 disabled:text-slate-500 peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs`}
            id="email"
            name="email"
            placeholder="Enter email"
            type="email"
            disabled={!isEditMode}
            value={userForm.email}
            onChange={(e) => {
              setUserForm({ ...userForm, email: e.target.value })
              setFormErrors({ ...formErrors, email: validateEmail(e.target.value) })
            }}
          />
        </div>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <label className="capitalize block text-xs font-medium text-gray-900" htmlFor="phone">
              phone
            </label>
            {showFormErrors && !!formErrors.phone && (<p className='text-xs text-red-600'>{formErrors.phone}</p>)}
          </div>
          <input
            className={`${!!formErrors.phone && showFormErrors && 'outline-red-600 border-red-600'} disabled:bg-slate-50 disabled:text-slate-500 peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs`}
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            type="tel"
            disabled={!isEditMode}
            value={userForm.phone}
            onChange={(e) => {
              setUserForm({ ...userForm, phone: e.target.value })
              setFormErrors({ ...formErrors, phone: validatePhone(e.target.value) })
            }}
          />
        </div>
      </form>
      <div className='flex flex-col gap-2 justify-center row-start-10 row-end-12'>
        <div className='h-4'>
          {showMessage && (
            <p className={`${fetchStatus === FetchStatus.ERROR ? 'text-red-600' : 'text-green-600'}  text-xs text-center`} >{message}</p>
          )}
        </div>

        {!isEditMode && (
          <button onClick={onClickEdit} className='w-20 bg-sky-500 hover:bg-sky-700 text-white text-xs font-bold py-1 px-3 rounded self-center capitalize'>edit</button>
        )}
        {isEditMode && (
          <div className='flex gap-5 justify-center'>
            <button onClick={onClickCancle} className='w-20 bg-gray-400 hover:bg-gray-700 text-white text-xs font-bold py-1 px-3 rounded self-center capitalize' >cancel</button>
            <button disabled={hasFormErrors && showFormErrors} onClick={onClickSave} className='disabled:bg-gray-300 w-20 bg-sky-500 hover:bg-sky-700 text-white text-xs font-bold py-1 px-3 rounded self-center capitalize' >save</button>
          </div>
        )}
      </div>
    </main >
  )
}

export default UserDetailsForm

const checkFormErrors = (formErrors: FormErrors) => {
  return Object.values(formErrors).some((value) => value !== null)
}