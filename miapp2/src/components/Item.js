import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
      <div className="col-3">
        <div className="card carta">
          <div className="card-body card text-center">
            <img src={props.img} alt="" className="card-img-top" />

            <h2 className="card-title text-center">{props.nombre}</h2>
            <h2 className="card-text text-center">${props.precio}</h2>
            <Link to= {`/item/${props.id}`} >
                <button className="btn btn-primary">Detalles</button>
                </Link>
            
          </div>
        </div>
      </div>
    );
}
 
export default Item;