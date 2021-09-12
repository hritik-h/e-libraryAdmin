import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import ProductDescription from './Components/ProductDescription';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        
        <Switch>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/product_description">
            <Header />
            <ProductDescription />
          </Route>

          {/* !!! Default Route at bottom !!! */}
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

        <Redirect to="/" />

      </div>
    </Router>
  );
}

export default App;