import { useDispatch, useSelector, useStore } from 'react-redux'
import type { ProfileDispatch, ProfileStore, ProfileState } from './profileStore'

export const useProfileDispatch = useDispatch.withTypes<ProfileDispatch>()
export const useProfileSelector = useSelector.withTypes<ProfileState>()
export const useProfileStore = useStore.withTypes<ProfileStore>()