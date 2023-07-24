import { Container, Titile, SubTitile } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export const App = () => {
  return (
    <Container>
      <Titile>Phonebook</Titile>
      <ContactForm />
      <SubTitile>Contacts</SubTitile>
      <Filter />
      <ContactList />
    </Container>
  );
};