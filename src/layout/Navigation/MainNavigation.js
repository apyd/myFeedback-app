import { useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/breakpoints'

import { Link } from 'react-router-dom'
import { Heading1 } from '../../components/UI/Text'
import MenuIcon from './BurgerIcon'

const StyledNav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 400;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

const StyledNavList = styled.ul`
  display: ${(props) => (props.collapsed ? 'none' : 'flex')};
  flex-direction: column;
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: white;
  box-shadow: ${(props) =>
    props.collapsed ? 'none' : 'rgba(0, 0, 0, 0.10) 0px 8px 10px'};
  @media ${breakpoints.laptop} {
    display: flex;
    flex-direction: row;
    width: unset;
    position: static;
    box-shadow: none;
  }
`

const StyledNavItem = styled.li`
  text-align: center;
`

const StyledNavLink = styled(Link)`
  display: inline-block;
  padding: 20px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: var(--blue);
  }
`

const Logo = () => {
  return <Heading1>MyFeedback</Heading1>
}

const MainNavigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const menuToggleHandler = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <StyledNav>
      <Logo />
      <MenuIcon collapsed={isCollapsed} collapseHandler={menuToggleHandler} />
      <StyledNavList collapsed={isCollapsed}>
        <StyledNavItem>
          <StyledNavLink onClick={() => setIsCollapsed(true)} to="/products">
            Products
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink onClick={() => setIsCollapsed(true)} to="/roadmap">
            Roadmap
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink onClick={() => setIsCollapsed(true)} to="/preferences">
            Preferences
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink onClick={() => setIsCollapsed(true)} to="/">
            Logout
          </StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledNav>
  )
}

export default MainNavigation
