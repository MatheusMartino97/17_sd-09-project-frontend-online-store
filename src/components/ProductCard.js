import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.productId }</h1>
      </div>
    );
  }
}

export default ProductCard;
