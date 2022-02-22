import { Fragment, useEffect, useState } from 'react'
import {
  Button,
  Form,
  Container,
  InputGroup,
  FormControl
} from 'react-bootstrap'
import {
  useGetAllUsersQuery,
  useUpdateUserByIdMutation
} from '../../services/users'
import { getEntries, getDifferences } from '../../utils'

const UserData = ({ userId }) => {
  const [updateUserById] = useUpdateUserByIdMutation()
  const { user } = useGetAllUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      user: data?.find(u => u.id === userId)
    })
  })

  const [userInfo, setUserInfo] = useState({})

  const [, ...entries] = getEntries(userInfo)

  const updateWithCachedState = () => {
    const cachedEntries = getEntries(user)
    const state = cachedEntries
      .map(([key, value]) => ({
        [key]: value
      }))
      .reduce((result, current) => ({ ...result, ...current }), {})

      setUserInfo(state)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const newValues = getDifferences(user, userInfo)

    await updateUserById({
      userId,
      ...newValues
    })
  }

  const handleOnChange = e => {
    setUserInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleRevertChanges = () => {
    updateWithCachedState()
  }

  useEffect(() => {
    console.log({user})
    updateWithCachedState()
  }, [user])

  return (
    <Container fluid id='info' className='border-bottom'>
      <Form onSubmit={handleSubmit} className='d-flex flex-wrap'>
        <Container fluid id='inputs' className='d-flex flex-wrap'>
          {entries.map(([key, value], index) => (
            <Fragment key={`${index}${key}`}>
              <InputGroup className='mb-3'>
                <InputGroup.Text>{key}</InputGroup.Text>
                <FormControl
                  name={key}
                  value={value}
                  onChange={handleOnChange}
                />
              </InputGroup>
            </Fragment>
          ))}
        </Container>
        <Container
          fluid
          id='buttons'
          className='d-flex justify-content-evenly mt-5 mb-5'
        >
          <Button variant='success' type='submit'>
            Confirm changes
          </Button>
          <Button variant='danger' onClick={handleRevertChanges}>
            Revert changes
          </Button>
        </Container>
      </Form>
    </Container>
  )
}

export default UserData
