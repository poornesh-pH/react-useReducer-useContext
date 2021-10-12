import React, { useState } from 'react';

const ContactComponent = () => {
  const [name, SetName] = useState('');
  const [age, SetAge] = useState('');
  const [phone, SetPhone] = useState('');
  const [email, SetEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={(e) => SetName(e.target.name)}
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          onChange={(e) => SetAge(e.target.age)}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          onChange={(e) => SetPhone(e.target.phone)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => SetEmail(e.target.email)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default ContactComponent;
