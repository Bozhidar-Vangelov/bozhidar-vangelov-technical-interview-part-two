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
  };

  const getEntries = (object) =>
    Object.entries(object).flatMap(([key, value]) => {
      if (typeof value === 'object') {
        return getEntries(value);
      }

      return [[key, value]];
    });

  const entries = getEntries(user).slice(1);

  return (
    <Container fluid id='info' className='border-bottom'>
      <Form onSubmit={onSubmitHandler} className='d-flex flex-wrap'>
        <Container fluid id='inputs' className='d-flex flex-wrap'>
          {entries.map(([key, value]) => (
            <ProfileItem
              userId={userId}
              label={key}
              defaultValue={value}
              key={value}
            />
          ))}
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
