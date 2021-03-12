import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends React.Component {
  constructor(props) {
    super(props);

    // const { products } = this.props;

    // this.state = {
    //   products,
    // }

    this.stateProps = this.stateProps.bind(this);
  }

  stateProps() {
    return this.props;
  }

  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return (<div>Nenhum produto foi encontrado.</div>);
    }
    if (products) {
      return products.map((product) => (
        <div key={ product.id } data-testid="product">
          <h1>{product.title}</h1>
          <img src={ product.thumbnail } alt="product" />
          <div>{ product.price }</div>
          <Link to={ `/details/${product.id}` } data-testid="product-detail-link">
            Detalhes
          </Link>
        </div>
      ));
    }
  }
}

Products.propTypes = { products: PropTypes.object }.isRequired;

export default Products;
