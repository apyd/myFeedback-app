import styled from 'styled-components'
import PropTypes from 'prop-types'

const TagWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const HiddenRadio = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.checked ? 'var(--blue)' : 'var(--light-grey)'};
  color: ${(props) => (props.checked ? 'white' : 'black')};
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`

const Tag = ({ id, name, value, label, select, onChange }) => {
  return (
    <>
      <TagWrapper>
        <HiddenRadio
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={select === value}
          onChange={(event) => onChange(event)}
        />
        <StyledLabel for={id} checked={select === value}>
          {label}
        </StyledLabel>
      </TagWrapper>
    </>
  )
}

Tag.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  select: PropTypes.string,
  onChange: PropTypes.func,
}

Tag.defaultProps = {
  id: null,
  name: '',
  value: '',
  label: '',
  select: '',
  onChange: () => {},
}

export default Tag
