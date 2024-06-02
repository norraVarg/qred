import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { QredUser } from '../../definitions'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

type UserState = {
  users: QredUser[],
  fetchStatus: string
}

const initialState: UserState = {
  users: [],
  fetchStatus: ''
}

export const fetchUsers = createAsyncThunk('fetch-users', async () => {
  const response = await fetch(API_URL)
  return response.json()
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<QredUser[]>) => {
      state.users = action.payload
      state.fetchStatus = 'success'
    }).addCase(fetchUsers.pending, (state) => {
      state.fetchStatus = 'loading'
    }).addCase(fetchUsers.rejected, (state) => {
      state.fetchStatus = 'error'
    })
  }
})

export default usersSlice
