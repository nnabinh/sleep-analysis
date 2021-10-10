import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;
