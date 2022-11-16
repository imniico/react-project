import React from 'react';
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
    return (
        <div className="detalle">
            <h1> Detalle del producto </h1>
            <div className='nombre'>
                <h2>{product.title} </h2>
                <h2>- ID: {product.id}</h2>
            </div>
            
            <div className='imgdetail'><img src={product.img} alt="" /></div>

            <h2>Precio: ${product.price}</h2>
        </div>
    );
}

export default ItemDetail;
