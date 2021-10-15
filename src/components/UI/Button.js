import styled from 'styled-components'
import { string, func, node } from 'prop-types'

const StyledButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  padding: ${(props) => props.padding};
  border: ${(props) => props.theme.buttons[props.variant].border};
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  font-weight: bold;
  color: ${(props) => props.theme.buttons[props.variant].textColor};
  margin: ${(props) => props.margin};
  background-color: ${(props) =>
    props.theme.buttons[props.variant].backgroundColor};
  &:hover {
    cursor: pointer;
    box-shadow: ${(props) => props.theme.buttons[props.variant].shadow};
  }
`

const Button = ({ variant, onClick, children, type, padding, margin }) => {
  return (
    <StyledButton
      variant={variant}
      type={type}
      onClick={onClick}
      padding={padding}
      margin={margin}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  variant: string,
  onClick: func.isRequired,
  children: node.isRequired,
  type: string,
  padding: string,
  margin: string,
}

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
  children: null,
  type: 'button',
  padding: '0.8em 2em',
  margin: '0px',
}

export default Button
