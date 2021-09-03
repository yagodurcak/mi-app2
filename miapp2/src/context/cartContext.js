import React,{ createContext, useState } from "react";
import {productosJson} from "../data/products";


// 1 CREACION DE CONTEXTO SIMPLE VACIO

const ThemeContext = createContext();

export const CarritoProvider = ({children}) => {

      // 2 ESTADO QUE QUIERO COMPARTIR
    
    const [products, setProducts] = useState(productosJson);
    const [carrito, setCarrito] = useState([]);

    return( 

      // 3 COMPARTIR EL ESTADO GLOBAL (Provider/value)

    <ThemeContext.Provider value={{products, setCarrito,carrito, setProducts}}>

              {/* componentes hijos  */}
              {children}

    </ThemeContext.Provider>
    )}




export default ThemeContext;