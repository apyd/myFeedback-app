import { useState } from 'react'
import styled from 'styled-components'
import { Input, Label } from '../Forms/Forms'
import PropTypes from 'prop-types'

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 20px auto;
`

const TextInput = ({ id, name, type, labelText }) => {
  const [isTouched, setIsTouched] = useState(false)

  return (
    <InputWrapper>
      <Input
        isDirty={isTouched}
        onBlur={() => setIsTouched(true)}
        id={id}
        name={name}
        type={type}
      />
      <Label isDirty={isTouched} htmlFor={id}>
        {labelText}
      </Label>
    </InputWrapper>
  )
}

TextInput.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  labelText: PropTypes.string,
}

TextInput.defaultProps = {
  id: 0,
  name: 'name',
  type: 'text',
  labelText: 'label',
}

export default TextInput
