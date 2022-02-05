import { clear } from "@testing-library/user-event/dist/clear";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart (element){

    const { cart, clearCart, precioTotal, cantidadTotal } = useContext(cartContext);

    const [total, setTotal] = useState(0);

        useEffect(() => {
            setTotal (precioTotal());
        }, [])

       return (
        <>

            {/* {JSON.stringify(cart)} */}
            {cart.length === 0 ?
            <div>
                <h3>Carrito vacío</h3>
                <Link to='/'>Volver al inicio</Link>
            </div>    
            :
            <div>
                {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
                <h1>Total a pagar: ${total}</h1>
                <button onClick={() => clearCart()}>Vaciar carrito</button>
            </div>        
            }
        </>
    )
}