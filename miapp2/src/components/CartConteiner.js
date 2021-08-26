import React,{ useContext }  from 'react';
import { ThemeContext } from '../context/cartContext';

const CartContainer = () => {
    const { cart } = useContext(ThemeContext);



    console.log("carro", cart);
    return (

        <div>
            <h1>hola!!!</h1>
        </div>
      );
}
 
export default CartContainer;