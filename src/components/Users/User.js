import { useState } from 'react';
import { Card } from 'react-bootstrap';
import UserDetails from './UserDetails';

const User = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <Card.Header onClick={toggle}>{user.name}</Card.Header>
      <UserDetails userId={user.id} isOpen={isOpen} />
    </>
  );
}

export default User;
