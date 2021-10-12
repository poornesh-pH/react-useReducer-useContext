import React, { useContext } from 'react';
import { ContactContext } from './Store';
const DisplayContact = () => {
  const [state, dispatch] = useContext(ContactContext);
  console.log(state);
  return (
    <div>
      {state.map((contact) => {
        return (
          <div key={contact.name}>
            <hr />
            <p>{contact.name}</p>
            <p>{contact.age}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        );
      })}
    </div>
  );
};
export default DisplayContact;
