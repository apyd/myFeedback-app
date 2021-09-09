import styled from 'styled-components'
import { Heading2, Heading3 } from '../UI/Text'

const StyledCard = styled.div`
  height: 150px;
  min-width: 320px;
  max-width: 700px;
  position: relative;
  &:hover {
    cursor: pointer;
  }

  &:before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--grey);
    opacity: 0.6;
    border-radius: 5px;
  }
`

const StyledImg = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`

const StyledHeader = styled.header`
  position: absolute;
  left: 10px;
  bottom: 10px;
`

const ProductCard = (props) => {
  return (
    <StyledCard key={props.key}>
      <StyledImg src={props.backgroundImg} alt="example" />
      <StyledHeader>
        <Heading2 color="white">{props.title}</Heading2>
        <Heading3 color="white">{props.description}</Heading3>
      </StyledHeader>
    </StyledCard>
  )
}

export default ProductCard
