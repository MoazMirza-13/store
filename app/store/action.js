export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};
