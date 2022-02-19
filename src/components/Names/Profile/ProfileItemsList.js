import { Button, Form, Container } from 'react-bootstrap';
import ProfileItem from './ProfileItem.js';

function ProfileItemsList({ fetchUserPosts }) {
  const user = {
    personalInfo: {
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
    },
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  return (
    <Container fluid id='info' className='border-bottom'>
      <Container fluid id='inputs' className='d-flex flex-wrap'>
        <Container fluid id='personal-info' className='w-50'>
          <Form.Label htmlFor='personal-info'>Personal info</Form.Label>
          <ProfileItem name='name' value={user.personalInfo.name} />
          <ProfileItem name='username' value={user.personalInfo.username} />
          <ProfileItem name='email' value={user.personalInfo.email} />
          <ProfileItem name='phone' value={user.personalInfo.phone} />
          <ProfileItem name='website' value={user.personalInfo.website} />
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
          <ProfileItem name='latitude' value={user.geo.lat} />
          <ProfileItem name='longitude' value={user.geo.lng} />
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
