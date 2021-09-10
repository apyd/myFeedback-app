import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeading1 = styled.h1`
  font-size: 1.3rem;
  margin: 10px 0;
  color: ${(props) => props.color};
`
const StyledHeading2 = styled.h2`
  font-size: 1.15rem;
  margin: 10px 0;
  color: ${(props) => props.color};
`
const StyledHeading3 = styled.h3`
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: ${(props) => props.color};
`

const StyledParagraph = styled.p`
  font-size: 1rem;
  margin: 20px 0px;
  padding: 0;
  color: ${(props) => props.color};
`

const StyledSpan = styled.span`
  color: ${(props) => props.color};
`

export const Heading1 = ({ color, children }) => {
  return <StyledHeading1 color={color}>{children}</StyledHeading1>
}

export const Heading2 = ({ color, children }) => {
  return <StyledHeading2 color={color}>{children}</StyledHeading2>
}

export const Heading3 = ({ color, children }) => {
  return <StyledHeading3 color={color}>{children}</StyledHeading3>
}

export const Paragraph = ({ color, children }) => {
  return <StyledParagraph color={color}>{children}</StyledParagraph>
}

export const Span = ({ color, children }) => {
  return <StyledSpan color={color}>{children}</StyledSpan>
}

Heading1.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
}

Heading2.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
}

Heading3.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
}

Paragraph.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
}

Span.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
}

Heading1.defaultProps = {
  color: 'black',
  children: null,
}

Heading2.defaultProps = {
  color: 'black',
  children: null,
}

Heading3.defaultProps = {
  color: 'black',
  children: null,
}

Paragraph.defaultProps = {
  color: 'black',
  children: null,
}

Span.defaultProps = {
  color: 'black',
  children: null,
}
