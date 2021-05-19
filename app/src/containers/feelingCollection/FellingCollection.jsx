import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Search from '../../components/search/Search';
import CardImg from '../../components/cardImg/CardImg';

const FellingCollection = () => {

    const [feelingCollection,setFeelingCollection]=useState({
        feeling: []
    });

    const [search,setSearch]=useState({
        explore: ''
    });


    const [data,setData]=useState({
        feelingResult: []
    });

    const stateHandler = (event) => {
        setFeelingCollection({...feelingCollection, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

    const stateSearchHandler = (event) => {
        setSearch({...search, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

    useEffect(() => {
        getFeeling();
    
    },[]);


    const getFeeling = async () => {

        const result = await axios.get('http://localhost:3000/feeling');

        setFeelingCollection({
            ...feelingCollection, feeling: result.data.result
        });

    };

    const searchEngine = () => {
        // console.log(feelingCollection.feeling,'Esto es el ESTADO');
        const arraySearch = feelingCollection.feeling.filter(find =>
            find.name.toLowerCase().includes(search.explore.toLowerCase())
        );

        setData({
            ...data, feelingResult: arraySearch
        });

    };

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) searchEngine()
    };

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
                    onChange={stateSearchHandler}
                    onKeyDown={handleOnKeyDown}
                    name="explore"
                    type="search"
                    >Buscar
                </Search>
                
           <div cl1assName="cardFeeling">
                    {
                        data.feelingResult?.map(feelingArray => {
                            return(

                                <CardImg
                                    picture={feelingArray.picture}
                                    name={feelingArray.name}
                                    description={feelingArray.description}
                                    example={feelingArray.exampple}
                                />
                                // <CardImg
                                //     picture={image.picture}
                                // /> 
                            )
                        })
                            
                    }
                    </div> 
            </div>
        )

    }
}

export default FellingCollection
