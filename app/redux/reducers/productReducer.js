import { ActionTypes } from "../constans/action-types";

const initialState = {
  products: [],
  cartItems: [],
};
//
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const id = payload.id; // Access the id directly from payload
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
        };
      }
    case ActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case ActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};
