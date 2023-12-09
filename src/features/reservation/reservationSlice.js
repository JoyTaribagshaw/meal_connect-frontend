import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservation: [],
  addReserve: [],
  isLoading: false,
  isError: null,
  isReserved: false,
};

// export const deleteReservation = createAsyncThunk(
//   'reservation/deleteReservation',
//   async (id, { dispatch }) => {
//     try {
//       const token = localStorage.getItem('access_token');
//       const response = await axios.delete(`http://127.0.0.1:4000/api/v1/reservations/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       dispatch(setReservations(response.data));
//     } catch (error) {
//       console.error('Error deleting reservation:', error);
//       dispatch(setError('Error deleting reservation.'));
//     }
//   },
// );

export const addReservation = createAsyncThunk('reservation/addReservation', async ({ reservationData, id }, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.post(`http://127.0.0.1:4000/api/v1/meals/${id}/reservations`,
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

    const response = await axios.get(`http://127.0.0.1:4000/api/v1/meals/${id}`, {
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.addReserve.push(action.payload);
        state.isReserved = true;
      })
      .addCase(addReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.me;
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
      });
  },
});

export default reservationSlice.reducer;
