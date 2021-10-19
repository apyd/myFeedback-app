import Button from '../UI/Button'
import { ReactComponent as HalfMoon } from '../../assets/halfmoon.svg'
import { ReactComponent as Sun } from '../../assets/sun.svg'

const ThemeToggle = ({ activeTheme, toggleTheme }) => {
  return (
    <Button
      margin="0px 0px 0px 15px"
      padding="0"
      variant="tertiary"
      onClick={toggleTheme}
    >
      {activeTheme === 'dark' && <HalfMoon width="32px" height="32px" />}
      {activeTheme !== 'dark' && <Sun width="32px" height="32px" />}
    </Button>
  )
}

export default ThemeToggle
