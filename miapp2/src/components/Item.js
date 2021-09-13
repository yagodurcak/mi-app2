import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = (petss) => {
    return (
      <div className="col-3">
        <div className="card carta">
          <div className="card-body card text-center">
            <img src={petss.img} alt="" className="card-img-top" />

            <h2 className="card-title text-center">{petss.nombre}</h2>
            <h2 className="card-text text-center">${petss.precio}</h2>
            <Link to= {`/item/${petss.id}`} >
                <button className="btn btn-primary">Detalles</button>
                </Link>
            
          </div>
        </div>
      </div>
    );
}
 
export default Item;