import React,{ useContext }  from 'react';
import ThemeContext from '../context/cartContext';

const CardCart = (props) => {

    const {setCarrito,carrito, articulos, setArticulos} = useContext(ThemeContext);

    
    
   const eliminarItem = (id) => {    
     
    
    
     const newCart = carrito.filter(prod => (prod.id != id))
 
     setCarrito(newCart);

     var art= 0;
     
     setArticulos(art);

          

     console.log(art);
    

   };


    return (  

        <div className="card mt-5">
        <div className="card-body d-flex justify-content-between">
            <h3 className="card-title">{props.nombre} </h3>
            <h3 className="card-title">Cantidad: {props.cantidad} </h3>
            <h3 className="card-text">$ {props.precio} </h3>
            <button className="btn btn-danger" onClick={()=>eliminarItem(props.id)}>Elminar</button>
        </div>
    </div>
    );
}
 
export default CardCart;