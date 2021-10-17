import styled from 'styled-components'
import Button from '../components/UI/Button'
import Feedback from '../components/Feedback/Feedback'
import { breakpoints } from '../utils/breakpoints'
import { Heading3, Paragraph } from '../components/UI/Text'

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 65px;
  left: 0px;
  width: 100%;
  padding: 10px 20px;
  background-color: var(--blue);
  color: white;
  font-weight: bold;
  @media ${breakpoints.laptop} {
    position: static;
    border-radius: 5px;
  }
`

const Feedbacks = () => {
  return (
    <>
      <ActionsWrapper>
        <Paragraph color="white">6 suggestions</Paragraph>
        <Button>+ Add feedback</Button>
      </ActionsWrapper>
      <Heading3>Product name</Heading3>
      <Feedback
        title="First feedback"
        description="This is first feedback description"
        type="feature"
        numberOfVotes={1}
        numberOfComments={4}
      />
      <Feedback
        title="Second feedback"
        description="This is Second feedback description"
        type="Enhancement"
        numberOfVotes={1}
        numberOfComments={4}
      />
      <Feedback
        title="Third feedback"
        description="This is Third feedback description"
        type="Enhancement"
        numberOfVotes={1}
        numberOfComments={4}
      />
      <Feedback
        title="Fourth feedback"
        description="This is Fourth feedback description"
        type="feature"
        numberOfVotes={1}
        numberOfComments={4}
      />
      <Feedback
        title="Fifth feedback"
        description="This is Fifth feedback description"
        type="feature"
        numberOfVotes={1}
        numberOfComments={4}
      />
    </>
  )
}

export default Feedbacks
