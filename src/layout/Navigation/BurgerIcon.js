import { breakpoints } from '../../utils/breakpoints'
import styled from 'styled-components'

const Menu = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 60px;
  z-index: 1000;
  border: none;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  @media ${breakpoints.laptop} {
    display: none;
  }
`

const FirstLine = styled.span`
  height: 5px;
  width: 50%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primary};
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 0.6);
  transform-origin: ${(props) => (!props.collapsed ? 'bottom' : 'center')};
  transform: ${(props) =>
    !props.collapsed
      ? 'rotatez(45deg) translate(4px,0px)'
      : 'rotatez(0deg) translate(0px,0px)'};
`
const SecondLine = styled.span`
  height: 5px;
  width: 100%;
  margin: 7px 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primary};
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 0.6);
  transform-origin: ${(props) => (!props.collapsed ? 'top' : 'center')};
  transform: ${(props) =>
    !props.collapsed ? 'rotatez(-45deg)' : 'rotatez(0deg)'};
`
const ThirdLine = styled.span`
  height: 5px;
  width: 75%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primary};
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 0.6);
  transform-origin: ${(props) => (!props.collapsed ? 'bottom' : 'center')};
  transform: ${(props) =>
    !props.collapsed
      ? 'translate(10px,-8px) rotatez(45deg)'
      : 'translate(0px,0px) rotatez(0deg)'};
`

const MenuIcon = (props) => {
  return (
    <Menu onClick={() => props.collapseHandler()}>
      <FirstLine collapsed={props.collapsed} />
      <SecondLine collapsed={props.collapsed} />
      <ThirdLine collapsed={props.collapsed} />
    </Menu>
  )
}

export default MenuIcon
