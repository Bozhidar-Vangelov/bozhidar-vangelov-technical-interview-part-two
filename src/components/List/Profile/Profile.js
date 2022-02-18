import { Card } from 'react-bootstrap';
import ProfileItemsList from './ProfileItemsList.js';
import PostsItemsList from '../Posts/PostsItemsList.js';

function Profile() {
  return (
    <Card id='card' fluid>
      <Card.Header fluid>Bret</Card.Header>
      <Card.Body fluid className='p-0 mt-3'>
        <ProfileItemsList />
        <PostsItemsList />
      </Card.Body>
    </Card>
  );
}

export default Profile;
