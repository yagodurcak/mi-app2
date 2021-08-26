import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {productosJson} from "../data/products"
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    const {id} = useParams();



    useEffect(() => {

       new Promise((resolve, reject) => {
            
            setTimeout(() => {
                resolve(productosJson.filter((prod) => prod.id == id))
            }, 2000);
        }).then((data)=> setProduct(data[0]));   
    
    }, []);


    return ( 
        <ItemDetail {...product} />
     );
}
 
export default ItemDetailContainer;