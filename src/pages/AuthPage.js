import AuthForm from '../components/Forms/AuthForm/AuthForm'
import authImg from '../assets/auth-image.jpeg'
import styled from 'styled-components'
import { breakpoints } from '../utils/breakpoints'

const AuthWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
`

const Img = styled.img`
  display: none;
  max-height: 600px;
  @media ${breakpoints.laptop} {
    display: block;
  }
`

const Auth = () => {
  return (
    <AuthWrapper>
      <Img src={authImg} alt="Authentication" />
      <AuthForm />
    </AuthWrapper>
  )
}

export default Auth
