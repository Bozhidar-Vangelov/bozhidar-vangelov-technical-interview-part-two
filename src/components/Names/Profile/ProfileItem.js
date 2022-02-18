import { InputGroup, FormControl } from 'react-bootstrap';

function ProfileItem({ name, value }) {
  return (
    <InputGroup className='mb-3'>
      <InputGroup.Text id={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </InputGroup.Text>
      <FormControl id={name} defaultValue={value} aria-describedby={name} />
    </InputGroup>
  );
}

export default ProfileItem;
