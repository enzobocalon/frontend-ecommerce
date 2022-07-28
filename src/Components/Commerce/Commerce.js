import React, { useContext, useState } from 'react'
import './Commerce.css'

// full images
import image1 from '../../Media/image-product-1.jpg'
import image2 from '../../Media/image-product-2.jpg'
import image3 from '../../Media/image-product-3.jpg'
import image4 from '../../Media/image-product-4.jpg'

// thumbs

import thumb1 from '../../Media/image-product-1-thumbnail.jpg'
import thumb2 from '../../Media/image-product-2-thumbnail.jpg'
import thumb3 from '../../Media/image-product-3-thumbnail.jpg'
import thumb4 from '../../Media/image-product-4-thumbnail.jpg'

//icons

import cart from '../../Media/icon-cart.svg'
import minus from '../../Media/icon-minus.svg'
import plus from '../../Media/icon-plus.svg'
import next from '../../Media/icon-next.svg'
import previous from '../../Media/icon-previous.svg'

// Components and Context imports

import FlexGallery from '../FlexGallery/FlexGallery'
import { ModalContext } from '../../Context/ModalContext'
import { CartContext } from '../../Context/CartContext'
import Cart from '../Cart/Cart'

const Commerce = () => {
    const [currentImage, setCurrentImage] = useState(1)
    const {isModalOpen, setIsModalOpen} = useContext(ModalContext)
    const {cartQuantity} = useContext(CartContext)
    const {finalQuantity} = useContext(CartContext)
    
    const [quantity, setQuantity] = cartQuantity
    const [sendToCart, setSendToCart] = finalQuantity

    const renderModal = () => {
        if (!isModalOpen){
            setIsModalOpen(prev => !prev)        
        } else{
            setIsModalOpen(prev => !prev)
        }
    }
    
  return (
    <main>
        <div className='gallery'>
            <div className='current-image'>
                <img src={previous} alt='previous' id='previous-mobile' className='mobile-btn' onClick={() => {setCurrentImage(prev => prev-1)}}/>

                <img src={currentImage === 1 ? image1 : 
                currentImage === 2 ? image2 :
                currentImage === 3 ? image3 :
                currentImage === 4 ? image4 : setCurrentImage(1)} alt='product image'id='current-image' onClick={renderModal}/>

                <img src={next} alt='next' id='next-mobile' className='mobile-btn' onClick={() => {setCurrentImage(prev => prev+1)}}/>
            </div>
            <div className='all-images'>
                <img src={thumb1} alt='product image' className={`thumb-image ${currentImage === 1 ? 'active' : ''}`} onClick={() => {setCurrentImage(1)}}/>
                <img src={thumb2} alt='product image' className={`thumb-image ${currentImage === 2 ? 'active' : ''}`} onClick={() => {setCurrentImage(2)}}/>
                <img src={thumb3} alt='product image' className={`thumb-image ${currentImage === 3 ? 'active' : ''}`} onClick={() => {setCurrentImage(3)}}/>
                <img src={thumb4} alt='product image' className={`thumb-image ${currentImage === 4 ? 'active' : ''}`} onClick={() => {setCurrentImage(4)}}/>
            </div>
        </div>

        <div className='product-info'>
            <span id='sneaker-company'>SNEAKER COMPANY</span>

            <h1>Fall Limited Edition Sneakers</h1>

            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer solo, they'll withstand everything the weather can offer.</p>

            <div className='price'>
                <div className='price-discount'>
                    <h3>$125.00</h3>
                    <span id='discount'>50%</span>
                </div>
                    <span id='last-price'>$250.00</span>
            </div>

            <div className='qc'>
                    <div className='quantity'>
                        <div className='minus'>
                            <button id='decrease' onClick = {() => {quantity != 0 ? setQuantity(prev => prev - 1) : setQuantity(0)}}>
                                <img src={minus} alt='minus' id='minus'/>
                            </button>
                        </div>
                        <span>{quantity}</span>
                        <div className='plus'>
                            <button id='increase' onClick = {() => {setQuantity(prev => prev + 1)}}>
                                <img src={plus} alt='plus' id='plus'/>
                            </button>
                        </div>
                    </div>
                <button id='add-to-cart' onClick={() => {setSendToCart(quantity)}}>
                    <img src={cart} alt='plus'id='cart-add'/>
                    Add to Cart
                </button>
            </div>
        </div>
        <FlexGallery selectedImage = {currentImage} setSelectedImage = {setCurrentImage}/>
        <Cart />
    </main>
  )
}

export default Commerce