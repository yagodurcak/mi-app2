
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (


    <BrowserRouter> 
            <Navbar/>
            <Switch>
              <Route exact path="/">
                    <ItemListContainer />
              </Route>
              <Route exact  path= "/item/:id">
                    <ItemDetailContainer />
              </Route>
            </Switch>
    </BrowserRouter>
   
  );
}

export default App;
