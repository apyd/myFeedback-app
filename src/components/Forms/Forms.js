import styled from 'styled-components'

export const Form = styled.form`
  /* padding: 20px 50px; */
  display: flex;
  flex-direction: column;
  flex: 2;
`

export const Input = styled.input`
  font-size: 1rem;
  color: ${(props) => (props.isDirty ? 'red' : 'var(--grey)')};
  background-color: inherit;
  border: none;
  border-bottom: 1px solid ${(props) => (props.isDirty ? 'red' : 'var(--blue)')};
  transition: 0.2s ease all;
  width: 100%;
  padding-bottom: 5px;
`
export const Label = styled.label`
  font-size: 1rem;
  position: absolute;
  top: ${(props) => (props.isDirty ? '-20px' : '-0px')};
  font-size: ${(props) => (props.isDirty ? '14px' : '16px')};
  color: ${(props) => (props.isDirty ? 'red' : 'var(--blue)')};
  left: 0;
  transition: 0.2s ease all;
  ${Input}:focus ~ & {
    font-size: 14px;
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
  margin-top: 20px;
  background-color: var(--very-light-grey);
  flex: 1;
`

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
