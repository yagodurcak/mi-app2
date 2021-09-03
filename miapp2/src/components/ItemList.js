import React, {useState, useEffect, useContext} from 'react';
import Item from './Item';
import {productosJson} from "../data/products";



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
        <div>
            <div className="row">
            
                { products.map((pepe)=>
                <Item nombre={pepe.nombre} img={pepe.img} precio={pepe.precio} id={pepe.id}/>)}
            
            </div>
                
        </div>
        
      
        )
        
    ;
}
 
export default ItemList;