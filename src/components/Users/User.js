import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Profile from '../Profile/Profile.js';

function User({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      <Card.Header onClick={toggle}>{user.name}</Card.Header>
      <Profile userId={user.id} isOpen={isOpen} />
    </>
  );
}

export default User;
