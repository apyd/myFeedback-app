import styled from 'styled-components'
import { Button } from '../components/UI/Button'

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -30px;
  left: -20px;
  width: 100vw;
  padding: 10px 20px;
  background-color: var(--blue);
  color: white;
  font-weight: bold;
`

const Feedbacks = () => {
  return (
    <>
      <ActionsWrapper>
        <p>6 suggestions</p>
        <Button>+ Add feedback</Button>
      </ActionsWrapper>
    </>
  )
}

export default Feedbacks
