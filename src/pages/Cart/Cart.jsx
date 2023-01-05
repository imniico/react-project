import React from 'react';
import "./Cart.css";
import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../../context/CartProvider';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment';

const Cart = () => {

    const { cart } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [formValues, setFormValues] = useState({ email: '', name: '', phone: '' });

    const getTotal = () => {
        setTotal(cart.reduce((acum, product) => acum + product.price * product.quantity, 0))
    };

    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, 'order');
        const newOrder = {
            buyer: {
                name: formValues.name,
                phone: formValues.phone,
                email: formValues.email
            },
            date: moment().format('DD/MM/YYYY'),
            items: cart,
            total: total
        };

        addDoc(query, newOrder)
            .then((response) => {
                alert(`Orden creada con el id ${response.id}`)
                return (response)
            })
            .then((res) => {
                cart.forEach((product) => {
                    const query = doc(db, "products", product.id);
                    updateDoc(query, { stock: product.stock - product.quantity })
                })
            })
            .catch((error) => { console.log(error) });

    };

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        getTotal();
    }, [cart]);

    return (

        <div className="carrito">
            <h1> Carrito de compras </h1>

            <div className="carrito-item">
                <h2>Producto</h2>
                <h2>Nombre</h2>
                <h2>Cantidad</h2>
                <h2>Precio Unit</h2>
            </div>

            {cart.map((product) => (
                <div key={product.id} className="carrito-item">
                    <div className='imgcart'><img src={product.imageId} alt={product.title} /></div>
                    <h2>{product.title}</h2>
                    <h2>{product.quantity}</h2>
                    <h2>${product.price}</h2>
                </div>
            ))}

            <h3> Total: ${total} </h3>



            <div className="datos">
                <h3> Datos </h3>

                <div className='cart-form'>

                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleInputChange} />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formValues.name}
                        onChange={handleInputChange} />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Teléfono"
                        value={formValues.phone}
                        onChange={handleInputChange} />
                </div>
            </div>


            <button onClick={createOrder}>
                Crear Orden
            </button>

        </div>
    );

}

export default Cart;
