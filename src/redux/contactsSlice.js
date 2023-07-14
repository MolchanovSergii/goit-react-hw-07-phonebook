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
      .addCase(fetchAllContacts.pending, handlePending)
      .addCase(fetchAllContacts.fulfilled, handleFetchAllContacts)
      .addCase(fetchAllContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addCase(deleteContact.rejected, handleRejected),
});

export default contactsSlice.reducer;
