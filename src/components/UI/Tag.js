import styled from 'styled-components'
import { number, string, func } from 'prop-types'

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
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  background-color: ${(props) =>
    props.checked ? props.theme.primary : props.theme.transparent};
  color: ${(props) =>
    props.checked ? props.theme.textWhite : props.theme.textDark};
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
  id: number.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  label: string.isRequired,
  select: string.isRequired,
  onChange: func.isRequired,
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
