import { InputGroup, FormControl } from 'react-bootstrap';

function ProfileItem({ label, defaultValue }) {
  return (
    <InputGroup className='mb-3'>
      <InputGroup.Text id={label}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </InputGroup.Text>
      <FormControl
        id={label}
        name={label}
        defaultValue={defaultValue}
        aria-describedby={label}
      />
    </InputGroup>
  );
}

export default ProfileItem;
