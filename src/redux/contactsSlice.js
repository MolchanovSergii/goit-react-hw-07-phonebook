import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchAllContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchAllContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchAllContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
