import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

const ModalProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const providerValue = {
        isModalOpen, setIsModalOpen
    }

  return (
    <ModalContext.Provider value={providerValue}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider