import { useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/breakpoints'

import { NavLink } from 'react-router-dom'
import { Heading1 } from '../../components/UI/Text'
import MenuIcon from './BurgerIcon'
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle'
import Wrapper from '../../helpers/Wrapper'

const StyledNav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.panel};
  z-index: 400;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  @media ${breakpoints.laptop} {
    max-width: 1024px;
    margin: 0 auto;
    border-radius: 5px;
  }
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
  border-radius: 5px;
  list-style: none;
  background-color: ${(props) => props.theme.panel};
  box-shadow: ${(props) =>
    props.collapsed ? props.theme.none : props.theme.boxShadow};
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

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 20px;
  color: ${(props) => props.theme.textDark};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.textDark};
  }
  &.${(props) => props.activeClassName} {
    color: ${(props) => props.theme.secondary};
  }
`

const Logo = () => {
  return <Heading1>MyFeedback</Heading1>
}

const MainNavigation = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const menuToggleHandler = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <StyledNav>
      <Wrapper direction="row" align="center">
        <Logo />
        <ThemeToggle
          activeTheme={props.activeTheme}
          toggleTheme={props.toggleTheme}
        />
      </Wrapper>

      <MenuIcon collapsed={isCollapsed} collapseHandler={menuToggleHandler} />
      <StyledNavList collapsed={isCollapsed}>
        <StyledNavItem>
          <StyledNavLink
            activeClassName="active"
            onClick={() => setIsCollapsed(true)}
            to="/products"
          >
            Products
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink
            activeClassName="active"
            onClick={() => setIsCollapsed(true)}
            to="/roadmap"
          >
            Roadmap
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink
            activeClassName="active"
            onClick={() => setIsCollapsed(true)}
            to="/preferences"
          >
            Preferences
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink
            activeClassName="active"
            onClick={() => setIsCollapsed(true)}
            to="/"
            exact
          >
            Logout
          </StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledNav>
  )
}

export default MainNavigation
