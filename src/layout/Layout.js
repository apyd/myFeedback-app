import MainNavigation from './Navigation/MainNavigation'

import styled from 'styled-components'
import { breakpoints } from '../utils/breakpoints'

const PageLayout = styled.div`
  font-size: 12px;
  @media ${breakpoints.tablet} {
    font-size: 14px;
  }
  @media ${breakpoints.laptop} {
    font-size: 16px;
  }
  @media ${breakpoints.desktop} {
    max-width: 1920px;
    margin: 0 auto;
  }
`
const BodyLayout = styled.div`
  margin-top: 30px;
  z-index: 200;
`

const Layout = (props) => {
  return (
    <PageLayout>
      <MainNavigation />
      <BodyLayout>{props.children}</BodyLayout>
    </PageLayout>
  )
}

export default Layout
