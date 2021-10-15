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
  margin: 100px 20px 20px 20px;
  @media ${breakpoints.tablet} {
    margin-top: 10px;
  }
  z-index: 200;
`

const Layout = (props) => {
  return (
    <PageLayout>
      <MainNavigation
        activeTheme={props.activeTheme}
        toggleTheme={props.toggleTheme}
      />
      <BodyLayout>{props.children}</BodyLayout>
    </PageLayout>
  )
}

export default Layout
