import React from 'react';
import './style.css';
import ContactComponent from './ContactComponent';
import Store from './Store';
export default function App() {
  return (
    <Store>
      <h4>Users Dashboard</h4>
      <ContactComponent />
    </Store>
  );
}
