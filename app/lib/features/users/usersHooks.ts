import { useDispatch, useSelector, useStore } from 'react-redux'
import type { UsersDispatch, UsersStore, UsersState } from './usersStore'

export const useAppDispatch = useDispatch.withTypes<UsersDispatch>()
export const useAppSelector = useSelector.withTypes<UsersState>()
export const useAppStore = useStore.withTypes<UsersStore>()