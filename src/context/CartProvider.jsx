import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      let updatedItems = [...state.items];
      updatedItems = [...state.items, action.item];
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount
      };
    case "REMOVE":
      return state;
    case "CLEAR":
      return state;
    default:
      return state;
  }
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD", item });
    },
    removeItem: () => {},
    clearItem: () => {},
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
