import React, {useContext} from 'react'

import logo from '../../Media/logo.svg'
import avatar from '../../Media/image-avatar.png'
import cart from '../../Media/icon-cart.svg'

import './Header.css'
import { ModalContext } from '../../Context/ModalContext'
import { CartContext } from '../../Context/CartContext'

const Header = () => {
    const {isModalOpen, setIsModalOpen} = useContext(ModalContext)

    const {finalQuantity} = useContext(CartContext)
    const [quantity] = finalQuantity;

    const {isOpen} = useContext(CartContext)
    const [isCartOpen, setIsCartOpen] = isOpen;

  return (
    <header>
        <div className='header-row'>
            <div className='header-col-1'>
                <img src={logo} alt='logo' id='logo'/>
            </div>
            <div className='header-col-2'>
                {/* mobile menu */}

                <ul className='ul-menu'>
                    {/* <li className='li-menu'>
                        <span className='close-mobile-menu'>X</span>
                    </li> */}
                    <li className='li-menu'>
                        <span className='menu-item'>Collections</span>
                    </li>
                    <li className='li-menu'>
                        <span className='menu-item'>Men</span>
                    </li>
                    <li className='li-menu'>
                        <span className='menu-item'>Women</span>
                    </li>
                    <li className='li-menu'>
                        <span className='menu-item'>About</span>
                    </li>
                    <li className='li-menu'>
                        <span className='menu-item'>Contact</span>
                    </li>
                </ul>
            </div>
            <div className='header-col-3'>
                <div className='cp'>
                    <div className='cart-header'>
                        <span className={`notification ${quantity > 0 ? '' : 'hidden'}`}>{quantity}</span>
                        <img src={cart} alt='cart' id='cart' onClick = {() => {isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true)}}/>
                    </div>
                    <img src={avatar} alt='avatar' id='avatar'/>
                </div>
            </div>
        </div>



            <div className={`shadow ${isModalOpen ? '' : 'hidden'}`}></div>

            <div id='border-div'>
                <hr id='border'></hr>
            </div>
    </header>

  )
}

export default Header