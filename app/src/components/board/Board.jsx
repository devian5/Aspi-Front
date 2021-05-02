import React from 'react';


const Board = (props) => {
    return (
        <div className="board">
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
