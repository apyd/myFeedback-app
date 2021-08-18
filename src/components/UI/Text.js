import styled from 'styled-components'

const StyledHeader1 = styled.h1`
  font-size: 1.3rem;
  margin: 10px 0;
`
const StyledHeader2 = styled.h2`
  font-size: 1.15rem;
  margin: 10px 0;
`
const StyledHeader3 = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`

const StyledParagraph = styled.p`
  font-size: 1rem;
  margin: 20px 5px;
  padding: 0;
`

const StyledSpan = styled.span`
  color: ${(props) => props.color || 'black'};
`

export const Header1 = (props) => {
  return <StyledHeader1>{props.children}</StyledHeader1>
}

export const Header2 = (props) => {
  return <StyledHeader2>{props.children}</StyledHeader2>
}

export const Header3 = (props) => {
  return <StyledHeader3>{props.children}</StyledHeader3>
}

export const Paragraph = (props) => {
  return <StyledParagraph>{props.children}</StyledParagraph>
}

export const Span = (props) => {
  return <StyledSpan color={props.color}>{props.children}</StyledSpan>
}
