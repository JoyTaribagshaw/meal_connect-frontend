import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from '../features/registration/registrationSlice';
import loginReducer from '../features/login/loginSlice';
import mealsReducer from '../features/admin/adminSlice';
import reservationReducer from '../features/reservation/reservationSlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
    meals: mealsReducer,
    reservation: reservationReducer,
  },
});

export default store;
