import { useDispatch, useSelector, useStore } from 'react-redux'
import type { UserDispatch, UserStore, UserState } from './userStore'

export const useUserDispatch = useDispatch.withTypes<UserDispatch>()
export const useUserSelector = useSelector.withTypes<UserState>()
export const useUserStore = useStore.withTypes<UserStore>()