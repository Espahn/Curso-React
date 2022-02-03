import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";

export default function Cart (element){

    const { cart, deleteItem } = useContext(cartContext);

       return (
        <>
            <div>
                {cart.map(element => <div key={element.miItem.id}>{element.miItem.nombre}</div>)}
                <button onClick={() => deleteItem(element.miItem.id)}>Delete</button>
            </div>
        </>
    )
}