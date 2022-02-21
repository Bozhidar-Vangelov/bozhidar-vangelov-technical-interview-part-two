import {
  Button,
  Container,
  Modal,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import {
  useCreatePostMutation,
  useGetUserPostsQuery,
} from '../../features/users.js';
import { useState } from 'react';
import PostItem from './PostItem.js';

const PostsItemsList = ({ userId, shouldFetchPosts }) => {
  const { data: posts, isLoading } = useGetUserPostsQuery(userId, {
    skip: shouldFetchPosts,
  });
  const [createPost] = useCreatePostMutation();
  const [show, setShow] = useState(false);
  const [hasChanged, setHasChanged] = useState({
    title: false,
    body: false,
  });
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
  });

  const handleShow = () => setShow(true);
  const handleClose = async () => setShow(false);
  const handleChange = (e) => {
    setHasChanged((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }));
    setNewPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCreate = async () => {
    if (!newPost.title || !newPost.body) {
      setHasChanged({
        title: true,
        body: true,
      });

      return;
    }
    await createPost({
      userId,
      newPost,
    });
    setShow(false);
  };

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
        <Modal.Header closeButton>Create a post</Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <InputGroup.Text>Title</InputGroup.Text>
            <FormControl
              name='title'
              isInvalid={hasChanged.title && !newPost.title}
              value={newPost.title}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Text>Body</InputGroup.Text>
            <FormControl
              name='body'
              isInvalid={hasChanged.body && !newPost.body}
              value={newPost.body}
              onChange={handleChange}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleCreate}>
            Save Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostsItemsList;
