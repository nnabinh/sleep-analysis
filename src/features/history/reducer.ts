import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default historySlice.reducer;
