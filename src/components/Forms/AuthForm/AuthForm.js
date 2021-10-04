import GoogleImg from '../../../assets/google-logo.svg'
import Button from '../../UI/Button'
import PageLink from '../../UI/PageLink'
import { FormHeader, FormBody, FormFooter } from '../Forms'
import { Heading1, Heading2, Paragraph, Span } from '../../UI/Text'
import Image from '../../UI/Image'

import styled from 'styled-components'

import authViews from './authViews'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`

const AuthForm = () => {
  const currentAuthView = authViews[window.location.pathname.substring(1)]

  return (
    <FormWrapper>
      <FormHeader>
        <Heading1>
          Welcome to <Span color="var(--blue)">MyFeedback</Span>
        </Heading1>
        <Heading2>{currentAuthView.header}</Heading2>
      </FormHeader>
      <FormBody>{currentAuthView.form}</FormBody>
      <FormFooter>
        <Button bgColor="white" color="var(--blue)">
          <Image width="30px" src={GoogleImg} alt="Google logo" />
          Sign in with Google
        </Button>
        <LinkWrapper>
          <Paragraph>{currentAuthView.switchText}</Paragraph>
          <PageLink to={currentAuthView.switchLinkPath}>
            {currentAuthView.switchLinkText}
          </PageLink>
        </LinkWrapper>
      </FormFooter>
    </FormWrapper>
  )
}

export default AuthForm
