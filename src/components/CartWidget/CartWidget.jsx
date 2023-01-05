import React from 'react';
import logo from '../../assets/cartlogo.png';
import "./CartWidget.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/CartProvider';

const CartWidget = () => {

    const { cart } = useContext(cartContext);

    const cantProducts = () => {
        return cart.reduce((acum, product) => acum + product.quantity, 0);
    };

    return (
        <div className='menu_navbar_logo'>

            <Link to={"/cart"}>
                <img className="menu_navbar_img" src={logo} alt="Cart Widget" />
                <div className="contador"> {cart.length > 0 && cantProducts()} </div>
            </Link>
            
        </div>
    );
}

export default CartWidget;
