import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className='menu_navbar_container'>
            <h1 className='menu_title'> NTPC </h1>
            <ul className='menu_lista'>
                <li><a className='menu_item' href="">Productos</a></li>
                <li><a className='menu_item' href="">Ofertas</a></li>
                <li><a className='menu_item' href="">Pedidos</a></li>
                <li><a className='menu_item' href="">Contacto</a></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;
