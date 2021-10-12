import React, { useContext } from 'react';
import './style.css';
import ContactComponent from './ContactComponent';
import Store, { ContactContext } from './Store';
export default function App(props) {
  return (
    <Store>
      <h4>Users Dashboard</h4>
      <ContactComponent />
    </Store>
  );
}
