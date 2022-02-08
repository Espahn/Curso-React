import react, {useState, useEffect, useContext} from "react";
import { getFirestore } from "../firebase/firebase";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";
import { cartContext } from "../context/CartProvider";

export default function ItemDetailContainer (){

    const {addToCart} = useContext(cartContext);

    const { id } = useParams();
    
    const [miItem, setMiItem] = useState({});

    useEffect(()=>{
        const db = getFirestore();
    const itemCollection = db.collection("items");
    
    const miItem = itemCollection.doc(id);

    miItem.get()    
      .then((doc) => {


        if (!doc.exists) {
          console.log('no existe ese documento');
          return
        }

        console.log('item found');
        setMiItem({ id: doc.id, ...doc.data() });

      })
      .catch((err)=>{
        console.log(err);

        })
    }, [])

      return (
        <>
            <ItemDetail miItem={miItem} />
        </>
    )
}