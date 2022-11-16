import React from 'react';
import logo from '../../assets/cartlogo.png';
import "./CartWidget.css";
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className='menu_navbar_logo'>

            <Link to={"/cart"}>
                <img className="menu_navbar_img" src={logo} alt="Cart Widget" />
            </Link>
            
        </div>
    );
}

export default CartWidget;
