import { configureStore } from '@reduxjs/toolkit'
import profile from './profileSlice'

export const makeStore = () => {
  return configureStore({
    reducer: profile.reducer,
  })
}

export type ProfileStore = ReturnType<typeof makeStore>
export type ProfileState = ReturnType<ProfileStore['getState']>
export type ProfileDispatch = ProfileStore['dispatch']