import PropTypes from 'prop-types'
import Button from '../UI/Button'
import { Span } from './Text'
import { ReactComponent as UpArrow } from '../../assets/upArrow.svg'
import { useTheme } from 'styled-components'

const VoteCounter = ({ value, disabled }) => {
  const theme = useTheme()
  const { primary } = theme

  return (
    <Button variant="tertiary" disabled={disabled} padding="0" shadow="none">
      <UpArrow width="36px" fill={primary} alt="votes number" />
      <Span fontWeight="bold">{value}</Span>
    </Button>
  )
}

VoteCounter.propTypes = {
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
}

VoteCounter.defaultProps = {
  value: 0,
  disabled: false,
}

export default VoteCounter
