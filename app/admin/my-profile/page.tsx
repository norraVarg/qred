'use client'

import { useUsersStore } from '@/app/lib/features/users/usersHooks'
import { useRef } from 'react'
import ProfileProvider from '@/app/lib/features/profile/ProfileStoreProvider'
import { fetchProfile } from '@/app/lib/features/profile/profileSlice'
import { useProfileSelector } from '@/app/lib/features/profile/profileHooks'
import Profile from '@/app/ui/profile'
import { SessionProvider, useSession } from 'next-auth/react'

const ProfilePage = (props: any) => {
  // const session = useSession()
  console.log('props', props)
  return <div>page</div>
  // return (
  //   <ProfileProvider>
  //     {/* <SessionProvider> */}
  //     <ProfileComponent />
  //     {/* </SessionProvider> */}
  //   </ProfileProvider>
  // )
}

const ProfileComponent = () => {
  const store = useUsersStore()
  const initialized = useRef(false)
  const profile = useProfileSelector(state => state.profile)

  if (!initialized.current) {
    store.dispatch(fetchProfile('1'))
    initialized.current = true
  }

  return <Profile profile={profile} />
}

export default ProfilePage