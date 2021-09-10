import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0 5px;
  padding-bottom: 2px;
  border: none;
  border-bottom: 1px solid var(--light-grey);
  font-size: 1rem;
  font-family: inherit;
  text-decoration: none;
  color: var(--blue);
  background-color: transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid var(--grey);
  }
`

const PageLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}

PageLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

PageLink.defaultProps = {
  to: '/',
  children: null,
}

export default PageLink
