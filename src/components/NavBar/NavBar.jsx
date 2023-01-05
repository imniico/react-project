import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {

   

    return (
        <div className='menu_navbar_container'>

            <Link to={"/"}>
                <h1 className='menu_title'> NTPC </h1>
            </Link>

            <ul className='menu_lista'>

                <li>
                    <Link to={"/products"}> <div className='menu_item' href="">Productos</div> </Link>

                    <ul className="submenu_lista">
                        <Link to={"/category/auriculares"}><li className="submenu_item">Auriculares</li></Link>
                        <Link to={"/category/teclados"}><li className="submenu_item">Teclados</li></Link>
                        <Link to={"/category/mouses"}><li className="submenu_item">Mouse</li></Link>
                    </ul>

                </li>

                {/* De momento estas linkean al inicio */}
                <li><Link to={"/ofertas"}> <div className='menu_item' href="">Ofertas</div> </Link></li>
                <li><Link to={"/pedidos"}> <div className='menu_item' href="">Pedidos</div> </Link></li>
                <li><Link to={"/contacto"}> <div className='menu_item' href="">Contacto</div> </Link></li>

            </ul>

            <CartWidget />

        </div>
    );
}

export default NavBar;
