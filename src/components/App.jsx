import { Wrapper } from 'components/App.styled';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Caption } from 'components/App.styled';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Wrapper>
        <Caption>Phonebook</Caption>
        <Form />
        <Contacts />
      </Wrapper>
    </div>
  );
};
