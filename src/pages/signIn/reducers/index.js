import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn as signInRequest } from "../api";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
  accessToken: {},
};

export const signIn = createAsyncThunk("auth/signIn", async (data)=>{
  const response = await signInRequest(data);
  return response.data;
});
  

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signIn.pending]: (state) => {
      state.isLoading = true;
    },

    [signIn.fulfilled]: (state, { payload }) => {
      const  { accessToken, ...userInfo } = payload;
      state.isLoading = false;
      state.userInfo = userInfo;
       state.accessToken = accessToken;

       localStorage.setItem('accessToken', accessToken)
       console.log(localStorage);
    },
    
    // [signIn.fulfilled]: (state, {payload: {data}})=>{
    // const {accessToken, ...userInfo} = data

    [signIn.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export default authSlice.reducer;