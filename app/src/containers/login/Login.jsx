import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userTypes';

import { checkError, validateFields, isValid } from '../../tools/error.handler';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import logo from '../../img/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';


const Login = (props) => {

    const [user, setUser] = useState({
        email : '',
        password : ''        
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
        setUser(
            {
                ...user, 
                [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value
            }
        );
    };



    const history = useHistory();

    const sendData = async () => {

        const validation = validateFields(user);

        setValidation({...validation, validated: true});

        if(!isValid(validation)){
            return;
        };

        const result = await axios.post('http://localhost:3000/user/login', user)

        props.dispatch({type: LOGIN, payload: result.data});

        return setTimeout(() => {
            history.push('/profile')
        }, 1000);
    };

    const redirect = () => {
        return setTimeout(() => {
            history.push('/register')
        }, 1000);
    };
    
    const redirectToHome = () => {
        return setTimeout(() => {
            history.push('/')
        }, 1000);
    };

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) sendData()
    };


    return (
        <div className="login">
            <div className="logoLogin">
                <img src={logo} alt="logoLogin" onClick={() => redirectToHome()} className="logoLgn"/>
            </div>
            <div className='cardLogin'>
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
                <div className="loginBtn">
                    <button type="button" class="btn btn-success btn-sm" onClick={()=> sendData()}>Enviar</button>
                </div>
                <div onClick={() => redirect()} className='createAccount'>
                    ¿No estás registrado? Registrate aquí.
                </div>
            </div>             
        </div>
    )
}

export default connect()(Login);
