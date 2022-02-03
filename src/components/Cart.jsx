import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";

export default function Cart (element){

    const { cart, deleteItem } = useContext(cartContext);

       return (
        <>
            <div>
                {cart.map(element => <div key={element.item.id}>{element.item.nombre}<button onClick={() => deleteItem(element.item.id)}>Delete</button></div>)}
            </div>
        </>
    )
}