'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, UserStore } from './userStore'

export default function UserProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<UserStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}