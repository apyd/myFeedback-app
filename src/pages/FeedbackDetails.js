import styled from 'styled-components'
import Button from '../components/UI/Button'
import FeedbackCard from '../components/Feedback/FeedbackCard'
import { breakpoints } from '../utils/breakpoints'
import { Heading3, Paragraph } from '../components/UI/Text'
import FeedbackForm from '../components/Forms/FeedbackForm/FeedbackForm'
import Comment from '../components/Comment/Comment'
import AddComment from '../components/Forms/AddComment/AddComment'

import useModal from '../hooks/useModal'
const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  font-weight: bold;
  @media ${breakpoints.laptop} {
    position: static;
    border-radius: 5px;
  }
`

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.panel};
  padding: 20px;
  border-radius: 5px;
`

const CommentsHeader = styled.header`
  margin-bottom: 15px;
`

const DUMMY_DATA = {
  title: 'First feedback',
  description: 'This is first feedback description',
  type: 'feature',
  numberOfVotes: 1,
  numberOfComments: 4,
}

const FeedbackDetails = () => {
  const [isOpened, openModal, closeModal] = useModal()

  return (
    <>
      <FeedbackForm
        data={DUMMY_DATA}
        isOpened={isOpened}
        closeModal={closeModal}
      />
      <ActionsWrapper>
        <Paragraph>Back arrow</Paragraph>
        <Button onClick={openModal}>Edit</Button>
      </ActionsWrapper>
      <FeedbackCard
        title={DUMMY_DATA.title}
        description={DUMMY_DATA.description}
        type={DUMMY_DATA.type}
        numberOfVotes={DUMMY_DATA.numberOfVotes}
        numberOfComments={DUMMY_DATA.numberOfComments}
      />
      <Comments>
        <CommentsHeader>
          <Heading3>3 comments</Heading3>
        </CommentsHeader>
        <Comment />
        <Comment />
        <Comment />
      </Comments>
      <AddComment />
    </>
  )
}

export default FeedbackDetails
