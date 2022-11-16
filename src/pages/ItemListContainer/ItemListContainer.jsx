import React from 'react';
import "./ItemListContainer.css";
import { data } from "../../data/data";
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { category } = useParams();
    console.log(category);

    const getProducts = new Promise((res, rej) => {
        setTimeout(() => {

            if (category) {
                const filteredData = data.filter((prod) => {
                    return prod.category === category;
                });
                res(filteredData);
            } else {
                res(data);
            }

        }, 500);
    })

    useEffect(() => {
        getProducts.then((res) => {
            setItems(res);
        })
    }, [category]);

    return (
        <div>
            <ItemList products={items} />
        </div>
    );

}

export default ItemListContainer;
