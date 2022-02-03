// import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { useState } from "react/cjs/react.development";
// import ItemCount from "./ItemCount";

// export default function Detail ({item, misProductos, onAdd}){

//     const [mostrarItemCount, setMostrarItemCount] = useState(true);

//     function onAdd(cantidad) {
//         alert('quiero agregar: ' + cantidad);
//         setMostrarItemCount(false);
//     }

//     return (
//         <>
//             <div>
//                 <div>
//                     <p>Caché: {item.cache}</p>
//                     <p>Núcleos: {item.nucleos}</p>
//                     <p>Hilos: {item.hilos}</p>
//                     <p>Frecuencia mínima: {item.frecuenciaMin}</p>
//                     <p>Frecuencia máxima: {item.frecuenciaMax}</p>
//                 </div>      
//             </div>

//         {
//             (mostrarItemCount)?
//                 <ItemCount misProductos={misProductos} onAdd={onAdd} />
//             :
//                 <button><Link to={`/cart`}>Terminar mi compra</Link></button>
//         }
//         </>
//     )
    
// }

