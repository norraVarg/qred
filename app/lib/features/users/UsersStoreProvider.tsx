'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, UsersStore } from './usersStore'

export default function UsersProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<UsersStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}