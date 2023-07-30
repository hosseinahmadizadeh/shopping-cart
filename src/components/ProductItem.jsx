import { useContext } from "react";

import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { BsFillTrash3Fill } from "react-icons/bs";

import { CartContext } from "../context/CartContext";

function ProductItem({ product }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

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
          {`${product.price} $`}
        </Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="12" className="text-white">
                Count: {productQuantity}
              </Form.Label>
              <Col sm="12">
                <Button
                  onClick={() => cart.addItemToCart(product.id)}
                  sm="12"
                  className="mx-1 text-white"
                  variant="btn btn-outline-secondary"
                >
                  +
                </Button>
                <Button
                  onClick={() => cart.removeItemFromCart(product.id)}
                  sm="12"
                  className="mx-1 text-white"
                  variant="btn btn-outline-secondary"
                >
                  -
                </Button>
                <Button
                  onClick={() => cart.deleteFromCart(product.id)}
                  sm="12"
                  className="mx-1"
                  variant="btn btn-outline-secondary"
                >
                  <BsFillTrash3Fill className="mb-1"></BsFillTrash3Fill>
                </Button>
              </Col>
            </Form>
          </>
        ) : (
          <Button
            onClick={() => cart.addItemToCart(product.id)}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            ADD TO BAG
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
