import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://meal-connet-backend.onrender.com';

const initialState = {
  meals: [],
  allMeals: [],
  isLoading: false,
  isError: '',
};

export const addMeal = createAsyncThunk('meals/addMeal', async (mealData, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.post(`${baseUrl}/api/v1/meals`,
      mealData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getMeals = createAsyncThunk('meals/getMeals', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.get(`${baseUrl}/api/v1/meals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const getAllMeals = createAsyncThunk('meals/getAllMeals', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.get(`${baseUrl}/meals_available`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const deleteMeal = createAsyncThunk('meals/deleteMeals', async (id, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.delete(`${baseUrl}/api/v1/meals/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateAvailability = createAsyncThunk(
  'meals/updateAvailabilityOfMeals',
  async ({ id, available }, thunkAPI) => {
    try {
      const token = localStorage.getItem('access_token');

      const response = await axios.patch(
        `${baseUrl}/api/v1/meals/${id}/update_availability`,
        { available }, // Pass the available parameter in the request body
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
  },
);

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    removeMeal: (state, action) => {
      const deletedMealId = action.payload;
      state.allMeals = state.allMeals.filter((meal) => meal.id !== deletedMealId);
    },
    updateWhenAvailable: (state, action) => {
      const { id, available } = action.payload;
      state.allMeals = state.allMeals.map((meal) => {
        if (meal.id === id) {
          return {
            ...meal,
            available,
          };
        }
        return meal;
      });
    },
  },
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
      .addCase(getAllMeals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMeals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = '';
        state.allMeals = action.payload;
      })
      .addCase(getAllMeals.rejected, (state, action) => {
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
      })
      .addCase(deleteMeal.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = '';
      })
      .addCase(deleteMeal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(updateAvailability.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = '';
      })
      .addCase(updateAvailability.rejected, (state) => {
        state.isLoading = false;
        state.isError = '';
      });
  },
});
export const { removeMeal } = mealsSlice.actions;
export const { updateWhenAvailable } = mealsSlice.actions;

export default mealsSlice.reducer;
