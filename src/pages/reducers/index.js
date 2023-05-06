import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartAr: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUY_PRODUCT:
      const productInCart = state.cartAr.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        return {
          cartAr: [...state.cartAr, action.payload],
        };
      } else {
        alert("Khóa học đã tồn tại rồi");
      }
      break;
    case actionTypes.DELETE_PRODUCT:
      let newCart = state.cartAr;
      const objIndex = newCart.findIndex((obj) => obj.id == action.payload.id);
      newCart.splice(objIndex, 1);
      return { cartAr: [...newCart] };
    default:
      break;
  }
};
export default cartReducer;
