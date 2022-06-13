import {
  ADD_TO_CART,
  CHANGE_CART,
  DELETE_ITEM,
  GET_CART,
  ORDER_SUCCESS,
  PLACE_ORDER,
  RECEIVE_CART, SET_LOADING_ORDER, SET_ORDER_STATUS,
  UPDATE_ITEM
} from "./actionType";

const cartAction = {
  getCart() {
    return {
      type: GET_CART,
    };
  },
  receiveCart(payload) {
    return {
      type: RECEIVE_CART,
      payload,
    };
  },
  addToCart(payload) {
    return {
      type: ADD_TO_CART,
      payload,
    };
  },
  changeCart() {
    return {
      type: CHANGE_CART,
    };
  },
  deleteItem(id) {
    return {
      type: DELETE_ITEM,
      payload: id,
    };
  },
  updateItem(payload) {
    return {
      type: UPDATE_ITEM,
      payload,
    };
  },
  placeOrder(info) {
    return {
      type: PLACE_ORDER,
      payload: info,
    };
  },
  setOrderStatus(status) {
    return {
      type: SET_ORDER_STATUS,
      payload: status,
    };
  },
  orderSuccess() {
    return {
      type: ORDER_SUCCESS,
    };
  },
  setLoadingOrder(status) {
    return {
      type: SET_LOADING_ORDER,
      payload: status,
    };
  },
};

export default cartAction;
