'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { ProfileStore, makeStore } from './profileStore'

export default function UsersProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<ProfileStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}