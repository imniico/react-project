import React from 'react';
import logo from '../../assets/cartlogo.png';
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className='menu_navbar_logo'>
            <img className="menu_navbar_img" src={logo} alt="Cart Widget" />
        </div>
    );
}

export default CartWidget;
