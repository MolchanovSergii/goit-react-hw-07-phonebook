import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { fetchAllContacts } from 'redux/operations';

import { StyledButton } from '../ContactForms/ContactForms.styled';
import Loader from 'components/Loader/Loader';
import { StyledContactList, StyledContactItem } from './ContactList.styled';

const ContactList = () => {
  const contactsList = useSelector(state => state.contacts);
  const { items, isLoading, error } = contactsList;

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  console.log(contactsList);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <StyledContactList>
        {visibleContacts.map(({ id, name, phone }) => (
          <StyledContactItem key={id}>
            {name} : {phone}
            <StyledButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </StyledButton>
          </StyledContactItem>
        ))}
      </StyledContactList>
    </>
  );
};

export default ContactList;
