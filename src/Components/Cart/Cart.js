import React, { useContext, useState } from 'react'
import './Cart.css'

import Full from '../CartBody/Full.js'
import Empty from '../CartBody/Empty.js'

//images

//icons
import { CartContext } from '../../Context/CartContext'

const Cart = () => {
    
    const {finalQuantity} = useContext(CartContext)
    const [quantity, setQuantity] = finalQuantity;

    const {isOpen} = useContext(CartContext)
    const [isCartOpen, setIsCartOpen] = isOpen;


  return (
    <div className={`cart ${isCartOpen ? '' : 'hidden'}`}>
        <div className='cart-title'>
            <span>Cart</span>
        </div>

            {quantity > 0 ? (
                <Full/>
            ) : (
                <Empty />
            )}
    </div>
  )
}

export default Cart