import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://meal-connect-backend.onrender.com';
const TOKEN_KEY = 'access_token';
const USER_KEY = 'user_data';

const setAuthDataInStorage = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const initialState = {
  token: localStorage.getItem(TOKEN_KEY) || null,
  user: JSON.parse(localStorage.getItem(USER_KEY)) || null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

export const userLoggedIn = createAsyncThunk('login/userLoggedIn', async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      user: userData,
    });

    const authorizationHeader = response.headers.authorization || response.headers.Authorization;

    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1];
      const user = response.data;
      setAuthDataInStorage(token, user);

      return { user, token };
    }
    return undefined;
  } catch (error) {
    throw error.response.data;
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLoggedOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoggedIn.pending, (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.error = null;
    })
      .addCase(userLoggedIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(userLoggedIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.payload?.status?.message || 'Email or password error.';
      });
  },
});

export const { userLoggedOut } = loginSlice.actions;
export default loginSlice.reducer;
