import React, {useState} from 'react';


const ItemCount2 = ({onAdd, stock, items} ) => {



    const Restar = () => {

        console.log(stock, items);

        if (items > 0) {
            
            onAdd(items - 1 );
        }
        
      
    
    };
    const Sumar = () => {

      console.log(stock, items);

        if (items < stock) {
            
            onAdd(items + 1 );
        }

    }; 


    return (
        
      <div className="container d-flex justify-content-center my-3">
          <div className="card col-4">
            <div className="card-body">
              <div className="d-flex justify-content-evenly">
                <button className="btn btn-primary" onClick={Restar}>-</button>
                <h3 className="card-text">{items}</h3>
                <button className="btn btn-primary" onClick={Sumar}>+</button>
                
              </div>
              
            </div>
          </div>
      </div>
    );
} 
 
export default ItemCount2;