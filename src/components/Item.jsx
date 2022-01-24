import React from "react";

export default function Item ({item}){

    return (
        <>
            <div class="container">
                    <div>
                        <p>{item.info}</p>
                        <p>{item.precio}</p>
                        <img src={item.imagen} alt=""></img>
                    </div>      
            </div>
        </>
    )
    
}

