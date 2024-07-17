import { createContext, useReducer } from "react";

export const CartContext = createContext();

//state default olan değer action ise productitemdan gelen basılan item değeri
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      //finindex ilgili ürün varsa o index numarasını döner yoksa -1 döner
      // eslint-disable-next-line no-case-declarations
      const existingCartItemIndex = state.items.findIndex((item) => {
        item.id === action.item.id;
      });

      // eslint-disable-next-line no-case-declarations
      let updatedItems = [...state.items];

      if (existingCartItemIndex !== -1) {
        updatedItems[existingCartItemIndex] = {
          ...state.items[existingCartItemIndex],
          amount:
            state.items[existingCartItemIndex].amount + action.items.amount,
        };
      } else {
        // -1 dönerse
        updatedItems = [...state.items, action.item];
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
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

const CartProvider = ({ children }) => {
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
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
