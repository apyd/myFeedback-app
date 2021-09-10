import Button from '../../UI/Button'
import TextInput from '../../UI/TextInput'
import { Form, FormActions } from '../Forms'

const Register = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Form onSubmit={submitHandler}>
      <TextInput id="email" name="email" type="email" label="Email" />
      <TextInput id="username" name="username" type="text" label="Username" />
      <TextInput
        id="Password"
        name="Password"
        type="password"
        label="Password"
      />
      <TextInput
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label="Confirm Password"
      />
      <FormActions>
        <Button>Create account</Button>
      </FormActions>
    </Form>
  )
}

export default Register
