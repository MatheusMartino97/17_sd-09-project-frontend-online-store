import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import DetailsList from '../components/DetailsList';

class Details extends Component {
  render() {
    return (
      <div>
        <ProductCard productId={ this.props.match.params.id }/>
        <DetailsList />
      </div>
    );
  }
}

export default Details;
