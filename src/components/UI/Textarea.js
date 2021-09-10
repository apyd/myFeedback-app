import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid var(--blue);
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  resize: ${(props) => props.resizable};
`

const TextArea = ({ bgColor, color, rows, placeholder, resizable }) => {
  return (
    <StyledTextArea
      bgColor={bgColor}
      color={color}
      rows={rows}
      placeholder={placeholder}
      resizable={resizable}
    ></StyledTextArea>
  )
}

TextArea.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  resizable: PropTypes.arrayOf(
    PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical'])
  ),
}

TextArea.defaultProps = {
  bgColor: 'white',
  color: 'black',
  rows: 10,
  placeholder: 'Text area placeholder',
  resizable: 'none',
}

export default TextArea
