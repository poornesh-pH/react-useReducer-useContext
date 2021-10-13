import React, { useState, useContext } from 'react';
import { ContactContext } from './Store';
import { v4 as uuidv4 } from 'uuid';
const ContactComponent = () => {
  const [name, SetName] = useState('');
  const [age, SetAge] = useState('');
  const [phone, SetPhone] = useState('');
  const [email, SetEmail] = useState('');
  const [state, dispatch] = useContext(ContactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CONTACT',
      contact: { id: uuidv4(), name, age, phone, email },
    });
    SetAge('');
    SetEmail('');
    SetName('');
    SetPhone('');
  };

  return (
    <div>
      <p>Contact Form</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          value={age}
          onChange={(e) => SetAge(e.target.value)}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => SetPhone(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default ContactComponent;
