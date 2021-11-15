import { useState } from 'react'

const useModal = () => {
  const [isOpened, setIsOpened] = useState(false)

  const openModalHandler = () => {
    setIsOpened(true)
  }
  const closeModalHandler = () => {
    setIsOpened(false)
  }

  return [isOpened, openModalHandler, closeModalHandler]
}

export default useModal
