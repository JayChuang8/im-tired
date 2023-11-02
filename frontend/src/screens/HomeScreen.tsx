import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products.js';

const HomeScreen = () => (
  <>
    <h1>Latest Products</h1>
    <Row>
      {products.map(o => (
        <Col key={o._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={o} />
        </Col>
      ))}
    </Row>
  </>
);

export default HomeScreen;
