import { useState } from 'react'
import styled from 'styled-components'
import { Input, Label } from '../Forms/Forms'

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 20px auto;
`

const TextInput = (props) => {
  const [isTouched, setIsTouched] = useState(false)

  return (
    <InputWrapper>
      <Input
        isDirty={isTouched}
        onBlur={() => setIsTouched(true)}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
      />
      <Label isDirty={isTouched} htmlFor={props.id}>
        {props.label}
      </Label>
    </InputWrapper>
  )
}

export default TextInput
