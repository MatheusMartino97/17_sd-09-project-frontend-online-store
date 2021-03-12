import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductDetails from '../components/ProductDetails';

class Details extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;

    const { title, thumbnail, price, condition } = product;

    return (
      <div>
        <ProductDetails
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
          condition={ condition }
        />
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.objectOf({}),
}.isRequired;

export default Details;
