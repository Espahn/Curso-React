import react, {useState, useEffect} from "react";
import { getFirestore } from "../firebase/firebase";
import ItemList from "./ItemList";

export default function ItemListContainer (){

    const [misProductos, setMisProductos] = useState([]);

    useEffect(()=>{
    
    const db = getFirestore();

    const itemCollection = db.collection("items")

    itemCollection.get()
      .then((querySnapShot) => {

        if (querySnapShot.size == 0) {
          console.log('no hay documentos con en ese query');
          return
        }

        console.log('hay documentos');

        setMisProductos(querySnapShot.docs.map((doc)=> {
            return { id: doc.id, ...doc.data() }
        }
        ));
        
      })
      .catch((err)=>{
        console.log(err);
      })
  }, [])

    return (
        <>
            <div>
                <p style={{size: '20px'}} >Bienvenidos a PC Para Mí, donde el único límite es tu imaginación</p>
            </div>
            <ItemList misProductos={misProductos}/>
        </>
    )
}