import { useState, useContext } from "react";
import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap";
import { BsCart } from "react-icons/bs";

import { CartContext } from "../context/CartContext";

import CartItems from "./CartItems";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const cart = useContext(CartContext);

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <NavbarBs className="border-bottom border-secondary">
        <NavbarBs.Collapse className="justify-content-end">
          <Button
            onClick={handleShow}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            ({productCount})<BsCart className="mx-2 mb-1"></BsCart>Orders
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal show={showModal} onHide={handleClose} contentClassName="card-bg">
        <Modal.Header>
          <Modal.Body>
            {productCount > 0 ? (
              <>
                <h3 className="mb-4">Orders</h3>
                {cart.items.map((item) => (
                  <CartItems
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  ></CartItems>
                ))}
                <h3>Total Price: {`${cart.getTotalAmount()} $`}</h3>
              </>
            ) : (
              <h3>The shopping cart is empty!</h3>
            )}
            <Button
              onClick={handleClose}
              variant="btn btn-light"
              className="mt-5 mx-5 "
            >
              Close
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Navbar;
