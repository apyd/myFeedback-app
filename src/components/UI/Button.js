import styled from 'styled-components'
import propTypes from 'prop-types'

const StyledButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.8em 2em;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  font-weight: bold;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

const Button = ({ color, bgColor, onClick, children, type }) => {
  return (
    <StyledButton type={type} color={color} bgColor={bgColor} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button

Button.propTypes = {
  color: propTypes.string,
  bgColor: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.node,
  type: propTypes.string,
}

Button.defaultProps = {
  color: 'black',
  bgColor: 'white',
  onClick: () => {},
  children: null,
  type: 'button',
}
