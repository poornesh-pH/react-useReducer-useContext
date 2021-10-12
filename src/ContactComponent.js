import React, { useState, useContext } from 'react';
import { ContactContext } from './Store';
const ContactComponent = () => {
  const [name, SetName] = useState('');
  const [age, SetAge] = useState('');
  const [phone, SetPhone] = useState('');
  const [email, SetEmail] = useState('');
  const [state, dispatch] = useContext(ContactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_CONTACT' });
  };

  return (
    <div>
      <p>Contact Component</p>
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
          type="text"
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
