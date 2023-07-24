import { Container, Title, SubTitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';


export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};