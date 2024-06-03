import { PayloadAction, createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { QredUser } from '../../definitions'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const usersAdapter = createEntityAdapter<QredUser>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const initialState = usersAdapter.getInitialState({
  fetchStatus: '',
})

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
      state.fetchStatus = 'success'
      usersAdapter.setAll(state, action.payload)
    }).addCase(fetchUsers.pending, (state) => {
      state.fetchStatus = 'loading'
    }).addCase(fetchUsers.rejected, (state) => {
      state.fetchStatus = 'error'
    })
  }
})

export default usersSlice
