import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = []

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const { data } = await axios.get('/api/users')
    console.log(data)
    return data;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
}
)

export const allusers = (state) => {
    return state.users
}

export default usersSlice.reducer