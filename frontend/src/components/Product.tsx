import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

type ProductProps = {
  product: ProductType;
};

type ProductType = {
  _id: string;
  brand: string;
  category: string;
  countInStock: number;
  description: string;
  image: string;
  name: string;
  numReviews: number;
  price: number;
  rating: number;
};

const Product = ({ product }: ProductProps) => (
  <Card className="my-3 p-3 rounded">
    <Link to={`/product/${product._id}`}>
      <Card.Img src={product.image} variant="top" />
    </Link>
    <Card.Body>
      <Link to={`/product/${product._id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as="div">
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Card.Text>
      <Card.Text as="h3">{product.price}</Card.Text>
    </Card.Body>
  </Card>
);

export default Product;
