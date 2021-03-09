import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/meucarrinho">carrinho</Link>
        <input value={ searchText } onChange={ (event) => this.changeHandler(event) } />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Categories />
      </div>
    );
  }
}

export default ProductsList;
