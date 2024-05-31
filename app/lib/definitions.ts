import { User } from 'next-auth'

export interface QredUser extends User {
  password: string
}