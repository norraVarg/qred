'use client'

import { useRef } from 'react'
import { fetchUsers } from '../../lib/features/users/usersSlice'
import UsersList from '../../ui/users-list'
import UsersProvider from '../../lib/features/users/UsersStoreProvider'
import { useUsersSelector, useUsersStore } from '@/app/lib/features/users/usersHooks'

const UsersPage = () => {
  return (<UsersProvider><UsersListComponent /></UsersProvider>)
}

const UsersListComponent = () => {
  const store = useUsersStore()
  const initialized = useRef(false)

  if (!initialized.current) {
    store.dispatch(fetchUsers())
    initialized.current = true
  }

  const users = useUsersSelector(state => state.users)

  return <UsersList users={users} />
}

export default UsersPage