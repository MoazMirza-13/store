import { ActionTypes } from "../constans/action-types";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const increaseQuantity = (product) => {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    payload: product,
  };
};

export const decreaseQuantity = (product) => {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: product,
  };
};
export const removeItem = (product) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: product,
  };
};
export const emptyCart = (product) => {
  return {
    type: ActionTypes.TO_EMPTY_CART,
    payload: product,
  };
};
export const countCartItems = () => {
  return {
    type: ActionTypes.GET_CART_COUNT,
  };
};
