import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { QredUser } from '../../definitions'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

type ProfileState = {
  profile: QredUser | null,
  fetchStatus: string
}

const initialState: ProfileState = {
  profile: null,
  fetchStatus: ''
}

export const fetchProfile = createAsyncThunk('fetch-profile', async (id: string) => {
  const response = await fetch(`${BASE_URL}/users/${id}`)
  return response.json()
})

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, action: PayloadAction<QredUser>) => {
      state.profile = action.payload
      state.fetchStatus = 'success'
    }).addCase(fetchProfile.pending, (state) => {
      state.fetchStatus = 'loading'
    }).addCase(fetchProfile.rejected, (state) => {
      state.fetchStatus = 'error'
    })
  }
})

export default profileSlice
