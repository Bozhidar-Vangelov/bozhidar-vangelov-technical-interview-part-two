import { Card, Button, Container } from 'react-bootstrap';

function PostItem() {
  const post = {
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    text: 'quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };
  return (
    <Container fluid id='post' className='border border-info p-3 mb-3'>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.text}</Card.Text>
      <Button action variant='danger'>
        Delete post
      </Button>
    </Container>
  );
}

export default PostItem;
