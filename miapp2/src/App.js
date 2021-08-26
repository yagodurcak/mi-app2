
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import React, {useState} from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ThemeContext } from './context/cartContext';
import CartContainer from './components/CartConteiner';
import Home from './components/Home';



function App() {

  const [cart, setCart] = useState({});



  return (
    <ThemeContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/catalogo">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <CartContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
