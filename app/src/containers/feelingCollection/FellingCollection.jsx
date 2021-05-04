import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Search from '../../components/search/Search';

const FellingCollection = () => {

    const [feelingCollection,setFeelingCollection]=useState({
        feeling: []
    });

    const stateHandler = (event) => {
        setFeelingCollection({...feelingCollection, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };


    useEffect(() => {
        getFeeling();
    
    },[]);


    const getFeeling = async () => {

        const result = await axios.get('http://localhost:3000/feeling');
        console.log('result',result.data.result);

        setFeelingCollection({
            ...feelingCollection, feeling: result.data.result
        });

    };

    const searchEngine = () => {
        console.log(feelingCollection.feeling,'Esto es el ESTADO');
        // const arraySearch = feelingCollection.feeling.filter(find =>
        //     find.name.toLowerCase().includes(search.explore.toLowerCase())
        // );

        
        // setMeaning({
        //     ...meaning, input: arraySearch
        // });

        // console.log(arraySearch);
        console.log('BUSCA!');
        
    };

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) searchEngine()
    };

    console.log(feelingCollection.feeling);
    if(feelingCollection.feeling === []){
        return(
            <div>
                <Navbar/>
                Holii
            </div>
        )
    }else{
        return (
            <div>
                <Navbar/>
                <Search
                    onClick={()=> searchEngine()}
                    onChange={stateHandler}
                    onKeyDown={handleOnKeyDown}
                    name="explore"
                    type="search"
                    >Buscar
                </Search>
                
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

export default FellingCollection
