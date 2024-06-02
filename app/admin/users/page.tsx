'use client'

import { useRef } from 'react'
import { fetchUsers } from '../../lib/features/users/usersSlice'
import { useAppSelector, useAppStore } from '../../lib/features/users/usersHooks'
import UsersList from '../../ui/users-list'
import UsersProvider from '../../lib/features/users/UsersStoreProvider'

const UsersPage = () => {
  return (<UsersProvider><UsersListComponent /></UsersProvider>)
}

const UsersListComponent = () => {
  const store = useAppStore()
  const initialized = useRef(false)

  if (!initialized.current) {
    store.dispatch(fetchUsers())
    initialized.current = true
  }

  const users = useAppSelector(state => state.users)

  return <UsersList users={users} />
}

export default UsersPage