import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";
import ItemCount from "./ItemCount";

export default function ItemDetail ({miItem}){

    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    function onAdd(cantidad) {
        alert('quiero agregar: ' + cantidad);
        setMostrarItemCount(false);
    }

    return (
        <>
            <div>
                <div>
                    {/* <p>{JSON.stringify(miItem)}</p> */}
                    <p>Caché: {miItem.cache}</p>
                    <p>Núcleos: {miItem.nucleos}</p>
                    <p>Hilos: {miItem.hilos}</p>
                    <p>Frecuencia mínima: {miItem.frecuenciaMin}</p>
                    <p>Frecuencia máxima: {miItem.frecuenciaMax}</p>
                </div>      
            </div>

        {
            (mostrarItemCount)?
                <ItemCount item={miItem} />
            :
                <button><Link to={`/cart`}>Terminar mi compra</Link></button>
        }
        </>
    )
    
}

