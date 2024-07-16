import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {},
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
