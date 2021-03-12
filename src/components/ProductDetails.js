import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    const { title, thumbnail, price, warranty } = this.props;

    return (
      <div>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt="product" />
        <h4>Especificações Técnicas: </h4>
        <ul>
          <li>{warranty}</li>
        </ul>
        <Link to="/meucarrinho">Carrinho</Link>
      </div>
    );
  }
}

export default ProductDetails;
