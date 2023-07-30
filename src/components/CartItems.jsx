import { useContext } from "react";

import { Button } from "react-bootstrap";

import { CartContext } from "../context/CartContext";
import { getProductData } from "../data/items";

function CartItems({ id, quantity }) {
  const cart = useContext(CartContext);
  const productData = getProductData(id);
  return (
    <>
      <p>{productData.title}</p>
      <p>Count: {quantity}</p>
      <p>Price: {`${quantity * productData.price} $`}</p>
      <Button
        size="sm"
        className="mb-5 text-white"
        variant="btn btn-outline-secondary"
        onClick={() => cart.deleteFromCart(id)}
      >
        DELETE
      </Button>
    </>
  );
}

export default CartItems;
