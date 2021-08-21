import React from 'react'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand mx-5" href="#">
            Tienda Virtual
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Catalogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="bi bi-cart"></i>
                </a>
              </li>
  
            </ul>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;