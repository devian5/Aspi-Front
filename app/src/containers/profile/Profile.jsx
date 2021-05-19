import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

import { connect } from 'react-redux';
import { CLEAR, SAVE } from  '../../redux/types/feelingTypes';
import { LOGOUT } from '../../redux/types/userTypes';
import { CLEAR_SEARCH } from '../../redux/types/meaningTypes';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../../components/navbar/Navbar';
import Modal from '../../components/modal/Modal';

const Profile = (props) => {

    const history = useHistory()

    useEffect(() => {
        getFeeling();
        
    },[]);

    const [feeling,setFeeling]=useState({
        picture: []
    });

    const [select,setSelect]=useState({
        feelingSelected: ''

    });

    const stateHandler = (event) => {
        setSelect({...select, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});
            
    };

    const logOut =  () => {

        props.dispatch({type: LOGOUT, payload : {}});
        props.dispatch({type: CLEAR, payload : {}});
        props.dispatch({type: CLEAR_SEARCH, payload : {}});
  
        setTimeout(()=> {
            history.push('/');
        },300);
    };
  
    const getFeeling = async () => {

        const result = await axios.get('http://localhost:3000/feeling');

        setFeeling({
            ...feeling, picture: result.data.result
        })

    };

    const saveFeeling = () => {
        const data = select.feelingSelected

        props.dispatch({type: SAVE, payload: data});
    };
    
    if(select.feelingSelected === ''){
        return(
            <div>
                <Navbar
                    onClick={logOut}
                />
                <br/>
                <Modal
                    feeling={feeling.picture}

                    name="feelingSelected"
                    onChange={stateHandler}
                />
                <div className="imgFeeling">
                    <img src={props.feeling} alt={null}/>
                </div>    
            </div>
        )
    }else{
        return (
            <div>
                <Navbar/>
                <br/>
                <Modal
                    feeling={feeling.picture}

                    name="feelingSelected"
                    onChange={stateHandler}
                    onClick={saveFeeling}                
                    />
                <div className="imgFeeling">
                    <img src={select.feelingSelected} alt="feeling"/>
                </div>
                {/* <Carousel
                    feeling={feeling.picture}

                    name="feelingSelected"
                    onChange={stateHandler}                

                /> */}
                {/* <div cl1assName="cardFeeling">
                    {
                        feeling.picture?.map(image => {
                            return(
                                // <CardImg
                                //     picture={image.picture}
                                // /> 
                            )
                        })

                    }
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        feeling: state.feelingReducer.query

    }
}



export default connect(mapStateToProps)(Profile)
