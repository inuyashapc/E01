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
  console.log("listID", listID);
  console.log("a", idPayload);
  // console.log({ state, action });
  console.log([...state.cart].findIndex((e) => e.id === idPayload));
  switch (action.type) {
    case "ADD_TO_CART":
      if ([...state.cart].findIndex((e) => e.id === idPayload) >= 0) {
        alert("aaaaa");
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
      return state;
    case "REMOVE_FROM_CART":
      console.log(state);
      console.log(action.payload.id);
      const list = [...state.cart];
      const indexCourseNeedToRemove = list.findIndex(
        (course) => course.id === action.payload.id
      );
      console.log(indexCourseNeedToRemove);
      const courseListAfterRemove = list.splice(indexCourseNeedToRemove, 1);
      console.log("listcourseafterremove", courseListAfterRemove);
      // return state;
      return { ...state, cart: list };
    default:
      return state;
  }
};
export default rootReducer;
