import { Button, Container } from 'react-bootstrap';
import PostItem from './PostItem.js.js';

function PostsItemsList() {
  const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Container fluid id='posts' className='mt-5'>
      <Container fluid id='create' className='mb-5'>
        <Button variant='success'>Create a post</Button>
      </Container>
      {posts.map((x) => (
        <PostItem />
      ))}
    </Container>
  );
}

export default PostsItemsList;
