import { User } from 'next-auth'

export interface QredUser extends User {
  password: string
  address: { street: string, suite: string, city: string, zipcode: string, geo: { lat: string, lng: string } }
  company: { name: string, catchPhrase: string, bs: string }
  phone: string
  username: string
  website: string
}
