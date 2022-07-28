import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [isEmpty, setIsEmpty] = useState(false)
    const [cartQuantity, setCartQuantity] = useState(0)

    const provider = {
      empty: [isEmpty, setIsEmpty], 
      cartQuantity: [cartQuantity, setCartQuantity],
    }

  return (
    <CartContext.Provider value={provider}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider