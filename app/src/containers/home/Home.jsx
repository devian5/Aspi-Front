import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.png';
import asperger from '../../img/asperger.png';
import { useHistory } from 'react-router';





const Home = () => {
    
    const history = useHistory();

    const redirectLogin = () => {
        return setTimeout(() => {
          history.push('/login')
        }, 1000);
    };
    
    const redirectRegister = () => {
        return setTimeout(() => {
          history.push('/register')
        }, 1000);
    };

    return (
        <div className='homeContainer'>
            <div className='homeHeader'> 
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="buttonsHome">
                    <button type="button" class="btn btn-dark btn-sm" onClick={()=> redirectRegister()}>Registrate</button>
                    <button type="button" class="btn btn-dark btn-sm" onClick={()=> redirectLogin()}>Inicio sesión</button>
                </div>
            </div>
            <div className="homeBody">
                <div className="description">
                    <p>
                        Esta es una applicación web que trata de ayudar tanto a personas con TEA como a personas con problemas para entender las emociones. En ella puedes buscar emociones y también pequeñas expresiones del día a día llenas de sarcasmo y doble sentidos.
                    </p>
                </div>
                <div className="imageBody">
                    <img src={asperger} alt="asperger"/>
                </div>
            </div>
            <div className="footerHome">
                <div className="textFooter">
                    <div>
                        App de ian

                    </div>
                    <div>
                        App registrada©

                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Home
