import React from 'react';
import * as mlbAPI from '../services/api';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: undefined,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toBeShown = this.toBeShown.bind(this);
  }

  async handleClick() {
    const { searchText } = this.state;
    const { results } = await mlbAPI.getProductsFromCategoryAndQuery('', searchText);

    this.setState({
      products: results,
    });
  }

  changeHandler(event) {
    this.setState({ searchText: event.target.value });
  }

  toBeShown() {
    const { products } = this.state;

    if (products === []) return 'Nenhum produto foi encontrado.';

    if (products) {
      const productList = products.map((product) => (
        <div data-testid="product" key={ product.id }>
          <div>{ product.title }</div>
          <img src={ product.thumbnail } alt="product" />
          <div>{product.price}</div>
        </div>
      ));
      return productList;
    }
  }

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <input
          data-testid="query-input"
          value={ searchText }
          onChange={ (event) => this.changeHandler(event) }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <div>
          { this.toBeShown() }
        </div>
      </div>
    );
  }
}

export default ProductsList;
