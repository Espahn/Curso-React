import React from "react";

export default function Detail ({item}){

    return (
        <>
            <div class="container">
                <div>
                    <p>Caché: {item.cache}</p>
                    <p>Núcleos: {item.nucleos}</p>
                    <p>Hilos: {item.hilos}</p>
                    <p>Frecuencia mínima: {item.frecuenciaMin}</p>
                    <p>Frecuencia máxima: {item.frecuenciaMax}</p>
                </div>      
            </div>
        </>
    )
    
}

