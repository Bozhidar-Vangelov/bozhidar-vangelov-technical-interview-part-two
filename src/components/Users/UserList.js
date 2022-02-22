import { Container, Card } from 'react-bootstrap';
import { useGetAllUsersQuery } from '../../services/users';
import User from './User';

const UsersList = () => {
  const { data: users, isLoading } = useGetAllUsersQuery();

  if (isLoading) {
    return 'LOADING';
  }

  return (
    <Container fluid id='names' className='m-0 p-0'>
      <Card id='card'>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Card>
    </Container>
  );
};

export default UsersList;
