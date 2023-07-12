import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    renderFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { renderFilter } = filterSlice.actions;
