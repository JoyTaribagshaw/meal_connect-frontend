import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from '../features/registration/registrationSlice';
import loginReducer from '../features/login/loginSlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
  },
});

export default store;
