import React, { Component } from 'react';
import ProductDetails from '../components/ProductDetails';
import * as api from '../services/api';

class Details extends Component {
  constructor(props) {
    super(props);

    this.fetchProductById = this.fetchProductById.bind(this);

    this.state = {
      title: '',
      thumbnail: '',
      price: '',
      warranty: '',
    };
  }

  componentDidMount() {
    this.fetchProductById();
  }

  async fetchProductById() {
    const { match } = this.props;
    const { params } = match;
    const request = await api.getProductById(params.id);

    const { title, thumbnail, price, warranty } = request[0].body;

    this.setState({
      title,
      thumbnail,
      price,
      warranty,
    });
  }

  render() {
    const { title, thumbnail, price, warranty } = this.state;

    return (
      <div>
        <ProductDetails
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
          warranty={ warranty }
        />
      </div>
    );
  }
}

export default Details;
