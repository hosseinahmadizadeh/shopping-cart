import { Card, Button } from "react-bootstrap";

function ProductItem({ product }) {
  return (
    <Card className="mt-5 card-bg">
      <Card.Body>
        <Card.Img
          variant="top"
          src={product.image}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Title align="left" className="text-light pt-4">
          {product.title}
        </Card.Title>
        <Card.Text align="left" className="text-light">
          {product.price}
        </Card.Text>
        <Button variant="btn btn-outline-secondary" className="text-white">
          Order this item
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
