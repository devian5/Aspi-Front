import React from 'react';

import logo from '../../img/logo.png';

const Navbar = () => {
    return (
        <div className="nvb">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div className="logoProfile">
                    <img src={logo} alt="logo" className="logoPfl"/>
                </div>
                {/* <a class="navbar-brand" href="/">Aspi</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            <a class="nav-link" href="#">Emociones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Frases hechas</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/">Calendario</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <hr/>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                            <hr/>
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
            
        </div>
    )
}

export default Navbar
