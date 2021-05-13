import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userTypes';



import logo from '../../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = (props) => {

    const [user, setUser] = useState({
        email : '',
        password : ''        
    });

    const stateHandler = (event) => {
        setUser({...user, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }



    const history = useHistory();

    const sendData = async () => {
        const result = await axios.post('http://localhost:3000/user/login', user)
        console.log(result);
        props.dispatch({type: LOGIN, payload: result.data});

        console.log('LOGIN');

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
                <div className="emailLogin">
                    Email :

                </div>
                <input type='text' className='loginInput' maxLength='50' placeholder="" name="email" onKeyDown={handleOnKeyDown} onChange={stateHandler}/>
                <div className="passwordLogin">
                    Password :

                </div>
                {/* <input className='passInput' maxLength='50' placeholder="" name="password" onKeyDown={handleOnKeyDown} onChange={stateHandler}></input> */}
                <input className='loginInput' type="password" name="password" maxLength='50' placeholder="" onKeyDown={handleOnKeyDown} onChange={stateHandler}/>
                {/* <div className='showPWDiv'>
                    <input checked= {checkbox} type= 'checkbox' onChange={() => toggle()} className='showPW' name='showPS'></input>
                    <p className='showPWText'>Show Password</p>
                </div> */}
                <div className="loginBtn">
                    <button type="button" class="btn btn-success btn-sm" onClick={()=> sendData()}>Enviar</button>
                </div>
                {/* <button className='loginBtn' onClick={()=> sendData()}>Login</button> */}
                <div onClick={() => redirect()} className='createAccount'>
                    ¿No estás registrado? Registrate aquí.
                </div>
            </div>             
        </div>
    )
}

export default connect()(Login);
