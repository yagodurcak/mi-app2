import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (

        <div className="container">
            <h1 className="mt-5 text-center">Bienvenido a nuestra tienda on-line</h1>
            <div className=" d-flex justify-content-center mt-5">
                <Link to={`/catalogo`}><button className="btn btn-primary">Ver Catalogo</button></Link>
            </div>

        </div>
      );
}
 
export default Home;