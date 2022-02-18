import { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Profile from './Profile/Profile.js';

function Names() {
  const [isOpen, setIsOpen] = useState(true);

  const names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const list = (
    <>
      <Card.Header fluid onClick={toggle}>
        Bret
      </Card.Header>
      <Profile isOpen={isOpen} />
    </>
  );

  return (
    <Container fluid id='names' className='m-0 p-0'>
      <Card id='card' fluid>
        {names.map(() => list)}
      </Card>
    </Container>
  );
}

export default Names;
