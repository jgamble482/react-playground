import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      const existingItem = state.items[existingIndex];
      let updatedItems;
      let updatedItem;
      if(existingItem) {
        updatedItem = {
            ...existingItem,
            amount: existingItem.amount + action.payload.amount
        }
        updatedItems = [...state.items];
        updatedItems[existingIndex] = updatedItem;
      } else {
          updatedItems = [...state.items, action.payload]
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + (action.payload.price * action.payload.amount),
      };
    case "REMOVE_ITEM":
      const arr = state.items.filter(item => item.id === action.payload);
      return {
          items: arr,
          ...state
      }
    default:
      break;
  }
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultState);
  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
export { CartContext };
