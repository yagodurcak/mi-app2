import React,{ createContext, useState, useEffect } from "react";
import {productosJson} from "../data/products";
import {collection, getDocs } from 'firebase/firestore';
import {getData } from '../firebase';

// 1 CREACION DE CONTEXTO SIMPLE VACIO

const ThemeContext = createContext();

export const CarritoProvider = ({children}) => {  
  // 1 creo un estado para mostrar la lista
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // useEffect no puede asincronico

    // 2 PIDO LOS DATOS (truco: usar async/await)
    const getPets = async () => {
      // 3 obtener colleccion
      const petCollection = collection(getData(), 'productos');

      // 4 obtener Snapshot (foto de la lista en ese momento)
      const petSnapshot = await getDocs(petCollection);

      // 5 obtener datos en forma de json con data()
      const petList = petSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // 6 setear el estado con la lista
      // console.log(petList);
      setPets(petList);
    };
    // segunda parte del truco ejecutar la funcion asincronica
    getPets();

    // array vacio, se ejecuta cuando se monta <app />
  }, []);

  

      // 2 ESTADO QUE QUIERO COMPARTIR
    
  
    const [carrito, setCarrito] = useState([]);
    const [articulos, setArticulos] = useState(0)

    useEffect(() => {

      carrito.map(prod => setArticulos(articulos + parseInt(prod.cantidad)));
      
    }, [carrito]);


    return( 

      // 3 COMPARTIR EL ESTADO GLOBAL (Provider/value)

    <ThemeContext.Provider value={{pets, setCarrito,carrito, setPets, articulos}}>

              {/* componentes hijos  */}
              {children}

    </ThemeContext.Provider>
    )}




export default ThemeContext;