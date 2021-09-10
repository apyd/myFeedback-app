import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid var(--blue);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin: 1em 0;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: white;
`

const Select = ({ options, onChange }) => {
  const items = options.map((item) => (
    <option value={item.value}>{item.label}</option>
  ))

  return (
    <StyledSelect options={options} onChange={onChange}>
      {items}
    </StyledSelect>
  )
}

Select.propTypes = {
  options: PropTypes.objectOf({}),
  onChange: PropTypes.func,
}

Select.defaultProps = {
  options: { value: 'Default option', label: 'Default option' },
  onChange: () => {},
}

export default Select
