import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { renderFilter } from 'redux/filterSlice';

import { StyledAppWrapper } from 'App.styled';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const changeFilterData = event => {
    const { value } = event.currentTarget;
    setFilter(value);
    dispatch(renderFilter(value));
  };

  return (
    <>
      <StyledAppWrapper>
        <h1>Phonebook</h1>
        <ContactForms />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilterData} />
        <ContactList />
      </StyledAppWrapper>
    </>
  );
};

export default App;
