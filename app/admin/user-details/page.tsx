'use client'

import { UserForm } from '@/app/lib/definitions'
import UserProvider from '@/app/lib/features/user/UserStoreProvider'
import { useUserSelector, useUserStore } from '@/app/lib/features/user/userHooks'
import { fetchUserById, resetStatusAndMessage, updateUserById } from '@/app/lib/features/user/userSlice'
import SomethingWentWrong from '@/app/ui/something-went-wrong'
import UserDetailsForm from '@/app/ui/user-details-form'
import { useSearchParams } from 'next/navigation'
import { useRef } from 'react'

const UserDetailsPage = () => {
  return (<UserProvider><UserDetailsComponent /></UserProvider>)
}

const UserDetailsComponent = () => {
  const store = useUserStore()
  const initialized = useRef(false)
  const params = useSearchParams()
  const id = params.get('id')

  const user = useUserSelector((state) => state.user)
  const fetchStatus = useUserSelector((state) => state.fetchStatus)
  const message = useUserSelector((state) => state.message)

  if (!id) {
    return (<SomethingWentWrong />)
  }

  if (!initialized.current) {
    store.dispatch(fetchUserById(id))
    initialized.current = true
  }

  const submitForm = (userForm: UserForm) => {
    if (id) {
      store.dispatch(updateUserById({ id, userForm }))
    }
  }

  const cancelEdit = () => {
    store.dispatch(resetStatusAndMessage())
  }

  if (user === null) {
    return (<SomethingWentWrong message={message} />)
  }

  return (
    <UserDetailsForm
      user={user}
      fetchStatus={fetchStatus}
      message={message}
      submitForm={submitForm}
      cancelEdit={cancelEdit}
    />
  )
}

export default UserDetailsPage