import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    const { title, thumbnail, price, condition } = this.props;

    return (
      <div>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt="product" />
        <p>{`R$${price}`}</p>
        <h4>Especificações Técnicas: </h4>
        <ul>
          <li>{ condition }</li>
        </ul>
        <Link to="/meucarrinho">Carrinho</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  condition: PropTypes.string,
}.isRequired;

export default ProductDetails;
