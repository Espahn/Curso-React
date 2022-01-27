import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

export default function NavBar (){
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
                    <Link to={'/'} class="nav-link active" aria-current="page" href="#">Inicio</Link>
                    <Link to={'/category/cpu'} class="nav-link" href="#">CPU</Link>
                    <a class="nav-link" href="#">Motherboard</a>
                    <a class="nav-link" href="#">Memoria RAM</a>
                    <a class="nav-link" href="#">Tarjeta gráfica</a>
                    <a class="nav-link" href="#">Almacenamiento</a>
                    <a class="nav-link" href="#">Fuente</a>
                    <a class="nav-link" href="#">Gabinete</a>
                </div>
            </div>
            <CartWidget />
            </div>
            </nav>
        </>
    )
}