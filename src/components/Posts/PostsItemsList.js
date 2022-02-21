import {
  Button,
  Container,
  Modal,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import PostItem from './PostItem.js';

import { useGetUserPostsQuery } from '../../features/user.js';
import { useState } from 'react';

function PostsItemsList({ userId, shouldFetchPosts }) {
  const { data: posts, isLoading } = useGetUserPostsQuery(userId, {
    skip: shouldFetchPosts,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (isLoading || !posts) {
    return 'Loading';
  }

  return (
    <>
      <Container fluid id='posts' className='mt-5'>
        <Container fluid id='create' className='mb-5'>
          <Button variant='success' onClick={handleShow}>
            Create a post
          </Button>
        </Container>
        {posts.map((post) => (
          <PostItem key={post.id} title={post.title} body={post.body} />
        ))}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon2'>Title</InputGroup.Text>
            <FormControl
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
          </InputGroup>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon2'>Body</InputGroup.Text>
            <FormControl
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostsItemsList;
