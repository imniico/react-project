import React from 'react';
import "./ItemListContainer.css";
// import { data } from "../../data/data";
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { getFirestore, collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { category } = useParams();

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "products");
        
        
        if (category) {
           
            const queryFilter = query(querySnapshot, where("categoryId", "==", category))
            getDocs(queryFilter)
                .then((response) => {
                    const data = response.docs.map((prod) => {
                        return { id: prod.id, ...prod.data() }
                    })
                    setItems(data);
                })
                .catch((error) => { console.log(error) })

        } else {
            
            getDocs(querySnapshot)
                .then((response) => {
                    const data = response.docs.map((prod) => {
                        return { id: prod.id, ...prod.data() }
                    })
                    setItems(data);
                })
                .catch((error) => { console.log(error) })
        }

    }

    useEffect(() => {
        getProducts();
    }, [category]);

    // useEffect(() => {
    //     getProducts.then((res) => {
    //         setItems(res);
    //     })
    // }, [category]);

    return (
        <div>
            <ItemList products={items} />
        </div>
    );

}

export default ItemListContainer;
