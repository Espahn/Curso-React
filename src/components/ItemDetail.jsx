import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useState } from "react/cjs/react.development";
import { cartContext } from "../context/CartProvider";
import ItemCount from "./ItemCount";

export default function ItemDetail ({miItem, onAdd}){

    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    const {addToCart} = useContext(cartContext);

    function onAdd(cantidad) {
        addToCart(miItem, cantidad)
        alert(`Quiero agregar: ${miItem.nombre}`);
        setMostrarItemCount(false);
    }

    return (
        <>
            <div>
                <div>
                    {/* <p>{JSON.stringify(miItem)}</p> */}
                    <img style={{width: '300px', height: '300px'}} class="img-fluid" src={miItem.imagen} alt=""></img>
                    <p>Detalles: {miItem.detalles}</p>
                    <p>Precio: ${miItem.precio}</p>
                </div>      
            </div>

        {
            (mostrarItemCount)?
                <ItemCount onAdd={onAdd} stock={miItem.stock} initial={1}/>
            :
                <button><Link to={`/cart`}>Terminar mi compra</Link></button>
        }
        </>
    )
    
}

