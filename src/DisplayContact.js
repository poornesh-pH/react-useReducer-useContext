import React, { useContext } from 'react';
import { ContactContext } from './Store';
const DisplayContact = () => {
  const [state, dispatch] = useContext(ContactContext);
  return (
    <div>
      {state.map((contact) => {
        return (
          <div key={contact.name}>
            <p>Name: {contact.name}</p>
            <p>Age: {contact.age}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_CONTACT', id: contact.id })
              }
            >
              Delete
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default DisplayContact;
