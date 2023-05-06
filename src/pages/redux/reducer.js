const initState = {
  course: {},
  cart: [
    { id: 12, name: "Master Your Pronounciation Course", price: 20.0 },
    { id: 22, name: "Master Your Pronounciation Course", price: 20.0 },
    { id: 32, name: "Master Your Pronounciation Course", price: 20.0 },
  ],
};

const rootReducer = (state = initState, action) => {
  const listID = [...state.cart].map((e) => e.id);
  const idPayload = { ...action.payload }.id;
  console.log(listID);
  console.log("a", idPayload);
  console.log({ state, action });
  console.log(
    "aaaaaaaasdasa",
    [...state.cart].filter((e) => e.id === idPayload)
  );
  switch (action.type) {
    case "ADD_TO_CART":
      if ([...state.cart].findIndex((e) => e.id === idPayload) > 0) {
        alert("aaaaa");
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
      return state;
    default:
      return state;
  }
};
export default rootReducer;
