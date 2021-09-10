import GoogleImg from '../../../assets/google-logo.svg'
import Button from '../../UI/Button'
import PageLink from '../../UI/PageLink'
import Login from './Login'
import Register from './Register'
import ResetPassword from './ResetPassword'
import { FormHeader, FormBody, FormFooter } from '../Forms'
import { Heading1, Heading2, Paragraph, Span } from '../../UI/Text'
import styled from 'styled-components'
import { useState } from 'react'
import Image from '../../UI/Image'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
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
          Welcome to <Span color="var(--blue)">MyFeedback</Span>
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
        <Button bgColor="white" color="var(--blue)">
          <Image width="30px" src={GoogleImg} alt="Google logo" />
          Sign in with Google
        </Button>
        <RegisterLink>
          <Paragraph>
            {authView === authMode.register
              ? 'Already have account?'
              : 'Still without account?'}
          </Paragraph>
          <PageLink
            onClick={() =>
              changeAuthViewHandler(
                authView === authMode.register
                  ? authMode.login
                  : authMode.register
              )
            }
          >
            {authView === authMode.register ? 'Log in' : 'Create one'}
          </PageLink>
        </RegisterLink>
      </FormFooter>
    </FormWrapper>
  )
}

export default AuthForm
