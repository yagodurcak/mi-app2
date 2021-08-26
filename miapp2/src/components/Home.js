import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import tienda from "../img/tienda.png"



const Home = () => {
    return (
        <div className="container front ">
            <div className="row d-flex align-items-end">
                <div className="col-6 texto">
                    <h1 className="mt-5 title">Bienvenido a nuestra tienda</h1>
                    <h5 className="text-secondary subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt commodi ad vero, unde, enim necessitatibus minima iusto nostrum modi aperiam aliquid distinctio, itaque vitae id sit recusandae officiis ducimus voluptatem?</h5>
                    <div className=" mt-5">
                        <Link to={`/catalogo`}><button className="btn btn-primary">Ver Catalogo</button></Link>
                    </div>
                </div>
                <div className="col-6">
                    <img src= {tienda} alt=""  className="img-fluid foto"/>
                
                </div>
            </div>
        </div>

      );
}
 
export default Home;