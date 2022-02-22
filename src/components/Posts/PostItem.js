import { Card, Button, Container } from 'react-bootstrap';
import { useDeletePostMutation } from '../../services/posts';

const PostItem = ({ userId, id, title, body }) => {
  const [deletePost] = useDeletePostMutation()
  
  const handleDelete = () => deletePost({userId, id})
  return (
    <Container fluid id='post' className='border border-info p-3 mb-3'>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
      <Button active variant='danger' onClick={handleDelete}>
        Delete post
      </Button>
    </Container>
  );
}

export default PostItem;
