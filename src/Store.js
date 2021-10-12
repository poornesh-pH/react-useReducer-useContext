import React, { createContext } from 'react';

const Store = () => {};

const initialState = {
  name: '',
  age: '',
  email: '',
  phone: '',
};

export const ContactContect = createContext(initialState);
export default Store;
