import { useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/breakpoints'

import { Link } from 'react-router-dom'
import { Heading1 } from '../../components/UI/Text'
import MenuIcon from './BurgerIcon'

const StyledNav = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`

const StyledNavList = styled.ul`
  display: ${(props) => (props.collapsed ? 'none' : 'flex')};
  flex-direction: column;
  position: absolute;
  top: 65px;
  left: 0;
  width: 100vw;
  z-index: 1000;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: white;
  @media ${breakpoints.laptop} {
    display: flex;
    flex-direction: row;
    width: unset;
    position: static;
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
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/roadmap">Roadmap</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/preferences">Preferences</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/">Logout</StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledNav>
  )
}

export default MainNavigation
