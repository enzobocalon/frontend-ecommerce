import React, {useContext} from 'react'
import '../Cart/Cart.css'

import thumb1 from '../../Media/image-product-1-thumbnail.jpg'
import deleteIcon from '../../Media/icon-delete.svg'
import { CartContext } from '../../Context/CartContext'

const Full = () => {

    const {finalQuantity} = useContext(CartContext)


    const [quantity, setQuantity] = finalQuantity;


  return (
    <>
        <div className='cart-items'>
            <img src={thumb1} alt='item' id='cart-img'/>

            <div className='items-info'>
                <div className='item-title'>
                    <span id='items-info-title'>Fall Limited Edition Sneakers</span>
                </div>

                <span id='items-info-price'>$125.00 x</span>
                <span id='quantity'> {quantity} </span>
                <span id='total'>{`$${quantity * 125}.00`}</span>

            </div>


            <div className='delete-div'>
                <img src={deleteIcon} id='delete' onClick = {() => {setQuantity(prev => prev - 1)}}/>
            </div>
        </div>

        <div className='checkout'>
            <button id='checkout-btn'>
                Checkout
            </button>
        </div> 
    </>
  )
}

export default Full