import styled from 'styled-components'
import { breakpoints } from '../../utils/breakpoints'

export const StyledFeedbackCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  margin: 10px 0;
  padding: 20px 20px 10px 20px;
  background-color: ${(props) => props.theme.panel};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  @media ${breakpoints.tablet} {
    padding: 0px;
  }
`

export const FeedbackCardText = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  margin-bottom: 10px;
  @media ${breakpoints.tablet} {
    grid-column: 2 / 3;
    grid-row: 1 / -1;
  }
`

export const CommentsIndicator = styled.div`
  display: flex;
  align-items: center;
  grid-column: 3 / 3;
  grid-row: 3 / 3;
  padding: 0 10px;
  @media ${breakpoints.tablet} {
    justify-self: center;
    grid-column: 3 / 3;
    grid-row: 2 / 2;
  }
`

export const VoteCounterWrapper = styled.div`
  grid-column: 1 / 1;
  grid-row: 3 / 3;
  @media ${breakpoints.tablet} {
    justify-self: center;
    grid-column: 1 / 1;
    grid-row: 2 / 2;
  }
`
