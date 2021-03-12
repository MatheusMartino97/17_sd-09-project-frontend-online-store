import React from 'react';
import Products from '../components/Products';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null };

    this.getDataFromLocalStorage = this.getDataFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getDataFromLocalStorage();
  }

  async getDataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('cart'));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    if (products === null) {
      return (
        <div>
          <p>carrinho de compras!!</p>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        <p>carrinho de compras!!</p>
        <Products products={ products } />
      </div>
    );
  }
}

export default ShoppingCart;
