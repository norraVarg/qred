import { configureStore } from '@reduxjs/toolkit'
import user from './userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: user.reducer,
  })
}

export type UserStore = ReturnType<typeof makeStore>
export type UserState = ReturnType<UserStore['getState']>
export type UserDispatch = UserStore['dispatch']