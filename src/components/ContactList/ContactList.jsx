import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { StyledButton } from '../ContactForms/ContactForms.styled';
import { StyledContactList, StyledContactItem } from './ContactList.styled';

const ContactList = () => {
  const contactsList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <StyledContactList>
        {visibleContacts.map(({ id, name, number }) => (
          <StyledContactItem key={id}>
            {name} : {number}
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
