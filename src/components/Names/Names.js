import { Container, Card } from 'react-bootstrap';

import { useGetAllUsersQuery } from '../../features/user.js';
import Name from './Name.js';

function Names() {
  const { data: users, isLoading } = useGetAllUsersQuery();

  if (isLoading) {
    return 'LOADING';
  }

  return (
    <Container fluid id='names' className='m-0 p-0'>
      <Card id='card'>
        {users.map((user) => (
          <Name key={user.id} user={user} />
        ))}
      </Card>
    </Container>
  );
}

export default Names;
