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
    name: 'Poornesh',
    age: '25',
    email: 'poorneshtest@gmail.com',
    phone: '9043494878',
  },
];

export const ContactContext = createContext(initialState);
export default Store;
