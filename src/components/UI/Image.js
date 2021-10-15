import styled from 'styled-components'
import { string } from 'prop-types'

const StyledImg = styled.img`
  display: block;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

const Image = ({ height, width, margin, src, alt }) => {
  return (
    <StyledImg
      height={height}
      width={width}
      margin={margin}
      src={src}
      alt={alt}
    />
  )
}

Image.propTypes = {
  height: string,
  width: string,
  margin: string,
  src: string.isRequired,
  alt: string.isRequired,
}

Image.defaultProps = {
  height: 'auto',
  width: 'auto',
  margin: '0 0.5rem',
  src: null,
  alt: 'Alternative text',
}

export default Image
