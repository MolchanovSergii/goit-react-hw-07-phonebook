import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContact, deleteContact } from './operations';
import {
  handlePending,
  handleRejected,
  handleFetchAllContacts,
  handleAddContact,
  handleDeleteContact,
} from './asyncRedusers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchAllContacts.fulfilled, handleFetchAllContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending),
});

export default contactsSlice.reducer;
