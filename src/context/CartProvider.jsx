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
        const updatedCart = cart.filter(element => element.item.id !== id)
        setCart(updatedCart);
      }
    
      const isInCart = (id) => {
        return cart.some(element => element.item.id === id)
      }
    
      const clearCart = () => {
        setCart([])
      }

      const precioTotal = () => {
        return cart.map((item) => item.item.precio * item.count).reduce((a,b) => a + b);
      }
      
    return (
    
    <cartContext.Provider value={{ cart, addToCart, deleteItem, clearCart, precioTotal }}>
        {children}
    </cartContext.Provider>
    
    )
};

export default CartProvider;