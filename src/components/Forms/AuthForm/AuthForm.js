import GoogleImg from '../../../assets/google-logo.svg'
import { SSOButton, ButtonLink } from '../../UI/Button'
import Login from './Login'
import Register from './Register'
import ResetPassword from './ResetPassword'
import { FormHeader, FormBody, FormFooter } from '../Forms'
import { Heading1, Heading2, Paragraph, Span } from '../../UI/Text'
import styled from 'styled-components'
import { useState } from 'react'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const RegisterLink = styled.div`
  display: flex;
  align-items: center;
`

const authMode = {
  login: 'login',
  register: 'register',
  changePassword: 'changePassword',
}

const AuthForm = () => {
  const [authView, setAuthView] = useState(authMode.login)

  const changeAuthViewHandler = (view) => {
    setAuthView(view)
  }

  return (
    <FormWrapper>
      <FormHeader>
        <Heading1>
          Welcome to <Span color="var(--blue)">Feedback app</Span>
        </Heading1>
        <Heading2>
          {authView === authMode.login && 'Sign in'}
          {authView === authMode.register && 'Sign up'}
          {authView === authMode.changePassword && 'Change password'}
        </Heading2>
      </FormHeader>
      <FormBody>
        {authView === authMode.login && (
          <Login
            views={authMode}
            changeView={() => changeAuthViewHandler(authMode.changePassword)}
          />
        )}
        {authView === authMode.register && <Register />}
        {authView === authMode.changePassword && <ResetPassword />}
      </FormBody>
      <FormFooter>
        <SSOButton img={GoogleImg}>Sign in with Google</SSOButton>
        <RegisterLink>
          <Paragraph>
            {authView === authMode.register
              ? 'Already have account?'
              : 'Still without account?'}
          </Paragraph>
          <ButtonLink
            onClick={() =>
              changeAuthViewHandler(
                authView === authMode.register
                  ? authMode.login
                  : authMode.register
              )
            }
          >
            {authView === authMode.register ? 'Log in' : 'Create one'}
          </ButtonLink>
        </RegisterLink>
      </FormFooter>
    </FormWrapper>
  )
}

export default AuthForm
