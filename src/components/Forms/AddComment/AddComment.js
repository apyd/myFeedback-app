import Button from '../../UI/Button'
import { Heading3, Span } from '../../UI/Text'
import TextArea from '../../UI/Textarea'
import { Form, FormActions } from '../Forms'
import styled from 'styled-components'

const AddCommentWrapper = styled.div`
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.panel};
`

const AddCommentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AddComment = () => {
  return (
    <AddCommentWrapper>
      <AddCommentHeader>
        <Heading3>Add comment</Heading3>
        <Span>(320 characters left)</Span>
      </AddCommentHeader>
      <Form>
        <TextArea placeholder="Add your comment" />
        <FormActions justify="flex-end">
          <Button variant="primary">Add comment</Button>
        </FormActions>
      </Form>
    </AddCommentWrapper>
  )
}

export default AddComment
