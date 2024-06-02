import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { QredUser } from '../definitions'

type UserState = {
  user: QredUser | null,
  fetchStatus: string
}

const initialState: UserState = {
  user: null,
  fetchStatus: ''
}

export const fetchUser = createAsyncThunk('fetch-user', async (apiUrl: URL) => {
  const response = await fetch(apiUrl)
  return response.json()
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<QredUser>) => {
      state.user = action.payload
      state.fetchStatus = 'success'
    }).addCase(fetchUser.pending, (state) => {
      state.fetchStatus = 'loading'
    }).addCase(fetchUser.rejected, (state) => {
      state.fetchStatus = 'error'
    })
  }
})

export default userSlice
