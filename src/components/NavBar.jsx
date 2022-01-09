import React from "react";

export default function NavBar (){
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">PPM</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    <a class="nav-link" href="#">CPU</a>
                    <a class="nav-link" href="#">Motherboard</a>
                    <a class="nav-link" href="#">Memoria RAM</a>
                    <a class="nav-link" href="#">Tarjeta gráfica</a>
                    <a class="nav-link" href="#">Almacenamiento</a>
                    <a class="nav-link" href="#">Fuente</a>
                    <a class="nav-link" href="#">Gabinete</a>
                </div>
                </div>
            </div>
            </nav>
        </>
    )
}