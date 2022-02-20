import { Button, Form, Container } from 'react-bootstrap';
import ProfileItem from './ProfileItem.js';

import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
} from '../../../features/user.js';

function ProfileItemsList({ fetchUserPosts, userId }) {
  const { data: user, isLoading, refetch } = useGetUserByIdQuery(userId);
  const [updateUserById] = useUpdateUserByIdMutation();

  if (isLoading) {
    return 'Loading';
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let {
      name,
      username,
      email,
      phone,
      website,
      street,
      suite,
      city,
      zipcode,
      latitude,
      longitude,
      companyName,
      catchPhrase,
      business,
    } = Object.fromEntries(formData);

    await updateUserById({
      userId,
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          latitude,
          longitude,
        },
      },
      phone,
      website,
      company: {
        companyName,
        catchPhrase,
        business,
      },
    });
    refetch();

    console.log(user);
  };

  return (
    <Container fluid id='info' className='border-bottom'>
      <Form onSubmit={onSubmitHandler} className='d-flex flex-wrap'>
        <Container fluid id='inputs' className='d-flex flex-wrap'>
          <Container fluid id='personal-info' className='w-50'>
            <Form.Label htmlFor='personal-info'>Personal info</Form.Label>
            <ProfileItem userId={userId} label='name' value={user.name} />
            <ProfileItem
              userId={userId}
              label='username'
              value={user.username}
            />
            <ProfileItem userId={userId} label='email' value={user.email} />
            <ProfileItem userId={userId} label='phone' value={user.phone} />
            <ProfileItem userId={userId} label='website' value={user.website} />
          </Container>
          <Container fluid id='address' className='w-50'>
            <Form.Label htmlFor='address'>Address</Form.Label>
            <ProfileItem
              userId={userId}
              label='street'
              value={user.address.street}
            />
            <ProfileItem
              userId={userId}
              label='suite'
              value={user.address.suite}
            />
            <ProfileItem
              userId={userId}
              label='city'
              value={user.address.zipcode}
            />
            <ProfileItem
              userId={userId}
              label='zipcode'
              value={user.address.street}
            />
          </Container>
          <Container fluid id='geo' className='w-50'>
            <Form.Label htmlFor='geo'>Geo Location</Form.Label>
            <ProfileItem
              userId={userId}
              label='latitude'
              value={user.address.geo.lat}
            />
            <ProfileItem
              userId={userId}
              label='longitude'
              value={user.address.geo.lng}
            />
          </Container>
          <Container fluid id='company' className='w-50'>
            <Form.Label htmlFor='company'>Company</Form.Label>
            <ProfileItem
              userId={userId}
              label='companyName'
              value={user.company.name}
            />
            <ProfileItem
              userId={userId}
              label='catchPhrase'
              value={user.company.catchPhrase}
            />
            <ProfileItem
              userId={userId}
              label='business'
              value={user.company.bs}
            />
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
          <Button variant='success' type='submit'>
            Confirm changes
          </Button>
          <Button variant='danger'>Revert changes</Button>
        </Container>
      </Form>
    </Container>
  );
}

export default ProfileItemsList;
