import {
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
  Container,
} from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Card fluid>
        <Card.Header fluid>Bret</Card.Header>
        <Card.Body fluid>
          <Container fluid id='info' className='border-bottom'>
            <Container fluid id='inputs' className='d-flex flex-wrap'>
              <Container fluid id='personal-info' className='w-50'>
                <Form.Label htmlFor='personal-info'>Personal info</Form.Label>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='name'>Name</InputGroup.Text>
                  <FormControl
                    id='name'
                    defaultValue='Leanne Graham'
                    aria-describedby='name'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='username'>Username</InputGroup.Text>
                  <FormControl
                    id='username'
                    defaultValue='Bret'
                    aria-describedby='username'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='email'>Email</InputGroup.Text>
                  <FormControl
                    id='email'
                    defaultValue='Sincere@april.biz'
                    aria-describedby='email'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='phone'>Phone</InputGroup.Text>
                  <FormControl
                    id='phone'
                    defaultValue='1-770-736-8031 x56442'
                    aria-describedby='phone'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='website'>Website</InputGroup.Text>
                  <FormControl
                    id='website'
                    defaultValue='hildegard.org'
                    aria-describedby='website'
                  />
                </InputGroup>
              </Container>
              <Container fluid id='address' className='w-50'>
                <Form.Label htmlFor='address'>Address</Form.Label>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='street'>Street</InputGroup.Text>
                  <FormControl
                    id='street'
                    defaultValue='Kulas Light'
                    aria-describedby='street'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='suite'>Suite</InputGroup.Text>
                  <FormControl
                    id='suite'
                    defaultValue='Apt. 556'
                    aria-describedby='suite'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='city'>City</InputGroup.Text>
                  <FormControl
                    id='city'
                    defaultValue='Gwenborough'
                    aria-describedby='city'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='zipcode'>Zipcode</InputGroup.Text>
                  <FormControl
                    id='zipcode'
                    defaultValue='92998-3874'
                    aria-describedby='zipcode'
                  />
                </InputGroup>
              </Container>
              <Container fluid id='geo' className='w-50'>
                <Form.Label htmlFor='geo'>Geo Lcation</Form.Label>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='lat'>Latitude</InputGroup.Text>
                  <FormControl
                    id='lat'
                    defaultValue='-37.3159'
                    aria-describedby='lat'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='lng'>Longitude</InputGroup.Text>
                  <FormControl
                    id='lng'
                    defaultValue='81.1496'
                    aria-describedby='lng'
                  />
                </InputGroup>
              </Container>
              <Container fluid id='company' className='w-50'>
                <Form.Label htmlFor='company'>Company</Form.Label>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='company-name'>
                    Company name
                  </InputGroup.Text>
                  <FormControl
                    id='company-name'
                    defaultValue='Romaguera-Crona'
                    aria-describedby='company-name'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='catch-phrase'>
                    Catch phrase
                  </InputGroup.Text>
                  <FormControl
                    id='catch-phrase'
                    defaultValue='Multi-layered client-server neural-net'
                    aria-describedby='catch-phrase'
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='bs'>Bussiness</InputGroup.Text>
                  <FormControl
                    id='bs'
                    defaultValue='harness real-time e-markets'
                    aria-describedby='bs'
                  />
                </InputGroup>
              </Container>
            </Container>
            {/*Buttons*/}
            <Container
              fluid
              id='buttons'
              className='d-flex justify-content-between mt-5 mb-5'
            >
              <Button variant='primary'>Get users' posts</Button>
              <Button variant='success'>Confirm changes</Button>
              <Button variant='danger'>Revert changes</Button>
            </Container>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
