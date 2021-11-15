import styled from 'styled-components'
import { objectOf, func } from 'prop-types'

const StyledSelect = styled.select`
  /* appearance: none; */
  background: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.textDark};
  /* border-radius: 0.25em; */
  /* padding: 0.25em 0.5em; */
  margin: 1em 0;
  padding-bottom: 5px;
  font-size: inherit;
  font-family: inherit;
  color: ${(props) => props.theme.textDark};
  cursor: pointer;
  line-height: 1.1;
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
  options: objectOf({}).isRequired,
  onChange: func.isRequired,
}

Select.defaultProps = {
  options: { value: 'Default option', label: 'Default option' },
  onChange: () => {},
}

export default Select
