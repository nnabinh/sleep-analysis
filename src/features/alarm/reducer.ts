import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

const alarmSlice = createSlice({
  name: 'alarm',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default alarmSlice.reducer;
