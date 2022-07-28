import React, {useContext, useState} from 'react'
import './FlexGallery.css'

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

import close from '../../Media/icon-close.svg'
import next from '../../Media/icon-next.svg'
import previous from '../../Media/icon-previous.svg'
import { ModalContext } from '../../Context/ModalContext'

const FlexGallery = ({selectedImage, setSelectedImage}) => {
    const {isModalOpen, setIsModalOpen} = useContext(ModalContext)

    const prevImage = () => {
        if(selectedImage > 1){
            setSelectedImage(prev => prev - 1)
        } else{
            selectedImage(1)
        }
    }

    const nextImage = () => {
        if(selectedImage < 4){
            setSelectedImage(prev => prev + 1)
        } else{
            selectedImage(4)
        }
    }

  return (
    <div className={`modal ${isModalOpen ? '' : 'hidden'}`}>
        <div className='modal-col'>
            <div className='modal-row-1'>
                    <img src={close} alt='close' className='close-modal' onClick={() => {setIsModalOpen(false)}}/>
            </div>

            <div className='modal-row-2'>
                <img src={previous} alt='previous' id='previous-modal' onClick={prevImage}/>
                <img src={selectedImage === 1 ? image1 : 
                selectedImage === 2 ? image2 :
                selectedImage === 3 ? image3 :
                selectedImage === 4 ? image4 : setSelectedImage(1)} alt='product' id='product-modal'/>
                <img src={next} alt='next' id='next-modal' onClick={nextImage}/>
            </div>

            <div className='modal-row-3'>
                    <img src={thumb1} alt='product image' className={`thumb-image-modal ${selectedImage === 1 ? 'active' : ''}`} onClick={() => {setSelectedImage(1)}}/>
                    <img src={thumb2} alt='product image' className={`thumb-image-modal ${selectedImage === 2 ? 'active' : ''}`} onClick={() => {setSelectedImage(2)}}/>
                    <img src={thumb3} alt='product image' className={`thumb-image-modal ${selectedImage === 3 ? 'active' : ''}`} onClick={() => {setSelectedImage(3)}}/>
                    <img src={thumb4} alt='product image' className={`thumb-image-modal ${selectedImage === 4 ? 'active' : ''}`} onClick={() => {setSelectedImage(4)}}/>
            </div>
        </div>
    </div>
  )
}

export default FlexGallery