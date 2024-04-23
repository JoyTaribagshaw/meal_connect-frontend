import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://meal-connet-backend.onrender.com/';

const initialState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  error: null,
  isLoading: false,
  isRegistered: false,
};

export const userSignup = createAsyncThunk('signup/userSignup', async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, {
      user: userData,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const registrationSlice = createSlice({
  name: 'signup',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userSignup.pending, (state) => {
      state.isLoading = true;
      state.isRegistered = false;
      state.error = null;
    })
      .addCase(userSignup.fulfilled, (state) => {
        state.isLoading = false;
        state.isRegistered = true;
        state.name = '';
        state.email = '';
        state.password = '';
        state.password_confirmation = '';
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.isRegistered = false;
        state.error = action.payload?.status?.message || 'An error occurred during signup.';
      });
  },
});

export default registrationSlice.reducer;
