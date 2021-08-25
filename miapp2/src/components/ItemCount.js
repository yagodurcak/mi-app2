import React, {useState, useEffect} from 'react';


const ItemCount = () => {
  const [contador, setContador] = useState(1);

  let Restar = () => {
    setContador(contador - 1)
  }
  let Sumar = () => {
    setContador(contador + 1)
  }
  

  
  const Stock = (stock, contador) => {
      
    if (stock == contador) {

    

        Sumar = () => {
            setContador(contador)
          };


       

        // setContador("No hay mas Stock!");

        return "Numero: " + contador

        } else { 
    
        
        return "Numero: " + contador
    }
  }
  




  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-3">
        <div className="card ">
          <div className="card-body">
            <h3 className="card-text">Contador</h3>
            <div className="letrero">
              <div className="card d-flex flex-row justify-content-between">
                <a
                  className="btn btn-primary"
                  onClick={() => Restar() }
                >
                  - 
                </a>
                <h4>{Stock(10, contador)}</h4>                
                <a
                  className="btn btn-primary"
                  onClick={() => Sumar()}
                >
                  +
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
