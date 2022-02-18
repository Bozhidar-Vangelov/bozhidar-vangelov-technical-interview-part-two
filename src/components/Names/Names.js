import { Container, Card } from 'react-bootstrap';
import Profile from './Profile/Profile.js';

function Names() {
  const names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container fluid id='names' className='m-0 p-0'>
      <Card id='card' fluid>
        <Card.Header fluid>Bret</Card.Header>
        {names.map((x) => (
          <Profile />
        ))}
      </Card>
    </Container>
  );
}

export default Names;
