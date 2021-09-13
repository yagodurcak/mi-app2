import React, {useState, useContext} from 'react';
// import ItemCount from './ItemCount';
import ItemCount2 from './ItemCount2';
import "./ItemDetail.css";
import  ThemeContext from '../context/cartContext';
import { Link } from 'react-router-dom';


const ItemDetail = (props) => {

  const [items, setItems] = useState(0);

  const {setCarrito,carrito} = useContext(ThemeContext);


  const [error, setError] = useState(false)



    const verCarrito = () => {
      
      //defino producto para el carrito
   
    function yaEsta(producto) {
        return producto.id === props.id;
    }


    
    if (carrito.find(yaEsta)) {
      setError(true);
      return
    } else {
      setError(false);
      //  enviar producto al carrito 
      setCarrito([...carrito, 
        {
          nombre: props.nombre,
          precio: props.precio,
          cantidad: items,
          id: props.id        
        }
  ])

    }
     
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

                { error ? <h3 className="text-danger text-center">Ya ingresaste este producto </h3> : null }

                <div className="d-flex justify-content-center">{ (items > 0 ) 
                ? <button className="btn btn-success mt-2 " onClick={verCarrito} >Agregar al Carrito</button> 
                : null }
                </div>   
                
                <Link to="/cart" className="d-flex justify-content-center">               
                
                    <button className="btn btn-primary  my-3 "> Ir al carrito</button>
                </Link>

                <h5>Descripción: {props.descripcion}</h5>
                <h5>Caracteristicas: {props.caracteristicas}</h5>
                
                
            </div>

    
             </div> 
      </div>
    );
}
 
export default ItemDetail;