import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default onboardingSlice.reducer;
