import { createContext, useState } from "react";

export const cartContext = createContext([]);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {     
        
        // acá se valida que se agregue el mismo producto al carrito, aumenta el quantity
        let encontrado = cart.find(item => item.id === product.id);
        if (encontrado == undefined){
            setCart([...cart, {...product, quantity}]);
        } 
        else {
            encontrado.quantity = encontrado.quantity + quantity 
        }
    }

    const removeItem = (id) => {
        let resultado = cart.filter(prod => prod.id != id);
        console.log(resultado);
        setCart([...resultado]);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, removeItem, clearCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;