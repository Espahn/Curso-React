import React, {useContext} from "react";
import { cartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

export default function NavBar (){

    const { cart } = useContext(cartContext);

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Logo />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to={'/'} class="nav-link active" aria-current="page">Inicio</Link>
                    <Link to={'/category/CPU'} class="nav-link">CPU</Link>
                    <Link to={'/category/Motherboard'} class="nav-link">Motherboard</Link>
                </div>
            </div>
            {cart.length === 0 ?
            []
            :
            <CartWidget />       
            }
            </div>
            </nav>
        </>
    )
}