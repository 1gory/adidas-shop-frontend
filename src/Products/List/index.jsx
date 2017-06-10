import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Filters from './Filters';
import Card from './Card';
import get from '../../api/getResource';
import getImage from '../../api/getImage';

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

    this.load = this.load.bind(this);
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(props) {
    this.load(props);
  }

  load(props) {
    get(props.match.url).then((data) => {
      const products = data.items.map((product) => {
        const imageUrl = getImage(product.images[0].id, product.images[0].fileName, 256);
        return { price: product.price, image: imageUrl, id: product.id };
      });
      this.setState({ products });
    });
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
