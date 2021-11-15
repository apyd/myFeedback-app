import ProductsList from '../components/Products/ProductsList'
import { Paragraph } from '../components/UI/Text'
import styled from 'styled-components'
import { breakpoints } from '../utils/breakpoints'
import Button from '../components/UI/Button'
import ProductForm from '../components/Forms/ProductForm.js/ProductForm'
import useModal from '../hooks/useModal'

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  font-weight: bold;
  @media ${breakpoints.laptop} {
    position: static;
    border-radius: 5px;
  }
`

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
  const [isOpened, openModal, closeModal] = useModal()

  return (
    <>
      <ProductForm isOpened={isOpened} closeModal={closeModal} />
      <ActionsWrapper>
        <Paragraph>Select product</Paragraph>
        <Button onClick={openModal}>+ New product</Button>
      </ActionsWrapper>
      <ProductListWrapper>
        <ProductsList />
      </ProductListWrapper>
    </>
  )
}

export default Products
