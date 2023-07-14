export const handlePending = (state, action) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

export const handleFetchAllContacts = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

export const handleAddContact = (state, action) => {
  state.items.push(action.payload);
  state.isLoading = false;
  state.error = null;
};

export const handleDeleteContact = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
  state.isLoading = false;
  state.error = null;
};
