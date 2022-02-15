import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";


const CartItem = ({ prod }) => {

    const { deleteItem } = useContext(cartContext);

    return( 
        
        <div>
            <h3>{prod.item.nombre}</h3>
            <p>Cantidad: {prod.count}</p>
            <p>Precio: ${prod.item.precio}</p>
            <p>Total: ${prod.item.precio * prod.count}</p>
            <button onClick={() => deleteItem(prod.item.id)}>Delete</button>
        </div>
        
    )
};

export default CartItem;