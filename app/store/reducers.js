const initialState = {
  cart: [],
};

// const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cart: [...state.cart, action.payload],
//       };
//     default:
//       return state;
//   }
// };
const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      cart: [console.log("adding"), action.payload],
    };
  } else {
    return state;
  }
};

export default reducer;
