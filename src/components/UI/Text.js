import styled from 'styled-components'

const StyledHeading1 = styled.h1`
  font-size: 1.3rem;
  margin: 10px 0;
  color: ${(props) => props.color || 'black'};
`
const StyledHeading2 = styled.h2`
  font-size: 1.15rem;
  margin: 10px 0;
  color: ${(props) => props.color || 'black'};
`
const StyledHeading3 = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  color: ${(props) => props.color || 'black'};
`

const StyledParagraph = styled.p`
  font-size: 1rem;
  margin: 20px 5px;
  padding: 0;
  color: ${(props) => props.color || 'black'};
`

const StyledSpan = styled.span`
  color: ${(props) => props.color || 'black'};
`

export const Heading1 = (props) => {
  return <StyledHeading1 color={props.color}>{props.children}</StyledHeading1>
}

export const Heading2 = (props) => {
  return <StyledHeading2 color={props.color}>{props.children}</StyledHeading2>
}

export const Heading3 = (props) => {
  return <StyledHeading3 color={props.color}>{props.children}</StyledHeading3>
}

export const Paragraph = (props) => {
  return <StyledParagraph color={props.color}>{props.children}</StyledParagraph>
}

export const Span = (props) => {
  return <StyledSpan color={props.color}>{props.children}</StyledSpan>
}
