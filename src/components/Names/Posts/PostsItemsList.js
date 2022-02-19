import { Button, Container } from 'react-bootstrap';
import PostItem from './PostItem.js';

import { useGetUserPostsQuery } from '../../../features/user.js';

function PostsItemsList({ userId, shouldFetchPosts }) {
  const { data: posts, isLoading } = useGetUserPostsQuery(userId, {
    skip: shouldFetchPosts,
  });

  if (isLoading || !posts) {
    return 'Loading';
  }

  return (
    <Container fluid id='posts' className='mt-5'>
      <Container fluid id='create' className='mb-5'>
        <Button variant='success'>Create a post</Button>
      </Container>
      {posts.map((post) => (
        <PostItem key={post.id} title={post.title} body={post.body} />
      ))}
    </Container>
  );
}

export default PostsItemsList;
