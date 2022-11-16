import React from 'react';
import Item from '../Item/Item';
import "./ItemList.css";

const ItemList = ({products}) => {

    return (
        <div className="products">
            {products.map((prod) => <Item product={prod} key={prod.id} />)}
        </div>
        
    );
}

export default ItemList;
