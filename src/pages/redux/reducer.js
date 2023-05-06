const initState = {
  course: {},
  cart: [
    { id: 1, name: "Master Your Pronounciation Course", price: 20.0 },
    { id: 2, name: "Master Your Pronounciation Course", price: 20.0 },
    { id: 3, name: "Master Your Pronounciation Course", price: 20.0 },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;
