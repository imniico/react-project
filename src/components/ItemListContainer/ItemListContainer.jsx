import React from 'react';
import "./ItemListContainer.css"

const ItemListContainer = ({name}) => {
    return (
        <div className='msg_container'>
            <h2 className='msg'> { name } </h2>
        </div>
    );
}

export default ItemListContainer;
