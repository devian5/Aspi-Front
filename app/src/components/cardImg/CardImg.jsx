import React from 'react'

const CardImg = (props) => {

    console.log(props);
    return (
        <div>
            <div class="card">
              <img src={props.picture} class="card-img-top" alt="feeling"/>
                <div class="card-body">
                
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            {/* <div class="card" >
                <img src={props.picture} class="card-img-top" alt="psdsrops"></img>

            </div> */}
            {/* <img src={props.picture} alt="proprpr"/> */}
        </div>
    )
}

export default CardImg
