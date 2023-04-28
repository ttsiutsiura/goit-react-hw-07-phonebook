import { nanoid } from 'nanoid';
import { ContactList } from './Contacts.styled';
import { ContactsCaption } from './Contacts.styled';
import { Filter } from 'components/Filter/Filter';
import { ListItem } from './Contacts.styled';
import { DeleteButton } from 'components/Contacts/Contacts.styled';
import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { ThreeDots } from 'react-loader-spinner';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';

export function Contacts() {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const [deleteContact, deleteResult] = useDeleteContactMutation();

  const filterValue = useSelector(selectFilterValue);

  const handleDeleteContact = id => {
    try {
      deleteContact(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getVisibleContacts = (contacts, filterValue) => {
    if (!isLoading) {
      const normalizedFilter = filterValue.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const visibleContacts = getVisibleContacts(contacts, filterValue);

  return (
    <>
      {
        <ContactsCaption>
          Contacts: {isLoading ? '0' : `${contacts.length}`}
        </ContactsCaption>
      }
      {<Filter />}
      {contacts?.length === 0 && isLoading === false && (
        <p style={{ height: 38 }}>No contacts.</p>
      )}
      <ThreeDots
        height="38"
        width="38"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isLoading}
      />
      {!isLoading && (
        <ContactList>
          {visibleContacts.map(contact => (
            <ListItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <DeleteButton
                type="button"
                onClick={() => handleDeleteContact(contact.id)}
                key={nanoid()}
                disabled={deleteResult.isLoading}
              >
                Delete
              </DeleteButton>
            </ListItem>
          ))}
        </ContactList>
      )}
    </>
  );
}
