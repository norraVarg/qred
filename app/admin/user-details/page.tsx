'use client'

import UserProvider from '@/app/lib/features/user/UserStoreProvider'
import { useUserSelector, useUserStore } from '@/app/lib/features/user/userHooks'
import { fetchUserById } from '@/app/lib/features/user/userSlice'
import FetchingData from '@/app/ui/fetching-data'
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

  if (!id) {
    console.log('No id')
    return (<SomethingWentWrong />)
  }

  if (!initialized.current) {
    store.dispatch(fetchUserById(id))
    initialized.current = true
  }

  const user = useUserSelector((state) => state.user)
  const fetchStatus = useUserSelector((state) => state.fetchStatus)

  if (fetchStatus === 'loading') {
    return (<FetchingData />)
  }

  if (fetchStatus === 'error') {
    return (<SomethingWentWrong />)
  }

  if (!user) {
    return (<SomethingWentWrong />)
  }

  return (
    <UserDetailsForm user={user} />
  )
}

export default UserDetailsPage