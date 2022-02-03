import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (miItem, count) => {
        if (isInCart(miItem.id)){
          const indexItem = cart.findIndex(ele => ele.miItem.id === miItem.id);
          cart[indexItem].count = cart[indexItem].count + count;
          setCart([...cart]);
        } else {
          setCart([...cart, { item: miItem, count }])
        }
      }
    
      const deleteItem = (id) => {
        const updatedCart = cart.filter(element => element.miItem.id !== id)
        setCart(updatedCart);
      }
    
      const isInCart = (id) => {
        return cart.some(element => element.miItem.id === id)
      }
    
      
    return (
    
    <cartContext.Provider value={{ cart, addToCart, deleteItem }}>
        {children}
    </cartContext.Provider>
    
    )
};

export default CartProvider;