import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { FetchStatus, QredUser, UserForm } from '../../definitions'
import { isEmptyObject } from '../../utils/isEmptyObject'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

type UserState = {
  user: QredUser | null
  fetchStatus: FetchStatus | null
  message: string | null
}

const initialState: UserState = {
  user: null,
  fetchStatus: null,
  message: null,
}

export const fetchUserById = createAsyncThunk('fetch-user-by-id', async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
})

export const updateUserById = createAsyncThunk('update-user-by-id', async (query: { id: string, userForm: UserForm }) => {
  const { id, userForm } = query

  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(userForm),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return response.json()
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatusAndMessage: (state) => {
      state.fetchStatus = null
      state.message = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<QredUser>) => {
      if (isEmptyObject(action.payload)) {
        state.fetchStatus = FetchStatus.ERROR
        state.message = 'Failed to fetch user.'
      } else {
        state.user = action.payload
        state.fetchStatus = FetchStatus.SUCCESS
        state.message = 'Fetched user successfully.'
      }
    }).addCase(fetchUserById.pending, (state) => {
      state.fetchStatus = FetchStatus.LOADING
      state.message = 'Fetching user...'
    }).addCase(fetchUserById.rejected, (state) => {
      state.fetchStatus = FetchStatus.ERROR
      state.message = 'Failed to fetch user.'
    }).addCase(updateUserById.fulfilled, (state, action: PayloadAction<QredUser>) => {
      if (isEmptyObject(action.payload)) {
        state.fetchStatus = FetchStatus.ERROR
        state.message = 'Failed to save user details.'
      } else {
        state.fetchStatus = FetchStatus.SUCCESS
        state.message = 'Saved successfully.'
        state.user = action.payload
      }
    }).addCase(updateUserById.pending, (state) => {
      state.fetchStatus = FetchStatus.LOADING
      state.message = 'Saving user details...'
    }).addCase(updateUserById.rejected, (state) => {
      state.fetchStatus = FetchStatus.ERROR
      state.message = 'Failed to save user details.'
    })
  }
})

export default userSlice
export const { resetStatusAndMessage } = userSlice.actions