import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProductList } from './pages';
import { ShoppingCart } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductList } />
        <Route path="/meucarrinho" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
