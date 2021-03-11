import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return (<div>Nenhum produto foi encontrado.</div>);
    }
    if (products) {
      return products
        .map((product) => (
          <div key={ product.id } data-testid="product">
            <h1>{ product.title }</h1>
            <img src={ product.thumbnail } alt="product" />
            <div>{product.price}</div>
          </div>
        ));
    }
  }
}

Products.propTypes = { products: PropTypes.object }.isRequired;

export default Products;
