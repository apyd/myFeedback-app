import AuthForm from '../components/Forms/AuthForm/AuthForm'
import authImg from '../assets/auth-image.jpeg'
import styled from 'styled-components'
import { breakpoints } from '../utils/breakpoints'

const AuthWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: stretch;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 900px;
  max-height: 600px;
`

const ImgWrapper = styled.div`
  display: none;
  @media ${breakpoints.laptop} {
    display: block;
    width: 50%;
  }
`

const Img = styled.img`
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
`

const Auth = (props) => {
  return (
    <AuthWrapper>
      <ImgWrapper>
        <Img src={authImg} alt="Authentication" />
      </ImgWrapper>
      <AuthForm />
    </AuthWrapper>
  )
}

export default Auth
