import React from 'react'

import ItemList from './ItemList';

const ItemListContainer = () => {
    return ( 

        <div className="container">

            <h1 className="h1 text-center my-5">Catalogo de Productos</h1>
          <ItemList/>
          
         

        </div>
     );
}
 
export default ItemListContainer;