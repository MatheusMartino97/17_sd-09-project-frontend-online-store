import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    this.state = {
      title,
      thumbnail,
      price,
      id,
      quantity: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.validateDataFromStorage = this.validateDataFromStorage.bind(this);
  }

  handleClick() {
    this.saveStorage();
  }

  constructObjectToSave() {
    const { title, thumbnail, price, id, quantity } = this.state;
    const obj = { title, thumbnail, price, id, quantity };
    return obj;
  }

  async validateDataFromStorage() {
    const data = JSON.parse(localStorage.getItem('cart'));
    for (let outsideIndex = 0; outsideIndex < data.length; outsideIndex += 1) {
      let counter = 0;
      for (let insideIndex = 0; insideIndex < data.length; insideIndex += 1) {
        if (data[outsideIndex].id === data[insideIndex].id) {
          counter += 1;
        }
      }
      data[outsideIndex].quantity = counter;
    }
    localStorage.setItem('cart', JSON.stringify(data));
  }

  saveStorage() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    const products = JSON.parse(localStorage.getItem('cart'));
    products.push(this.constructObjectToSave());
    localStorage.setItem('cart', JSON.stringify(products));
    this.validateDataFromStorage();
  }

  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h1 data-testid="shopping-cart-product-name">{ product.title }</h1>
        <img src={ product.thumbnail } alt="product" />
        <div>{product.price}</div>
        <button
          onClick={ this.handleClick }
          type="button"
          data-testid="product-add-to-cart"
        >
          add carrinho
        </button>
        <p type="number" data-testid="shopping-cart-product-quantity">
          { product.quantity }
        </p>
        <Link
          to={ {
            pathname: `/details/${product.id}`,
            state: { product },
          } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

Product.propTypes = { product: PropTypes.object }.isRequired;

export default Product;
