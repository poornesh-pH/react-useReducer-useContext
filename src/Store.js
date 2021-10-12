import React, { createContext, useReducer } from 'react';
import ContactReducer from './ContactReducer';

const Store = ({ children }) => {
  const [contact, dispatch] = useReducer(initialState, ContactReducer);
  return (
    <ContactContext.Provider value={[contact, dispatch]}>
      {children}
    </ContactContext.Provider>
  );
};

const initialState = [
  {
    name: 'Poornesh',
    age: '25',
    email: 'poorneshtest@gmail.com',
    phone: '9043494878',
  },
];

export const ContactContext = createContext(initialState);
export default Store;
