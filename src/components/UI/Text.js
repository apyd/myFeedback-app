import styled from 'styled-components'
import { string, node } from 'prop-types'

const StyledHeading1 = styled.h1`
  font-size: 1.4rem;
  margin: 10px 0;
  color: ${(props) => props.color || props.theme.textDark};
`
const StyledHeading2 = styled.h2`
  font-size: 1.05rem;
  margin: 10px 0;
  color: ${(props) => props.color || props.theme.textDark};
`
const StyledHeading3 = styled.h3`
  font-size: 0.95rem;
  margin: 0;
  padding: 0;
  color: ${(props) => props.color || props.theme.textDark};
`

const StyledParagraph = styled.p`
  font-size: 1rem;
  margin: 20px 0px;
  padding: 0;
  color: ${(props) => props.color || props.theme.textLight};
`

const StyledSpan = styled.span`
  color: ${(props) => props.color || props.theme.textDark};
  font-weight: ${(props) => props.fontWeight};
`

export const Heading1 = ({ textColor, children }) => {
  return <StyledHeading1 color={textColor}>{children}</StyledHeading1>
}

export const Heading2 = ({ textColor, children }) => {
  return <StyledHeading2 color={textColor}>{children}</StyledHeading2>
}

export const Heading3 = ({ textColor, children }) => {
  return <StyledHeading3 color={textColor}>{children}</StyledHeading3>
}

export const Paragraph = ({ textColor, children }) => {
  return <StyledParagraph color={textColor}>{children}</StyledParagraph>
}

export const Span = ({ textColor, children, fontWeight }) => {
  return (
    <StyledSpan color={textColor} fontWeight={fontWeight}>
      {children}
    </StyledSpan>
  )
}

Heading1.propTypes = {
  textColor: string,
  children: node.isRequired,
}

Heading2.propTypes = {
  textColor: string,
  children: node.isRequired,
}

Heading3.propTypes = {
  textColor: string,
  children: node.isRequired,
}

Paragraph.propTypes = {
  textColor: string,
  children: node.isRequired,
}

Span.propTypes = {
  textColor: string,
  children: node.isRequired,
  fontWeight: string,
}

Heading1.defaultProps = {
  children: null,
}

Heading2.defaultProps = {
  children: null,
}

Heading3.defaultProps = {
  children: null,
}

Paragraph.defaultProps = {
  children: null,
}

Span.defaultProps = {
  children: null,
  fontWeight: 'normal',
}
