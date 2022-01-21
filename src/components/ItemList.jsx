import react, {useState} from "react";
import Item from "./Item";


export default function ItemList (){

        const [misProductos, setMisProductos] = useState([
        {id: 1, nombre: "Ryzen 5", precio: "$43.489", info: "Procesador Amd Ryzen 5 5600X 3.7 Ghz - AM4", imagen: "../imagenes/Ryzen5.jpeg"},
        {id: 2, nombre: "Ryzen 7", precio: "$56.779", info: "Procesador Amd Ryzen 7 5800X 4.7 Ghz - AM4", imagen: "../imagenes/Ryzen7.jpeg"},
        {id: 3, nombre: "Ryzen 9", precio: "$114.989", info: "Procesador Amd Ryzen 9 5950X 4.9 Ghz - AM4", imagen: "../imagenes/Ryzen9.jpeg"},
        {id: 4, nombre: "Intel i5", precio: "$33.999", info: "Procesador Intel Core i5 12400 4.4 Ghz Alder Lake 1700", imagen: "../imagenes/Intel5.jpeg"},
        {id: 5, nombre: "Intel i7", precio: "$65.229", info: "Procesador Intel Core i7 12700K 5.0 Ghz Alder Lake 1700", imagen: "../imagenes/Intel7.jpeg"},
        {id: 6, nombre: "Intel i9", precio: "$96.359", info: "Procesador Intel Core i9 12900K 5.2 Ghz Alder Lake 1700", imagen: "../imagenes/Intel9.jpeg"},
    ]);

    const productosEnStock = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    });

            return (
                <>
                    {
                        misProductos.map(item => <Item item={item} />)
                    }
                </>
            )

           
}