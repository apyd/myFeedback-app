import ProductsList from '../components/Products/ProductsList'
import { Heading3 } from '../components/UI/Text'
import styled from 'styled-components'
import { breakpoints } from '../utils/breakpoints'

const ProductListWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 20px;
  @media ${breakpoints.laptop} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Products = () => {
  return (
    <>
      <Heading3>Select product to add your feedback</Heading3>
      <ProductListWrapper>
        <ProductsList />
      </ProductListWrapper>
    </>
  )
}

export default Products
