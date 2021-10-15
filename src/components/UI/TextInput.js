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

const TextInput = ({ id, name, type, label }) => {
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
        {label}
      </Label>
    </InputWrapper>
  )
}

TextInput.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

TextInput.defaultProps = {
  id: 0,
  name: 'name',
  type: 'text',
  label: 'label',
}

export default TextInput
