import React, {useState, useEffect, useContext} from 'react';
import Item from './Item';
// import ItemPets from './ItemPets';
// import {productosJson} from "../data/products";
import  ThemeContext from '../context/cartContext';



const ItemList = () => {

    const [products, setProducts] = useState([]);

    const {pets,setPets} = useContext(ThemeContext);    

    // console.log(pets);
    // console.log(products);

    useEffect(() => {
        new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(pets)
            }, 0);
            
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