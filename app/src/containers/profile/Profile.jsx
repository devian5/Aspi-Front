import React, { useEffect, useState } from 'react';
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../../components/navbar/Navbar';
import Modal from '../../components/modal/Modal';
import CardImg from '../../components/cardImg/CardImg';

const Profile = (props) => {
    console.log(props);
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
        
    console.log(select.feelingSelected);

    const getFeeling = async () => {

        const result = await axios.get('http://localhost:3000/feeling');
        console.log('result',result.data.result);

        setFeeling({
            ...feeling, picture: result.data.result
        })

    };
    
    console.log(feeling.picture);
    if(select.feelingSelected === ''){
        return(
            <div>
                <Navbar/>
                <br/>
                <Modal
                    feeling={feeling.picture}

                    name="feelingSelected"
                    onChange={stateHandler}
                />
                holii!

            </div>
        )
    }else{
        return (
            <div>
                <Navbar/>
                <br/>
                {/* <Modal/> */}

                
                <Modal
                    feeling={feeling.picture}

                    name="feelingSelected"
                    onChange={stateHandler}                
                />
                <img src={select.feelingSelected} alt="feeling"/>
                
                {/* <div className="cardFeeling">
                    {
                        feeling.picture?.map(image => {
                            // return(
                            //     <CardImg
                                    // picture={image.picture}
                            //     /> 

                            // )
                        })

                    }
                </div> */}
                
                
                
            </div>
        )

    }
}


export default Profile
