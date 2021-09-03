import React,{ useContext }  from 'react';
import ThemeContext from '../context/cartContext';
import CardCart from './CardCart';
import { Link } from 'react-router-dom';


const CartContainer = () => {

   const {setCarrito,carrito} = useContext(ThemeContext);
    

   const borrarTodo = () => {
       setCarrito([])
   };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {(carrito.length == 0) ? <div>
                        
                            <h2 className="text-center mt-5">NO HAY PRODUCTOS EN EL CARRITO</h2>
                            <Link to="/catalogo" className= "d-flex justify-content-center mt-5"> <button className="btn btn-primary">Volver a Catalogo</button></Link>
                    </div>
                        
                     : 
                         <div>
                             {carrito.map(pepe => ( <CardCart nombre={pepe.nombre} precio={pepe.precio} cantidad={pepe.cantidad} id={pepe.id} />))}
                             <button className="btn btn-danger mt-4" onClick={()=>borrarTodo()}> Eliminar todos</button>
                         </div>
                            }
                    
                </div>
            </div>
            </div>)
       
};

export default CartContainer;