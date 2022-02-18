import { Card } from 'react-bootstrap';
import ProfileItemsList from './ProfileItemsList.js';
import PostsItemsList from '../Posts/PostsItemsList.js';

function Profile({ isOpen }) {
  return (
    <Card.Body
      fluid
      // className='p-0 mt-3'
      className={isOpen ? '' : 'd-none'}
    >
      <ProfileItemsList />
      <PostsItemsList />
    </Card.Body>
  );
}

export default Profile;
