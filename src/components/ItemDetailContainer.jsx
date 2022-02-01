import react, {useState, useEffect} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";

export default function ItemDetailContainer (){

    const { id } = useParams();
    
    const [misProductos, setMisProductos] = useState([]);

    function onAdd() {
        alert('compraste ${add} items');
    }

    useEffect(()=>{
        setTimeout(()=>{
            setMisProductos(misProductos.filter(item => item.id === id));
        }, 2000)
    }, [])

    return (
        <>
            <ItemDetail misProductos={misProductos}/>
            <ItemCount />
        </>
    )
}