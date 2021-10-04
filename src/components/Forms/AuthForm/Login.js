import { AppRoutes } from '../../../routing/AppRoutes'
import Button from '../../UI/Button'
import PageLink from '../../UI/PageLink'
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
        <Button bgColor="var(--blue)" color="white">
          Login
        </Button>
        <PageLink to={AppRoutes.FORGOT_PASSWORD}>Forgot password</PageLink>
      </FormActions>
    </Form>
  )
}

export default Login
