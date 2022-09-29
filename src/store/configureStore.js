import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../pages/signIn/reducers'

export const store = configureStore({
   reducer: {
      auth: authReducer,
   }
 })