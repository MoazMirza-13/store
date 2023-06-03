import { ActionTypes } from "../constans/action-types";

const initialState = {
  product: [],
  selectedProduct: null,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };
    default:
      return state;
  }
};
