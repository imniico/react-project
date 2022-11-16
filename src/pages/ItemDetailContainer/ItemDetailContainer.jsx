import React from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { data } from '../../data/data';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const {id} = useParams();

    const getProduct = () => {
        const item = data.filter((prod) => {
            return prod.id == id;
        })
        setProduct(...item);
    }

    useEffect(() => {
        getProduct();
    }, [id]);


    return (
        <div>
            {product && <ItemDetail product={product} /> }
        </div>
    );
}

export default ItemDetailContainer;
