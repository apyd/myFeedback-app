import styled from 'styled-components'
import { number, string, arrayOf, oneOf } from 'prop-types'

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  color: ${(props) => props.theme.textDark};
  background-color: ${(props) => props.theme.panel};
  resize: ${(props) => props.resizable};
  &::placeholder {
    color: ${(props) => props.theme.textDark};
  }
`

const TextArea = ({ rows, placeholder, resizable }) => {
  return (
    <StyledTextArea
      rows={rows}
      placeholder={placeholder}
      resizable={resizable}
    ></StyledTextArea>
  )
}

TextArea.propTypes = {
  rows: number,
  placeholder: string.isRequired,
  resizable: arrayOf(oneOf(['none', 'both', 'horizontal', 'vertical'])),
}

TextArea.defaultProps = {
  rows: 10,
  placeholder: 'Text area placeholder',
  resizable: 'none',
}

export default TextArea
