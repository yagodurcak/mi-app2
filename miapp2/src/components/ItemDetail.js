import React, {useState, useContext} from 'react';
// import ItemCount from './ItemCount';
import ItemCount2 from './ItemCount2';
import "./ItemDetail.css";
import { ThemeContext} from '../context/cartContext';

const ItemDetail = (props) => {

  const [items, setItems] = useState(0);

  const {cart, setCart} = useContext(ThemeContext);

  const enviarCart = (nombre, items, precio, id) => {
    
    setCart({
      item: {
        nombre: nombre,
        precio: precio,
        id:id},
      cantidad: items,
      
    })

    console.log(cart);
  }
  


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
                <div className="d-flex justify-content-center">{ (items > 0 ) 
                ? <button className="btn btn-success mt-2 " onClick={() =>enviarCart(props.nombre, items, props.precio, props.id)}>Terminar compra</button> 
                : null }
                </div>   

                <h5>Descripción: {props.descripcion}</h5>
                <h5>Caracteristicas: {props.caracteristicas}</h5>
                
                
            </div>

    
             </div> 
      </div>
    );
}
 
export default ItemDetail;