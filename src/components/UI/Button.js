import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1rem;
  font-family: inherit;
  font-weight: bold;
  padding: 0.8em 2em;
  border: none;
  border-radius: 2px;
  color: white;
  background-color: var(--blue);
  &:hover {
    cursor: pointer;
  }
`

const StyledSSOButton = styled.button`
  display: flex;
  position: relative;
  align-items: stretch;
  justify-content: stretch;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.8em 1em 0.8em 70px;
  border: none;
  border-radius: 2px;
  background-color: var(--blue);
  color: white;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &:before {
    position: absolute;
    content: '';
    background: url(${(props) => props.img}) center center no-repeat;
    width: 50px;
    background-color: white;
    height: 100%;
    left: 0%;
    top: 0%;
  }
`

const Link = styled.button`
  font-size: 1rem;
  font-family: inherit;
  padding: 0;
  margin: 0;
  padding-bottom: 2px;
  border: none;
  border-bottom: 1px solid var(--light-grey);
  color: var(--blue);
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`

const onClickHandler = (e, props) => {
  e.preventDefault()
  props.onClick()
}

export const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
}

export const SSOButton = (props) => {
  return <StyledSSOButton img={props.img}>{props.children}</StyledSSOButton>
}

export const ButtonLink = (props) => {
  return (
    <Link onClick={(event) => onClickHandler(event, props)}>
      {props.children}
    </Link>
  )
}
