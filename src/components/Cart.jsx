import { clear } from "@testing-library/user-event/dist/clear";
import React, { useContext, useEffect, useState, useRef } from "react";
import { cartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import firebase from "firebase";
import { getFirestore } from '../firebase/firebase'

export default function Cart (element){

    const { cart, clearCart, precioTotal } = useContext(cartContext);

    const [total, setTotal] = useState(0);

        useEffect(() => {
            setTotal (precioTotal());
        }, [])

        const [orderId, setOrderId] = useState('');

        const nameRef = useRef();
        const addressRef = useRef();
        const cityRef = useRef();
        const stateRef = useRef();
        const emailRef = useRef();
        const mobileRef = useRef();
    
        function handleClick() {
    
            const db = getFirestore();
            const orders = db.collection("orders");
    
            const miOrden = {
                buyer: {
                    name: nameRef.current.value,
                    address: addressRef.current.value,
                    city: cityRef.current.value,
                    state: stateRef.current.value,
                    email: emailRef.current.value,
                    mobile: mobileRef.current.value,
                },
                items: cart,
                total: total,
                date: firebase.firestore.Timestamp.fromDate(new Date())
            }
    
            orders.add(miOrden)
                .then(({ id }) => {
                    console.log('Orden ingresada: ' + id);
                    setOrderId(id);
                })
                .catch((err) => {
                    console.log(err);
                });

            }
    

       return (
        <>

            {/* {JSON.stringify(cart)} */}
            {cart.length === 0 ?
            <div>
                <h3>Carrito vacío</h3>
                <Link to='/'>Volver al inicio</Link>
            </div>    
            :
            <div>
                <div>
                    {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
                    <h1>Total a pagar: ${total}</h1>
                    <button onClick={() => clearCart()}>Vaciar carrito</button>
                </div>
            
                <div>

                    {orderId && (<h1>Felicitaciones tu order es {orderId}</h1>)}
                    
                    <h3>Ingresa tus datos:</h3>

                    <input type="text" name="name" ref={nameRef} placeholder="Nombre y apellido" />
                    <br />

                    <input type="text" name="mobile" ref={mobileRef} placeholder="Nº de celular" />
                    <br />

                    <input type="text" name="email" ref={emailRef} placeholder="Email" />
                    <br />

                    <input type="text" name="state" ref={stateRef} placeholder="Provincia" />
                    <br />

                    <input type="text" name="city" ref={cityRef} placeholder="Ciudad" />
                    <br />

                    <input type="text" name="address" ref={addressRef} placeholder="Dirección" />
                    <br />

                    <button onClick={() => handleClick()}>Siguiente</button>
                </div>
            </div>       
            }
        </>
    )
}