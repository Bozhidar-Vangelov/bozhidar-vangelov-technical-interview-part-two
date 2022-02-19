import { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Profile from './Profile/Profile.js';

import * as usersService from '../../services/usersService.js';
import { useSelector, useDispatch } from 'react-redux';
import { get } from '../../features/user.js';

function Names() {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  const newUser = {
    id: 5,
    name: 'ddwqqwd',
    username: 'wqdqw',
    email: 'wqdqwdww',
    address: {
      street: 'wqdwq',
      suite: 'wqddwq',
      city: 'dwqdqw',
      zipcode: 'dwqdwq',
    },
    geo: {
      lat: 6,
      lng: 2,
    },
    phone: 21321321,
    website: 'dwqdqw',
  };

  useEffect(() => {}, []);

  const names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const list = (
    <>
      <Card.Header fluid onClick={toggle}>
        Bret
      </Card.Header>
      <Profile isOpen={isOpen} />
      <button
        onClick={() => {
          dispatch(get(newUser));
          console.log(user);
        }}
      >
        AAAAAAAAAAAAAAAAA
      </button>
    </>
  );

  return (
    <Container fluid id='names' className='m-0 p-0'>
      <Card id='card' fluid>
        {names.map(() => list)}
      </Card>
    </Container>
  );
}

export default Names;
