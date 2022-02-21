import { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import UserData from './UserData.js';
import PostsItemsList from '../Posts/PostsItemsList.js';

const UserDetails = ({ isOpen, userId }) => {
  const [fetchPosts, setFetchPosts] = useState(true);
  const [showPosts, setShowPosts] = useState(false);

  const fetchUserPosts = () => {
    setShowPosts((prevState) => !prevState);
    setFetchPosts(false);
  };

  return (
    <Card.Body className={isOpen ? 'p-0 mt-3' : 'd-none p-0 mt-3'}>
      <UserData userId={userId} fetchUserPosts={fetchUserPosts} />
      <Container className='text-center mt-5 mb-5'>
        <Button variant='primary' onClick={fetchUserPosts}>
          Get Users' posts
        </Button>
      </Container>

      {showPosts && (
        <PostsItemsList userId={userId} shouldFetchPosts={fetchPosts} />
      )}
    </Card.Body>
  );
};

export default UserDetails;
