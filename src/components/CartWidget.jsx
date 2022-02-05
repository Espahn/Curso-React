import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CartWidget (){
    
    return (
        <>
            <div>
            <Link to={`/cart`}><img style={{width: '30px', height: '30px'}} src={require('../imagenes/Carrito.png')} alt=""/></Link>
            </div>
        </>
    )
}