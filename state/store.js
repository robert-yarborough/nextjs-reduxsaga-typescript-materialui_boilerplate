import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../state/slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})