'use client'

import { useSearchParams } from 'next/navigation'

const UserDetailsPage = () => {
  const params = useSearchParams()
  const id = params.get('id')

  return <div>User Details Page {params.get('id')}</div>
}

export default UserDetailsPage