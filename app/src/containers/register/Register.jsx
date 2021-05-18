import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

import { checkError, validateFields, isValid } from '../../tools/error.handler';
import logo from '../../img/logo.png';

const Register = () => {

    const history = useHistory();

    const [register, setRegister]= useState({
        userName: '',
        email: '',
        password: ''
    });

    const [validation, setValidation] = useState({
        validated: false,
        name: null
    });

    const stateHandler = (event) => {

        setValidation(
            {
                ...validation, 
                [event.target.name]: checkError(event.target.name, event.target.value)
            }
        );

        setRegister(
            {
                ...register, 
                [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value
            }
        );   
    };

    const sendData = async () => {
        
        const validation = validateFields(register);

        setValidation({...validation, validated: true});

        if(!isValid(validation)){
            return;
        };

        const data = await axios.post('http://localhost:3000/user', register);
        console.log(data,'<=========ESTO ES DATA<========');
        
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
            <FormGroup>
                <Label for="userName">Nombre:</Label>
                <Input 
                    className="registerInput" 
                    type="text" 
                    maxLength="30" 
                    placeholder="Manue" 
                    name="userName" 
                    onChange={stateHandler} 
                    onKeyDown={handleOnKeyDown}
                    valid={validation.validated && !validation.userName}
                    invalid={validation.validated && validation.userName}
                />
                <FormFeedback>{validation.userName}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input 
                    className="registerInput" 
                    type="email" 
                    maxLength="50" 
                    placeholder="name@gmail.com" 
                    name="email" 
                    onChange={stateHandler} 
                    onKeyDown={handleOnKeyDown}
                    valid={validation.validated && !validation.email}
                    invalid={validation.validated && validation.email}
                />
                <FormFeedback>{validation.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="password">Contraseña:</Label>
                <Input 
                    className="registerInput" 
                    type="password" 
                    maxLength="200" 
                    placeholder="Ex:Represent23$" 
                    name="password" 
                    onChange={stateHandler} 
                    onKeyDown={handleOnKeyDown}
                    valid={validation.validated && !validation.password}
                    invalid={validation.validated && validation.password}
                />
                <FormFeedback>{validation.password}</FormFeedback>
            </FormGroup>
            <div className="registerBtn">
                    <button type="button" class="btn btn-success btn-sm" onClick={()=> sendData()}>Enviar</button>
            </div>
            </div>
            {/* <div className="formRegister">
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
            </div> */}
        </div>
    )
}

export default Register
