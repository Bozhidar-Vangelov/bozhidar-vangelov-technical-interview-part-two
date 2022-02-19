import { Card, Button, Container } from 'react-bootstrap';

function PostItem({ title, body }) {
  return (
    <Container fluid id='post' className='border border-info p-3 mb-3'>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
      <Button action variant='danger'>
        Delete post
      </Button>
    </Container>
  );
}

export default PostItem;
