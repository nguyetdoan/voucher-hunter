import {
  CHANGE_CART,
  ORDER_SUCCESS,
  RECEIVE_CART, SET_LOADING_ORDER, SET_ORDER_STATUS
} from "../actions/actionType";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  changed: false,
  orderSuccess: false,
  loading: true,
  loadingOrder: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CART:
      const { cart, totalPrice, totalQuantity } = action.payload;
      return {
        ...state,
        cart,
        totalPrice,
        totalQuantity,
        changed: false,
        loading: false,
      };
    case CHANGE_CART:
      return {
        ...state,
        changed: true,
      };

    case SET_ORDER_STATUS:
      return {
        ...state,
        orderSuccess: action.payload,
      };

    case SET_LOADING_ORDER:
      return {
        ...state,
        loadingOrder: action.payload,
      };
    case ORDER_SUCCESS:
      return {
        ...initialState,
        orderSuccess: true,
        loadingOrder: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
