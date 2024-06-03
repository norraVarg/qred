export type QredUser = {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: { street: string, suite: string, city: string, zipcode: string, geo: { lat: string, lng: string } }
  company: { name: string, catchPhrase: string, bs: string }
}

export type UserForm = {
  address: { street: string, city: string, zipcode: string }
  email: string
  phone: string
}

export type FormErrors = {
  email: string | null
  phone: string | null
}

export enum FetchStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}