import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer (){
    return (
        <>
            <div>
                <p style={{size: '20px'}} >Bienvenidos a PC Para Mí, donde el único límite es tu imaginación</p>
            </div>
            <ItemCount />
        </>
    )
}