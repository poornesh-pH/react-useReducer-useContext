import React, { createContext, useReducer } from 'react';
import ContactReducer from './ContactReducer';

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {children}
    </ContactContext.Provider>
  );
};

const initialState = [
  {
    id: 1,
    name: 'Poornesh',
    age: '25',
    email: 'poornesh@gmail.com',
    phone: '9043494878',
  },
];

export const ContactContext = createContext(initialState);
export default Store;
