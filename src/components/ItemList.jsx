import React from "react";
import Item from "./Item";


export default function ItemList (misProductos){

            return (
                <>
                    {
                        misProductos.map(item => <Item item={item}/>)
                    }
                </>
            )

           
}