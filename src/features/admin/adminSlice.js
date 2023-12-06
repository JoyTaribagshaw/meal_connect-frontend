import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  meals: [],
  isLoading: false,
  isError: '',
};

export const addMeal = createAsyncThunk('meals/addMeal', async (mealData, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.post(
      'http://127.0.0.1:4000/api/v1/meals',
      mealData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getMeals = createAsyncThunk('meals/getMeals', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.get('http://127.0.0.1:4000/api/v1/meals', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMeals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMeals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = '';
        state.meals = action.payload;
      })
      .addCase(getMeals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(addMeal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = '';
        state.meals.push(action.payload);
      })
      .addCase(addMeal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default mealsSlice.reducer;
