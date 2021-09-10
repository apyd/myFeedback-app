import Button from '../../UI/Button'
import TextInput from '../../UI/TextInput'
import { Form, FormActions } from '../Forms'

const ResetPassword = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Form onSubmit={submitHandler}>
      <TextInput id="email" name="email" type="email" label="Email" />
      <FormActions>
        <Button onClick={props.onClick}>Send reset link</Button>
      </FormActions>
    </Form>
  )
}

export default ResetPassword
