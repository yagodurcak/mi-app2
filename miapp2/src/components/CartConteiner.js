import React,{ useContext, useState }  from 'react';
import ThemeContext from '../context/cartContext';
import CardCart from './CardCart';
import { Link } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import {getData } from '../firebase';
import {collection} from 'firebase/firestore';
import uuid from "../../node_modules/uuid/dist/v4"


const CartContainer = () => {

   const {setCarrito,carrito, articulos, setArticulos} = useContext(ThemeContext);

   const [cliente, setCliente] = useState({
       nombre: "",
       email:"",
       telefono:"",
       pedido:""
   })

   

   const borrarTodo = () => {
       setCarrito([]);      

   };
   const enviarOrden = async () => {

    // console.log('FIN de compra');
    const compra = {

    }

    const orderCollection = collection(getData(), "orders");


    const orderReference = await setDoc(doc(orderCollection, uuid()),{ 
        
        
        pedido: carrito});
    console.log(orderReference);

   };

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            {carrito.length == 0 ? (
              <div>
                <h2 className="text-center mt-5">
                  NO HAY PRODUCTOS EN EL CARRITO
                </h2>
                <Link
                  to="/catalogo"
                  className="d-flex justify-content-center mt-5"
                >
                  {" "}
                  <button className="btn btn-primary">Volver a Catalogo</button>
                </Link>
              </div>
            ) : (
              <div>
                {carrito.map((pepe) => (
                  <CardCart
                    nombre={pepe.nombre}
                    precio={pepe.precio}
                    cantidad={pepe.cantidad}
                    id={pepe.id}
                  />
                ))}

<div className="row mt-5 p-4">
          <div className="card">
            <div className="container">
              <form action="" >
               
                <div className="form-group">
                  <label htmlFor="">Nombre</label>
                  <input
                    name="mascota"
                   onChange={}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email </label>
                  <input
                    name="dueño"
                   onChange={}
                    type= "email"
                    className="form-control"
                  />
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="">Teléfono </label>
                  <input
                    name="dueño"
                   onChange={}
                    type= "number"
                    className="form-control"
                  />
                </div>

                <div className="pb-4">
                    <button
                      className="btn btn-danger mt-4"
                      onClick={() => borrarTodo()}
                    >
                      {" "}
                      Eliminar todos
                    </button>
                    <button
                      className="btn btn-primary mt-4 mx-4"
                      onClick={() => enviarOrden()}
                    >
                      {" "}
                      Finalizar compra
                    </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
               
              </div>
            )}
          </div>
        </div>
       
      </div>
    );
       
};

export default CartContainer;