import React, {useState} from 'react';
// import ItemCount from './ItemCount';
import ItemCount2 from './ItemCount2';
import "./ItemDetail.css"

const ItemDetail = (props) => {

  const [items, setItems] = useState(0);



    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img src={props.img} alt="" className="my-5 mx-5" className="imagen"/>
          </div>
            <div className="col-6 align-items-center">
                <h1 className="text-center">{props.nombre}</h1>
                <h1 className="text-center">${props.precio}</h1>   
                {/* <h1 className="text-center"> Stock: {items}</h1>    */}
             
                <ItemCount2 onAdd= {setItems} stock= {props.stock} items={items}/>       

                <h5>Descripción: {props.descripcion}</h5>
                <h5>Caracteristicas: {props.caracteristicas}</h5>
                
            </div>

    
             </div>
      </div>
    );
}
 
export default ItemDetail;