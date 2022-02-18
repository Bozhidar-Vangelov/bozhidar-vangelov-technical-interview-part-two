import { Card } from 'react-bootstrap';
import ProfileItemsList from './ProfileItemsList.js';
import PostsItemsList from '../Posts/PostsItemsList.js';

function Profile({ isOpen }) {
  return (
    <Card.Body fluid className={isOpen ? 'p-0 mt-3' : 'd-none p-0 mt-3'}>
      <ProfileItemsList />
      <PostsItemsList />
    </Card.Body>
  );
}

export default Profile;
