import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {productosJson} from "../data/products"
import ItemDetail from './ItemDetail';
import  ThemeContext from '../context/cartContext';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    const {pets,setPets} = useContext(ThemeContext);    

    const {id} = useParams();



    useEffect(() => {

       new Promise((resolve, reject) => {
            
            setTimeout(() => {
                resolve(pets.filter((prod) => prod.id == id))
            }, 0);
        }).then((data)=> setProduct(data[0]));   
    
    }, []);


    return ( 
        <ItemDetail {...product} />
     );
}
 
export default ItemDetailContainer;