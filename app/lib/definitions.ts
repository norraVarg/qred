import { User } from 'next-auth'

export interface QredUser {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: { street: string, suite: string, city: string, zipcode: string, geo: { lat: string, lng: string } }
  company: { name: string, catchPhrase: string, bs: string }
}
