import React, { useState } from "react";

export default function ItemCount({ misProductos, onAdd}) {


    return (
        <>
            <div className="counter">
                <button>-</button>
                <button onClick={() => onAdd()}>Agregar al carrito</button>
                <button>+</button>
            </div>
        </>
    );
};