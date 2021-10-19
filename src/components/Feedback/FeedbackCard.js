import { Heading3, Paragraph, Span } from '../UI/Text'
import { ReactComponent as CommentIcon } from '../../assets/comments.svg'
import VoteCounter from '../UI/VoteCounter'
import { useTheme } from 'styled-components'
import {
  StyledFeedbackCard,
  FeedbackCardText,
  CommentsIndicator,
  VoteCounterWrapper,
} from './FeedbackCard.styled'

const FeedbackCard = (props) => {
  const theme = useTheme()
  const { secondary, background } = theme

  return (
    <StyledFeedbackCard>
      <FeedbackCardText>
        <Heading3>{props.title}</Heading3>
        <Paragraph>{props.description}</Paragraph>
        <Span
          textColor={background}
          fontWeight="bold"
          padding="5px"
          backgroundColor={secondary}
        >
          {props.type}
        </Span>
      </FeedbackCardText>
      <VoteCounterWrapper>
        <VoteCounter value={props.numberOfVotes} disabled={false} />
      </VoteCounterWrapper>
      <CommentsIndicator>
        <CommentIcon
          width="48px"
          src={CommentIcon}
          alt="comment icon"
          fill={secondary}
        />
        <Span fontWeight="bold">{props.numberOfComments}</Span>
      </CommentsIndicator>
    </StyledFeedbackCard>
  )
}

export default FeedbackCard
