import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { SEARCH } from '../../redux/types/meaningTypes';



import Search from '../../components/search/Search';
import Board from '../../components/board/Board';

const DoubleMeaning = (props) => {

    
    
    const [meaning,setMeaning] = useState({
        input: []
    });

    const [search,setSearch] = useState({
        explore: ''
    })
    useEffect(() => {
        getMeaning();
    }, []);

    // const stateHandler = (event) => {
    //     setMeaning({...meaning, [event.target.name]: event.target.value});
    // };

    const stateHandler = (event) => {
        setSearch({...search, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) searchEngine()
    };

    const getMeaning = async () => {
        
        const result = await axios.get('http://localhost:3000/double-meaning/');
        console.log(result.data);
        
        props.dispatch({type: SEARCH, payload: result.data.result})

        setSearch({
            ...search, explore: result.data.result
        });

    };

    const searchEngine = () => {
        console.log(props.meaning,'Esto son las props');
        const arraySearch = props.meaning.filter(find =>
            find.expression.toLowerCase().includes(search.explore.toLowerCase())
        );

        
        setMeaning({
            ...meaning, input: arraySearch
        });

        console.log(arraySearch);
        console.log('BUSCA!');
        
    };
    
    console.log(meaning.input,'YEAH!');

    if(meaning.input.length === 0){
        return (
            <div>
            <Search
                onClick={()=> searchEngine()}
                onChange={stateHandler}
                onKeyDown={handleOnKeyDown}
                name="explore"
                type="search"
                >Buscar
            </Search>
            </div> 
        )
    }else{
        return (
            <div >
                {/* <pre>{JSON.stringify(meaning, null, 2) }</pre> */}
                <Search
                    onClick={()=> searchEngine()}
                    onChange={stateHandler}
                    onKeyDown={handleOnKeyDown}
                    name="explore"
                    type="search"
                    >Buscar
                </Search>
                <div className="searchResult">
                    {
                        meaning.input?.map(findMeaning => {
                            return(
                                <Board
                                    expression={findMeaning.expression}
                                    meaning={findMeaning.meaning}
                                >Doble sentido
                                </Board>
                            )
                        })                        
                    }
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        meaning: state.doubleMeaningReducer.query

    }
}
export default connect(mapStateToProps)(DoubleMeaning)
