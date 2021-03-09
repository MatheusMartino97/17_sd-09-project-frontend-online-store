import React from 'react';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <input value={ searchText } onChange={ (event) => this.changeHandler(event) } />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

export default ProductsList;
