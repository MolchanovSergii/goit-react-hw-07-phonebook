import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContact(state, action) {
  //     state.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     const id = action.payload;
  //     return state.filter(contact => contact.id !== id);
  //   },
  // },
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
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
