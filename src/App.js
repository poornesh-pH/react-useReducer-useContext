import React from 'react';
import './style.css';
import ContactComponent from './ContactComponent';
import DisplayContact from './DisplayContact';
import Store from './Store';
export default function App(props) {
  return (
    <Store>
      <h4>Contact Dashboard</h4>
      <DisplayContact />
      <ContactComponent />
    </Store>
  );
}
