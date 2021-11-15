import Button from '../../UI/Button'
import Modal from '../../UI/Modal'
import { Paragraph } from '../../UI/Text'
import TextArea from '../../UI/Textarea'
import TextInput from '../../UI/TextInput'
import { Form, FormActions } from '../Forms'

const ProductForm = (props) => {
  return (
    <Modal
      isOpened={props.isOpened}
      closeModal={props.closeModal}
      headerText="New product"
      subHeaderText="Please fullfill below fields:"
    >
      <Form>
        <Paragraph>Product name*</Paragraph>
        <TextInput id="name" name="title" label="Title" />
        <Paragraph>Product description*</Paragraph>
        <TextArea placeholder="You can describe here your product" />
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

export default ProductForm
