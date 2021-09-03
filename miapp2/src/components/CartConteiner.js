import React,{ useContext }  from 'react';
import ThemeContext from '../context/cartContext';
import CardCart from './CardCart';


const CartContainer = () => {



   const {setCarrito,carrito} = useContext(ThemeContext);


   const borrarTodo = () => {
       setCarrito([])
   }
   

   
 


    // console.log(carrito);

    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                { carrito.map((pepe)=>
                <CardCart nombre={pepe.nombre} precio={pepe.precio} cantidad={pepe.cantidad} id={pepe.id} />)}
                </div>
                <button className="btn btn-danger mt-4" onClick={()=>borrarTodo()}>Eliminar todos</button>
            </div>
        </div>
      );
}
 
export default CartContainer;