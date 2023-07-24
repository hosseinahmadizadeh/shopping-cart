import { createContext, useState } from "react";

import { getProductData } from "../data/items";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    console.log(cartProducts);
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;
    console.log(quantity);
    if (quantity === undefined) {
      return 0;
    }
    console.log(quantity);
    return quantity;
  }

  function addItemToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id;
      })
    );
  }

  function removeItemFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function getTotalAmount() {
    let totalAmount = 0;
    cartProducts.map((item) => {
      const productData = getProductData(item.id);
      totalAmount += productData.price * item.quantity;
    });
  }

  const ContextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };
  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}
