import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { string, node } from 'prop-types'

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0 5px;
  padding-bottom: 2px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
  font-size: 1rem;
  font-family: inherit;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  background-color: transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }
`

const PageLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}

PageLink.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
}

PageLink.defaultProps = {
  to: '/',
  children: null,
}

export default PageLink
