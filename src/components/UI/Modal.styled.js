import styled from 'styled-components'

export const Background = styled.div`
  display: ${(props) => (props.isOpened ? 'block' : 'none')};
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.background};
  opacity: 0.96;
  z-index: 600;
`

export const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpened ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.panel};
  z-index: 700;
  box-shadow: ${({ theme }) => theme.boxShadow};
`

export const ModalHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ModalContent = styled.div`
  margin-top: 20px;
`
