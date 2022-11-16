import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    return (
        <div className="card">
            <h2>{product.title}</h2>
            <div className='img'> <img src={product.img} /></div>
            <div className='precio-detalle'>
                <h2>${product.price}</h2>
                <Link to={`/detail/${product.id}`}><button> Ver Detalle </button></Link>
            </div>
        </div>


    );
}

export default Item;
