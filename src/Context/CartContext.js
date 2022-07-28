import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [isEmpty, setIsEmpty] = useState(false)
    const [cartQuantity, setCartQuantity] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [finalQuantity, setFinalQuantity] = useState(0)

    const provider = {
      empty: [isEmpty, setIsEmpty], 
      cartQuantity: [cartQuantity, setCartQuantity],
      isOpen: [isOpen, setIsOpen],
      finalQuantity: [finalQuantity, setFinalQuantity]
    }

  return (
    <CartContext.Provider value={provider}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider