import { Button, ButtonLink } from '../../UI/Button'
import TextInput from '../../UI/TextInput'
import { Form, FormActions } from '../Forms'

const Login = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Form onSubmit={submitHandler}>
      <TextInput id="username" name="username" type="text" label="Username" />
      <TextInput
        id="password"
        name="password"
        type="password"
        label="Password"
      />
      <FormActions>
        <Button>Login</Button>
        <ButtonLink onClick={props.changeView}>Forgot password</ButtonLink>
      </FormActions>
    </Form>
  )
}

export default Login
