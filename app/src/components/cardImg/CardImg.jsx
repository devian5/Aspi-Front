import React from 'react'

const CardImg = (props) => {

    return (
        <div className="cardImgFeeling">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-12">
                        <img src={props.picture} alt="ImgFeeling"/>
                    </div>
                    <div class="col-md-12">
                        <div class="card-body">
                            <h5 class="card-title">{props.name}</h5>
                            <p class="card-text">{props.description}</p>
                            <p class="card-text">{props.example}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardImg
