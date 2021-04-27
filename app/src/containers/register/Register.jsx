import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.png';

const Register = () => {

    const history = useHistory();

    const [register, setRegister]= useState({
        userName: '',
        email: '',
        password: ''
    });

    const stateHandler = (event) => {
        setRegister(
            {
                ...register, 
                [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value
            }
        );
            
    };

    const sendData = async () => {
        const data = await axios.post('http://localhost:3000/user', register);
        console.log(data,'<=========ESTO ES DATA<========');
        console.log('se envió');
        
        return setTimeout(() => {
            history.push('/login')
        }, 1000);
    };


    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) sendData()
    };

    const redirect = () => {
        return setTimeout(() => {
            history.push('/')
        }, 1000);
    };


    
    return (
        <div className='register'>
            <div className="logoRegister">
                <img src={logo} alt="logoRegister" className="logoRgt" onClick={() => redirect()}/>
            </div>
            <div className="formRegister">
                    <div className="registerName">
                        Name:
                    </div>
                    <input className="registerInput" type="text" maxLength="30" placeholder="Manue" name="userName" onChange={stateHandler} onKeyDown={handleOnKeyDown}/>
                    <div className="registerEmail">
                        Email:
                    </div>
                    <input className="registerInput" type="email" maxLength="50" placeholder="name@gmail.com" name="email" onChange={stateHandler} onKeyDown={handleOnKeyDown}/>
                    <div className="registerPassword">
                        Password:
                    </div>
                    <input className="registerInput" type="password" maxLength="200" placeholder="Ex:Represent23$" name="password" onChange={stateHandler} onKeyDown={handleOnKeyDown}/>
                    <div className="registerBtn">
                        <button type="button" class="btn btn-success btn-sm" onClick={()=> sendData()}>Enviar</button>
                    </div>

            </div>                    
        </div>
    )
}

export default Register
