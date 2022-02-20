import { Button, Form, Container } from 'react-bootstrap';
import ProfileItem from './ProfileItem.js';

import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
} from '../../../features/user.js';
import { useState } from 'react';

function ProfileItemsList({ fetchUserPosts, userId }) {
  const { data: user, isLoading, refetch } = useGetUserByIdQuery(userId);
  const [updateUserById] = useUpdateUserByIdMutation();

  const [userChange, setUserChange] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    latitude: '',
    longitude: '',
    companyName: '',
    catchPhrase: '',
    business: '',
  });

  if (isLoading) {
    return 'Loading';
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await updateUserById({
      userId,
      ...userChange,
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

  const onChangeHandler = (e) => {
    setUserChange((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container fluid id='info' className='border-bottom'>
      <Form onSubmit={onSubmitHandler} className='d-flex flex-wrap'>
        <Container fluid id='inputs' className='d-flex flex-wrap'>
          {entries.map(([key, value]) => (
            <ProfileItem
              userId={userId}
              label={key}
              defaultValue={value}
              value={userChange.value}
              key={value}
              onChange={onChangeHandler}
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
