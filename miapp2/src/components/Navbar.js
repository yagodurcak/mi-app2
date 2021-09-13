import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import  ThemeContext from '../context/cartContext';

const Navbar = () => {

  const {articulos, carrito} = useContext(ThemeContext);


  return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to={`/`}><a className="navbar-brand mx-5" >
            Tienda Virtual
          </a></Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end mx-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={`/`}>                
                <a className="nav-link active" aria-current="page" >
                  Home
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/catalogo`} >
                <a className="nav-link" >
                  Catalogo
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart">
                <a className="nav-link">

                <i class="bi bi-cart">{articulos}</i>
                             
                </a>
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;