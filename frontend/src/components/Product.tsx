import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    </Card.Body>
  </Card>
);

export default Product;
