import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


export default function Item ({item}){

    return (
        <>
            <div class="container">
                    <div class="row">
                        <div class="col">
                        <p>{item.info}</p>
                        <p>{item.precio}</p>
                        <img style={{width: '300px', height: '300px'}} class="img-fluid" src={item.imagen} alt=""></img>
                        <button><Link to={`/item/${item.id}`}>Ver detalle</Link></button>
                        </div>
                    </div>      
            </div>
        </>
    )
    
}

