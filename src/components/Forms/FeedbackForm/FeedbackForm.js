import Button from '../../UI/Button'
import Modal from '../../UI/Modal'
import Select from '../../UI/Select'
import { Paragraph } from '../../UI/Text'
import TextArea from '../../UI/Textarea'
import TextInput from '../../UI/TextInput'
import { Form, FormActions } from '../Forms'

const feedbackTypes = [
  { value: 'New feature', label: 'New feature' },
  { value: 'Enhancement', label: 'Enhancement' },
  { value: 'Bug', label: 'Bug' },
]

const FeedbackForm = (props) => {
  return (
    <Modal
      isOpened={props.isOpened}
      closeModal={props.closeModal}
      headerText="New feedback"
      subHeaderText="Please fullfill below fields:"
    >
      <Form>
        <Paragraph>Name your suggestion*</Paragraph>
        <TextInput id="name" name="title" label="Title" />
        <Paragraph>Select feedback category*</Paragraph>
        <Select options={feedbackTypes} />
        <Paragraph>Describe details*</Paragraph>
        <TextArea placeholder="You can describe here your idea" />
        <FormActions justify="flex-end">
          <Button onClick={props.closeModal} variant="ghost" margin="0 5px">
            Cancel
          </Button>
          <Button onClick={props.closeModal}>Submit</Button>
        </FormActions>
      </Form>
    </Modal>
  )
}

export default FeedbackForm
