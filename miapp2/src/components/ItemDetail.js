import React from 'react';
import "./ItemDetail.css"

const ItemDetail = (props) => {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img src={props.img} alt="" className="my-5 mx-5" className="imagen"/>
          </div>
            <div className="col-6 align-items-center">
                <h1>{props.nombre}</h1>
                <h1>${props.precio}</h1>
                <h5>Descripción: {props.descripcion}</h5>
                <h5>Caracteristicas: {props.caracteristicas}</h5>
            </div> </div>
      </div>
    );
}
 
export default ItemDetail;