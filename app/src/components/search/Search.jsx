import React from 'react'

const Search = (props) => {
    
    // console.log(props);
    
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex">
                    <input 
                        class="form-control me-2" 
                        type={props.type} 
                        name={props.name} 
                        value={props.value}
                        onChange={props.onChange} 
                        onKeyDown={props.onKeyDown} 
                        aria-label="Search"

                    />

                    <button 
                        class="btn btn-outline-success" 
                        type="submit" 
                        onClick={props.onClick}
                    >{props.children}</button>

                    </form>
                </div>    
            </nav>
        </div>
    )
}

export default Search
