import React from 'react';

import logo from '../../img/logo.png';

const Navbar = (props) => {
    return (
        <div className="nvb">
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                <div >
                    <a className="logoProfile" href="/profile">
                        <img src={logo} alt="logo" href="/profile" className="logoPfl"/>
                    </a>
                    
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            <a class="nav-link" href="/feeling">Emociones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/double-meaning">Frases hechas</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Desplegable
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/">Calendario</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" onClick={props.onClick} href="#">Cerrar sesión</a></li>
                            </ul>
                        </li>
                        <hr/>
                    </ul>
                </div>
            </div>
        </nav>
            
        </div>
            
    )
}

export default Navbar
