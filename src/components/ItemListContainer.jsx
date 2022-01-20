import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export default function ItemListContainer (){
    return (
        <>
            <div>
                <p style={{size: '20px'}} >Bienvenidos a PC Para Mí, donde el único límite es tu imaginación</p>
            </div>
            <ItemList />
            <ItemCount />
        </>
    )
}