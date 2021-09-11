import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid var(--blue);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin: 1em 0;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  line-height: 1.1;
  background-color: white;
`

const StyledOption = styled.option`
  font-family: inherit;
`

const Select = ({ options, onChange }) => {
  const selectOptions = options.map((item) => (
    <StyledOption value={item.value}>{item.label}</StyledOption>
  ))

  return (
    <StyledSelect options={options} onChange={onChange}>
      {selectOptions}
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
