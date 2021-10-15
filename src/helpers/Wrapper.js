import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  background-color: ${(props) => props.theme.panel};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  box-shadow: ${(props) => props.theme.shadow};
  border: ${(props) => props.theme.border};
  border-radius: 5px;
  cursor: pointer;
  width: ${(props) => props.width};
`

const Wrapper = ({
  direction,
  align,
  justify,
  padding,
  margin,
  children,
  width,
}) => {
  return (
    <StyledWrapper
      direction={direction}
      padding={padding}
      margin={margin}
      align={align}
      justify={justify}
      width={width}
    >
      {children}
    </StyledWrapper>
  )
}

Wrapper.propTypes = {
  padding: PropTypes.string,
  margin: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  direction: PropTypes.string,
  width: PropTypes.string,
}

Wrapper.defaultProps = {
  padding: '0px',
  margin: '0px',
  align: 'stretch',
  justify: 'flex-start',
  direction: 'column',
  width: 'unset',
}

export default Wrapper
