import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from '../features/registration/registrationSlice';
import loginReducer from '../features/login/loginSlice';
import mealsReducer from '../features/admin/adminSlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
    meals: mealsReducer,
  },
});

export default store;
