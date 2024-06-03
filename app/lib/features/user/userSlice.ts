import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { QredUser } from '../../definitions'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

type UserState = {
  user: QredUser | null
  fetchStatus: string
}

const initialState: UserState = {
  user: null,
  fetchStatus: '',
}

export const fetchUserById = createAsyncThunk('fetch-user-by-id', async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
})

export const updateUserById = createAsyncThunk('update-user-by-id', async (query: { id: string, user: QredUser }) => {
  const { id, user } = query

  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return response.json()
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<QredUser>) => {
      state.fetchStatus = 'success'
      state.user = action.payload
    }).addCase(fetchUserById.pending, (state) => {
      state.fetchStatus = 'loading'
    }).addCase(fetchUserById.rejected, (state) => {
      state.fetchStatus = 'error'
    }).addCase(updateUserById.fulfilled, (state, action: PayloadAction<QredUser>) => {
      state.fetchStatus = 'success'
      state.user = action.payload
    }).addCase(updateUserById.pending, (state) => {
      state.fetchStatus = 'loading'
    }).addCase(updateUserById.rejected, (state) => {
      state.fetchStatus = 'error'
    })
  }
})

export default userSlice
