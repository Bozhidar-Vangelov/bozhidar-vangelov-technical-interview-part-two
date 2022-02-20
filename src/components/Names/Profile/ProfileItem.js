import { InputGroup, FormControl } from 'react-bootstrap';

function ProfileItem({ userId, label, value }) {
  const onChangeHandler = (e) => {
    console.log('change');
    console.log(userId);
    console.log(e.target.parentElement);

    e.target.parentElement.classList.add('border');
    e.target.parentElement.classList.add('border-warning');
  };

  return (
    <InputGroup className='mb-3'>
      <InputGroup.Text id={label}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </InputGroup.Text>
      <FormControl
        onChange={onChangeHandler}
        id={label}
        name={label}
        defaultValue={value}
        aria-describedby={label}
      />
    </InputGroup>
  );
}

export default ProfileItem;
