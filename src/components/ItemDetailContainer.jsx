import react, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";
import { cartContext } from "../context/CartProvider";

export default function ItemDetailContainer (){

    const {addToCart} = useContext(cartContext);

    const { id } = useParams();
    
    const [miItem, setMiItem] = useState({});

    useEffect(()=>{
        console.log(id);
        setTimeout(()=>{
            let misProductos = [
                {id: 1, nombre: "Ryzen 5", precio: "$43.489", stock: 10, info: "Procesador Amd Ryzen 5 5600X 3.7 Ghz - AM4", imagen: "../imagenes/Ryzen5.jpeg", cache: "32 MB", nucleos: "6", hilos: "12", frecuenciaMin: "3,7 GHz", frecuenciaMax: "4,6 GHz"},
                {id: 2, nombre: "Ryzen 7", precio: "$56.779", stock: 10, info: "Procesador Amd Ryzen 7 5800X 4.7 Ghz - AM4", imagen: "../imagenes/Ryzen7.jpeg", cache: "32 MB", nucleos: "8", hilos: "16", frecuenciaMin: "3,8 GHz", frecuenciaMax: "4,7 GHz"},
                {id: 3, nombre: "Ryzen 9", precio: "$114.989", stock: 10, info: "Procesador Amd Ryzen 9 5950X 4.9 Ghz - AM4", imagen: "../imagenes/Ryzen9.jpeg", cache: "64 MB", nucleos: "16", hilos: "32", frecuenciaMin: "3,4 GHz", frecuenciaMax: "4,9 GHz"},
                {id: 4, nombre: "Intel i5", precio: "$33.999", stock: 10, info: "Procesador Intel Core i5 12400 4.4 Ghz Alder Lake 1700", imagen: "../imagenes/Intel5.jpeg", cache: "18 MB", nucleos: "6", hilos: "12", frecuenciaMin: "2,5 GHz", frecuenciaMax: "4,4 GHz"},
                {id: 5, nombre: "Intel i7", precio: "$65.229", stock: 10, info: "Procesador Intel Core i7 12700K 5.0 Ghz Alder Lake 1700", imagen: "../imagenes/Intel7.jpeg", cache: "32 MB", nucleos: "12", hilos: "8", frecuenciaMin: "2,7 GHz", frecuenciaMax: "5 GHz"},
                {id: 6, nombre: "Intel i9", precio: "$96.359", stock: 10, info: "Procesador Intel Core i9 12900K 5.2 Ghz Alder Lake 1700", imagen: "../imagenes/Intel9.jpeg", cache: "30 MB", nucleos: "16", hilos: "24", frecuenciaMin: "3,2 GHz", frecuenciaMax: "5,1 GHz"},
            ];
            
            setMiItem(misProductos.filter(item => item.id == id)[0])

        }, 2000)
    }, [])

      return (
        <>
            <ItemDetail miItem={miItem} />
        </>
    )
}