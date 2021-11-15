import { useTheme } from 'styled-components'
import {
  Background,
  ModalWrapper,
  ModalHeader,
  ModalContent,
} from './Modal.styled'
import Button from './Button'
import { Heading2, Span } from './Text'
import { ReactComponent as CloseIcon } from '../../assets/close.svg'

const Modal = (props) => {
  const theme = useTheme()
  const { primary } = theme
  return (
    <>
      <Background onClick={props.closeModal} isOpened={props.isOpened} />
      <ModalWrapper isOpened={props.isOpened}>
        <ModalHeader>
          <Heading2>{props.headerText}</Heading2>
          <Button onClick={props.closeModal} variant="tertiary" padding="0">
            <CloseIcon fill={primary} />
          </Button>
        </ModalHeader>
        <Span fontWeight="bold">{props.subHeaderText}</Span>
        <ModalContent>{props.children}</ModalContent>
      </ModalWrapper>
    </>
  )
}

export default Modal
