import { Button, Form, Container } from 'react-bootstrap';
import ProfileItem from './ProfileItem.js';

import { useGetUserByIdQuery } from '../../../features/user.js';

function ProfileItemsList({ fetchUserPosts, userId }) {
  const { data: user, isLoading } = useGetUserByIdQuery(userId);

  if (isLoading) {
    return 'Loading';
  }

  return (
    <Container fluid id='info' className='border-bottom'>
      <Container fluid id='inputs' className='d-flex flex-wrap'>
        <Container fluid id='personal-info' className='w-50'>
          <Form.Label htmlFor='personal-info'>Personal info</Form.Label>
          <ProfileItem name='name' value={user.name} />
          <ProfileItem name='username' value={user.username} />
          <ProfileItem name='email' value={user.email} />
          <ProfileItem name='phone' value={user.phone} />
          <ProfileItem name='website' value={user.website} />
        </Container>
        <Container fluid id='address' className='w-50'>
          <Form.Label htmlFor='address'>Address</Form.Label>
          <ProfileItem name='street' value={user.address.street} />
          <ProfileItem name='suite' value={user.address.suite} />
          <ProfileItem name='city' value={user.address.zipcode} />
          <ProfileItem name='zipcode' value={user.address.street} />
        </Container>
        <Container fluid id='geo' className='w-50'>
          <Form.Label htmlFor='geo'>Geo Location</Form.Label>
          <ProfileItem name='latitude' value={user.address.geo.lat} />
          <ProfileItem name='longitude' value={user.address.geo.lng} />
        </Container>
        <Container fluid id='company' className='w-50'>
          <Form.Label htmlFor='company'>Company</Form.Label>
          <ProfileItem name='name' value={user.company.name} />
          <ProfileItem name='catch phrase' value={user.company.catchPhrase} />
          <ProfileItem name='business' value={user.company.bs} />
        </Container>
      </Container>
      {/*Buttons*/}
      <Container
        fluid
        id='buttons'
        className='d-flex justify-content-between mt-5 mb-5'
      >
        <Button variant='primary' onClick={fetchUserPosts}>
          Get users' posts
        </Button>
        <Button variant='success'>Confirm changes</Button>
        <Button variant='danger'>Revert changes</Button>
      </Container>
    </Container>
  );
}

export default ProfileItemsList;
