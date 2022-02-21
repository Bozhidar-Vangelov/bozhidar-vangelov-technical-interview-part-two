import { useState } from 'react';

import { Card, Button, Container } from 'react-bootstrap';
import ProfileItemsList from './UserData.js';
import PostsItemsList from '../Posts/PostsItemsList.js';

const UserDetails = ({ isOpen, userId }) => {
  const [skip, setSkip] = useState(true);
  const [showPosts, setShowPosts] = useState(false);

  const fetchUserPosts = () => {
    setShowPosts((prevState) => !prevState);
    setSkip(false);
  };

  return (
    <Card.Body className={isOpen ? 'p-0 mt-3' : 'd-none p-0 mt-3'}>
      <ProfileItemsList userId={userId} fetchUserPosts={fetchUserPosts} />
      <Container className='text-center mt-5 mb-5'>
        <Button variant='primary' onClick={fetchUserPosts}>
          Get Users' posts
        </Button>
      </Container>

      {showPosts ? (
        <PostsItemsList userId={userId} shouldFetchPosts={skip} />
      ) : (
        ''
      )}
    </Card.Body>
  );
};

export default UserDetails;
