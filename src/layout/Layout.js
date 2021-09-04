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
`

const Layout = (props) => {
  return (
    <PageLayout>
      <MainNavigation />
      {props.children}
    </PageLayout>
  )
}

export default Layout
