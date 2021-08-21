import React, {useState, useEffect} from 'react'
import Item from './Item';
import {productosJson} from "../data/products"


const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(productosJson)
            }, 2000);
            
        }).then((data)=>setProducts(data))
        
        }
    , []);





    return ( 
        <div className="row">
            
      
            { products.map((products)=>
            <Item nombre={products.nombre} img={products.img} precio={products.precio} id={products.id}/>)}


         
        </div>
      
        )
        
    ;
}
 
export default ItemList;