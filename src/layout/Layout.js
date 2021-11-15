import MainNavigation from './Navigation/MainNavigation'

import styled from 'styled-components'
import { breakpoints } from '../utils/breakpoints'

const PageLayout = styled.div`
  /* font-size: 22px; */
  /* @media ${breakpoints.tablet} {
    font-size: 14px;
  }
  @media ${breakpoints.laptop} {
    font-size: 16px;
  }
  @media ${breakpoints.desktop} {
    max-width: 1920px;
    margin: 0 auto;
  } */
`
const BodyLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 0 20px;
  z-index: 200;
  max-width: 1024px;
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
