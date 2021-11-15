import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: flex-start;
`

export const Input = styled.input`
  font-size: inherit;
  color: ${(props) =>
    props.isDirty ? props.theme.error : props.theme.textDark};
  background-color: inherit;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.isDirty ? props.theme.error : props.theme.textDark)};
  transition: 0.2s ease all;
  width: 100%;
  padding-bottom: 5px;
  padding-left: 2px;
`
export const Label = styled.label`
  font-size: inherit;
  position: absolute;
  top: ${(props) => (props.isDirty ? '-20px' : '-0px')};
  right: 0px;
  font-size: ${(props) => (props.isDirty ? '0.8rem' : '1rem')};
  color: ${(props) =>
    props.isDirty ? props.theme.error : props.theme.textDark};
  left: 2px;
  transition: 0.2s ease all;
  ${Input}:focus ~ & {
    font-size: 0.8rem;
    top: -20px;
  }
`

export const FormHeader = styled.header`
  padding: 15px;
`

export const FormBody = styled.div`
  padding: 15px;
`

export const FormFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boxShadow};
  flex: 1;
`

export const FormActions = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'space-between'};
  align-items: center;
  margin-top: 20px;
  width: 100%;
`
