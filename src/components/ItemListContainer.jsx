import react, {useState, useEffect} from "react";
import { getFirestore } from "../firebase/firebase";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemList from "./ItemList";

export default function ItemListContainer (){

    const [misProductos, setMisProductos] = useState([]);

    const { categoria } = useParams();

    useEffect(()=>{
    
    const db = getFirestore();

        if (categoria) {
          db
            .collection("items")
            .where("categoria", "==", categoria)
            .get()
            .then((res) =>
              setMisProductos(
                res.docs.map((item) => ({ ...item.data(), id: item.id }))
              )
            )
            .catch((err) =>
              console.log("CATEGORY: error reading items form firebase => ", err)
            );
        } else {
          db
            .collection("items")
            .get()
            .then((res) =>
              setMisProductos(
                res.docs.map((item) => ({ ...item.data(), id: item.id }))
              )
            )
            .catch((err) =>
              console.log("HOME: error reading items form firebase => ", err)
            );
        }
  }, [categoria])

    return (
        <>
            <div>
                <p style={{size: '20px'}} >Bienvenidos a PC Para Mí, donde el único límite es tu imaginación</p>
            </div>
            <ItemList misProductos={misProductos}/>
        </>
    )
}