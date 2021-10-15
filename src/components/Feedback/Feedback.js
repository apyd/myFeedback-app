import { Heading3, Paragraph, Span } from '../UI/Text'
import Wrapper from '../../helpers/Wrapper'
import { ReactComponent as CommentIcon } from '../../assets/comments.svg'
import VoteCounter from '../UI/VoteCounter'
import { useTheme } from 'styled-components'

const Feedback = (props) => {
  const theme = useTheme()
  const { primary } = theme

  return (
    <Wrapper margin="10px 0" padding="20px" align="flex-start">
      <Heading3>{props.title}</Heading3>
      <Paragraph>{props.description}</Paragraph>
      <Wrapper
        bgColor="#f1f4ff"
        padding="10px"
        margin="0 0 15px 0"
        shadow="none"
      >
        <Span color="#586de5" fontWeight="bold">
          {props.type}
        </Span>
      </Wrapper>
      <Wrapper
        shadow="none"
        direction="row"
        width="100%"
        justify="space-between"
      >
        <VoteCounter value={props.numberOfVotes} disabled={false} />
        <Wrapper direction="row" align="center" padding="0 10px" shadow="none">
          <CommentIcon
            width="48px"
            src={CommentIcon}
            alt="comment icon"
            fill={primary}
          />
          <Span fontWeight="bold">{props.numberOfComments}</Span>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default Feedback
