import React from 'react';


const Board = (props) => {
    return (
        <div>
            {/* <div class="card border-success mb-3" style="max-width: 18rem;">
                <div class="card-header">Header</div>
                <div class="card-body text-success">
                    <h5 class="card-title">{props.expression}</h5>
                    <p class="card-text">{props.meaning}</p>
                </div>
            </div>             */}


<div class="card">
  <div class="card-header">
  {props.children}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{props.expression}</p>
      <footer class="blockquote-footer">{props.meaning}</footer>
    </blockquote>
  </div>
</div>
        </div>
    )
}

export default Board
