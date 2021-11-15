import { ReactComponent as GoogleImg } from '../../../assets/google-logo.svg'
import Button from '../../UI/Button'
import PageLink from '../../UI/PageLink'
import { FormHeader, FormBody, FormFooter } from '../Forms'
import { Heading1, Heading2, Paragraph, Span } from '../../UI/Text'
import styled, { useTheme } from 'styled-components'

import authViews from './authViews'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${(props) => props.theme.panel};
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`

const AuthForm = () => {
  const currentAuthView = authViews[window.location.pathname.substring(1)]
  const theme = useTheme()
  const { textDark, secondary } = theme

  return (
    <FormWrapper>
      <FormHeader>
        <Heading1 textColor={textDark}>
          Welcome to
          <Span
            textColor={secondary}
            fontWeight="bold"
            fontSize="1.4rem"
            padding="0 5px"
          >
            MyFeedback
          </Span>
        </Heading1>
        <Heading2>{currentAuthView.header}</Heading2>
      </FormHeader>
      <FormBody>{currentAuthView.form}</FormBody>
      <FormFooter>
        <Button variant="primary">
          <GoogleImg width="30px" alt="Google logo" />
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
