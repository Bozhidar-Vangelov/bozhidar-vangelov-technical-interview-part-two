import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      id: 0,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
      },
      geo: {
        lat: 0,
        lng: 0,
      },
      phone: 0,
      website: '',
    },
  },
  reducers: {
    get: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { get } = userSlice.actions;

export default userSlice.reducer;
