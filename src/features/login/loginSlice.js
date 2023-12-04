import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  email: '',
  password: '',
  user: {},
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

export const userLoggedIn = createAsyncThunk('login/userLoggedIn', async (userData) => {
  try {
    const response = await axios.post('http://127.0.0.1:4000/login', {
      user: userData,
    });
    return response.data.user;
  } catch (error) {
    throw error.response.data;
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userLoggedIn.pending, (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.error = null;
    })
      .addCase(userLoggedIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(userLoggedIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.payload?.status?.message || 'Email or password error.';
      });
  },
});

export default loginSlice.reducer;
