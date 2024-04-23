import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://meal-connect-backend.onrender.com';

const initialState = {
  reservation: [],
  allReserve: [],
  isLoading: false,
  isError: null,
  isReserved: false,
};
export const allReservation = createAsyncThunk('reservation/allReservation', async (id, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.get(`${baseUrl}/api/v1/reservations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const deleteReservation = createAsyncThunk('reservation/deleteReservation', async (id, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.delete(`${baseUrl}/api/v1/reservations/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addReservation = createAsyncThunk('reservation/addReservation', async ({ reservationData, id }, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.post(`${baseUrl}/api/v1/meals/${id}/reservations`,
      reservationData,
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

export const getReservation = createAsyncThunk('reservation/getReservation', async (id, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.get(`${baseUrl}/api/v1/meals/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    removeReservation: (state, action) => {
      const reservationId = action.payload;
      state.allReserve = state.allReserve.filter(
        (reservation) => reservation.reservation.id !== reservationId,
      );
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(addReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservation = action.payload;
      })
      .addCase(getReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(allReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allReserve = action.payload;
      })
      .addCase(allReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(deleteReservation.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = '';
      });
  },
});

export default reservationSlice.reducer;
export const { removeReservation } = reservationSlice.actions;
