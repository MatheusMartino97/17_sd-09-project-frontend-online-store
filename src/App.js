import React from 'react';
import { HashRouter as BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, ShoppingCart, Details } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/meucarrinho" component={ ShoppingCart } />
        <Route path="/details/:id/" render={ (props) => <Details { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
