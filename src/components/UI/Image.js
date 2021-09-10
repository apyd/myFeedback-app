import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImg = styled.img`
  display: block;
  margin: 0 0.5rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

const Image = ({ height, width, src, alt }) => {
  return <StyledImg height={height} width={width} src={src} alt={alt} />
}

Image.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}

Image.defaultProps = {
  height: 'auto',
  width: 'auto',
  src: null,
  alt: 'Alternative text',
}

export default Image
