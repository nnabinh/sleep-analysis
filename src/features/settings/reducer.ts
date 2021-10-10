import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default settingsSlice.reducer;
