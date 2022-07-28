import React from 'react'
import './Cart.css'

//images
import thumb1 from '../../Media/image-product-1-thumbnail.jpg'

//icons
import deleteIcon from '../../Media/icon-delete.svg'

const Cart = () => {
  return (
    <div className='cart'>
        <div className='cart-title'>
            <span>Cart</span>
        </div>
        {/* if theres any item */}
        {/* <div className='cart-items'>
            <img src={thumb1} alt='item' id='cart-img'/>

            <div className='items-info'>
                <div className='item-title'>
                    <span id='items-info-title'>Fall Limited Edition Sneakers</span>
                </div>

                <span id='items-info-price'>$125.00 x</span>
                <span id='quantity'> 3</span>
                <span id='total'> $375.00</span>

            </div>


            <div className='delete-div'>
                <img src={deleteIcon} id='delete'/>
            </div>
        </div>

        <div className='checkout'>
            <button id='checkout-btn'>
                Checkout
            </button>
        </div> */}

        {/* if theres no item */}
        <div className='no-items'>
            <span>Your cart is empty.</span>
        </div>


        
    </div>
  )
}

export default Cart