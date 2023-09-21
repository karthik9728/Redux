import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// const initialState = [
//   { id: '1', name: 'Dude Lebowski' },
//   { id: '2', name: 'Neil Young' },
//   { id: '3', name: 'Dave Gray' },
// ];

const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {});
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {});
  },
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
