import React from 'react'

const Modal = (props) => {
    console.log(props);
    return (
        <div className="modalProfile">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            ¿Como te sientes?
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">¿Como te sientes?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <select class="form-select" aria-label="Default select example" onChange={props.onChange} name={props.name}>
                    <option selected>Selecciona una emoción</option>
                    
                    {props.feeling?.map(selected => 
                    <option 
                        key={selected._id} 
                        value={selected.picture}
                    >
                        {selected.name}
                    </option>)}
                </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" onClick={props.onClick} >Guardar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Modal
