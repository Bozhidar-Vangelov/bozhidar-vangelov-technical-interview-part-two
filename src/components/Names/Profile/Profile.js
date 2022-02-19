import { useState } from 'react';

import { Card } from 'react-bootstrap';
import ProfileItemsList from './ProfileItemsList.js';
import PostsItemsList from '../Posts/PostsItemsList.js';

function Profile({ isOpen, userId }) {
  const [skip, setSkip] = useState(true);
  const fetchUserPosts = () => setSkip(false);

  return (
    <Card.Body className={isOpen ? 'p-0 mt-3' : 'd-none p-0 mt-3'}>
      <ProfileItemsList fetchUserPosts={fetchUserPosts} />
      <PostsItemsList userId={userId} shouldFetchPosts={skip} />
    </Card.Body>
  );
}

export default Profile;
