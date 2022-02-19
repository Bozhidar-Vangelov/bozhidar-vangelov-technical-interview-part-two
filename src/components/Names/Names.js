import { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Profile from './Profile/Profile.js';

import api from '../../services/usersService.js';
import { useSelector, useDispatch } from 'react-redux';
import { get } from '../../features/user.js';

function Names() {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    (async () => {
      try {
        let newUsers = await api.get();
        dispatch(get(newUsers.data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);

  const names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  console.log(user);

  const list = (
    <>
      <Card.Header fluid onClick={toggle}>
        Bret
      </Card.Header>
      <Profile isOpen={isOpen} />
      <button
        onClick={() => {
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
