import React from 'react';
import "./ItemDetail.css";
import { useState, useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({ product }) => {

    const [count, setCount] = useState(1);
    const { cart, addToCart, removeItem, clearCart } = useContext(cartContext);

    return (
        <div className="detalle">

            <div className='nombre'>
                <h2>{product.title} </h2>
                <h2>- ID: {product.id}</h2>
                <h2>(Stock: {product.stock})</h2>
            </div>

            <div className='imgdetail'><img src={product.imageId} alt={product.title} /></div>

            <h2>Precio: ${product.price}</h2>

            <div className='add-cantidad'>
                <h2> {count} </h2>
                <ItemCount setCount={setCount} stock={product.stock} />
            </div>

            <button className="add-cart" onClick={() => addToCart(product, count) }>
                Agregar al carrito
            </button>
            <button className="add-cart" onClick={() => removeItem(product.id) }>
                Eliminar del carrito
            </button>
            <button className="add-cart" onClick={() => clearCart() }>
                Vaciar Carrito
            </button>

            <h1> Cantidad de items en el carrito: {cart.length} </h1>

            <Link to={"/cart"}>
                <button className='add-cart'> Terminar compra </button>
            </Link>

            {/* <h1 onClick={()=>console.log(cart)}> Ver carrito </h1> */}

        </div>
    );
}

export default ItemDetail;
