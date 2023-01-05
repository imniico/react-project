import React from 'react';
import "./ItemListContainer.css";
// import { data } from "../../data/data";
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { category } = useParams();

    const getProducts = () => {

        const db = getFirestore();
        const queryBase = collection(db, "products");
        const querySnapshot = category
            ? query(queryBase, where("categoryId", "==", category))
            : queryBase

        getDocs(querySnapshot)
            .then((response) => {
                const data = response.docs.map((prod) => {
                    return { id: prod.id, ...prod.data() }
                })
                setItems(data);
            })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        getProducts();
    }, [category]);


    return (
        <div>
            <ItemList products={items} />
        </div>
    );

}

export default ItemListContainer;
