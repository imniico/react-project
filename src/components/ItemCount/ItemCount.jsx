import React from 'react';
import './ItemCount.css'

const ItemCount = ({setCount}) => {

    const sumar = () => {
        setCount((valorActual) => valorActual + 1);
    }

    const restar = () => {
        setCount((valorActual) => {
            if (valorActual > 1) { return valorActual - 1 }
            else { return valorActual }
        });
    }

    return (
        <div className='contador-container'>
            <button className="contador" onClick={ sumar }> + </button>
            <button className="contador" onClick={ restar }> - </button>
        </div>
    );
}

export default ItemCount;
