import styled from 'styled-components'
import { ReactComponent as Avatar } from '../../assets/avatar.svg'
import { Heading3, Paragraph } from '../UI/Text'
import Button from '../UI/Button'
import { breakpoints } from '../../utils/breakpoints'

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
`

const StyledAvatar = styled(Avatar)`
  display: none;
  @media ${breakpoints.tablet} {
    display: block;
  }
`

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const CommentContent = styled.div`
  width: 100%;
  @media ${breakpoints.tablet} {
    margin-left: 15px;
    padding: 0 0 0 15px;
    /* border-left: 1px solid ${({ theme }) => theme.textLight}; */
  }
`

const Comment = () => {
  return (
    <CommentWrapper>
      <StyledAvatar width="84px" />
      <CommentContent>
        <CommentHeader>
          <Heading3>Elijah Moss</Heading3>
          <Button variant="tertiary" padding="0">
            Reply
          </Button>
        </CommentHeader>
        <Paragraph>
          Lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
          orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
        </Paragraph>
      </CommentContent>
    </CommentWrapper>
  )
}

export default Comment
