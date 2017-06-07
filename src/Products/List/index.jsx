import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Filters from './Filters';
import Card from './Card';
import get from '../../api/resources';
import getImage from '../../api/cdn';

const List = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  flex-wrap: wrap;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.updateProducts = this.updateProducts.bind(this);
    get(props.match.url).then(data => this.updateProducts(data.items));
  }

  componentWillReceiveProps(props) {
    get(props.match.url).then(data => this.updateProducts(data.items));
  }

  updateProducts(data) {
    const products = data.map((product) => {
      const imageUrl = getImage(product.images[0].id, product.images[0].fileName, 256);
      return { price: product.price, image: imageUrl, id: product.id };
    });

    this.setState({ products });
  }

  render() {
    return (
      <main>
        <Filters />
        <List>
          <Row>
            {this.state.products.map(product => (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card
                  price={product.price}
                  hasDiscount={false}
                  imgSrc={product.image}
                  to={`${this.props.match.url}/${product.id}`}
                />
              </Col>
            ))}
          </Row>
        </List>
      </main>
    );
  }
}
