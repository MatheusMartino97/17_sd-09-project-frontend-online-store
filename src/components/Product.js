import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    this.state = {
      title,
      thumbnail,
      price,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.saveStorage();
  }

  constructObjectToSave() {
    const { title, thumbnail, price } = this.state;
    const obj = { title, thumbnail, price };
    return obj;
  }

  saveStorage() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    const products = JSON.parse(localStorage.getItem('cart'));
    products.push(this.constructObjectToSave());
    localStorage.setItem('cart', JSON.stringify(products));
    console.log(JSON.parse(localStorage.getItem('cart')));
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
        <p type="number" data-testid="shopping-cart-product-quantity" value="0" />
      </div>
    );
  }
}

Product.propTypes = { product: PropTypes.object }.isRequired;

export default Product;
