import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () => {

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
    }


    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) sendData()
    };
    
    return (
        <div>
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
