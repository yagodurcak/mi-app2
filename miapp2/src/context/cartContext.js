import React,{ createContext, useState, useEffect } from "react";
import {productosJson} from "../data/products";


// 1 CREACION DE CONTEXTO SIMPLE VACIO

const ThemeContext = createContext();

export const CarritoProvider = ({children}) => {

      // 2 ESTADO QUE QUIERO COMPARTIR
    
    const [products, setProducts] = useState(productosJson);
    const [carrito, setCarrito] = useState([]);
    const [articulos, setArticulos] = useState(0 )

    useEffect(() => {

      carrito.map(prod => setArticulos(articulos + parseInt(prod.cantidad)  ));
      
    }, [carrito])


    console.log(articulos);
    

    


    return( 

      // 3 COMPARTIR EL ESTADO GLOBAL (Provider/value)

    <ThemeContext.Provider value={{products, setCarrito,carrito, setProducts, articulos}}>

              {/* componentes hijos  */}
              {children}

    </ThemeContext.Provider>
    )}




export default ThemeContext;