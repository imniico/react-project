import React from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
// import { data } from '../../data/data';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { getFirestore, getDoc, doc, query, where } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const { id } = useParams();

    const getProduct = () => {
        const db = getFirestore();
        const query = doc(db, 'products', id);
        getDoc(query)
        .then(response => {
            setProduct({id: response.id, ...response.data()});
        })
        .catch(error => console.log(error))
    };

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
