import { StyledAppWrapper } from 'App.styled';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <>
      <StyledAppWrapper>
        <h1>Phonebook</h1>
        <ContactForms />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </StyledAppWrapper>
    </>
  );
};

export default App;
