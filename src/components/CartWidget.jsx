import React, {useContext, useState, useEffect} from "react";
import { cartContext } from "../context/CartProvider";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CartWidget (){

    const { sumarCantidad } = useContext(cartContext);

    const [cantidadTotal, setCantidadTotal] = useState(0);

    useEffect(() => {
        setCantidadTotal (sumarCantidad());
    }, [])
    
    return (
        <>
            <div>
                <Link to={`/cart`}>{cantidadTotal}<img style={{width: '30px', height: '30px'}} src={require('../imagenes/Carrito.png')} alt=""/></Link>
            </div>
        </>
    )
}