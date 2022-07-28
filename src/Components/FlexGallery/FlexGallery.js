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
            <svg className='close-modal' width="14" height="15" xmlns="http://www.w3.org/2000/svg" onClick={() => {setIsModalOpen(false)}}><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFFFF" fill-rule="evenodd"></path></svg>
            </div>

            <div className='modal-row-2'>
            <svg id='previous-modal' onClick={prevImage} width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"></path></svg>
                <img src={selectedImage === 1 ? image1 : 
                selectedImage === 2 ? image2 :
                selectedImage === 3 ? image3 :
                selectedImage === 4 ? image4 : setSelectedImage(1)} alt='product' id='product-modal'/>
                <svg id='next-modal' onClick={nextImage} width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
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