import { notification } from "antd";
import { all, call, delay, put, takeEvery } from "redux-saga/effects";
import API from "../../services/api";
import {
  ADD_TO_CART,
  DELETE_ITEM,
  GET_CART,
  PLACE_ORDER,
  UPDATE_ITEM
} from "../actions/actionType";
import cartAction from "../actions/cartActions";

notification.config({
  placement: "top",
  top: 50,
  duration: 2,
  rtl: false,
});

function* getCartWorker() {
  try {
    const data = yield call(API.getCart);
    yield put(cartAction.receiveCart(data));
  } catch (err) {
    console.log(err);
  }
}

function* getCartWatcher() {
  yield takeEvery(GET_CART, getCartWorker);
}

function* addToCartWorker({payload}) {
  try {
    yield call(API.addToCart, payload);
    yield put(cartAction.changeCart());
    notification.success({message: "Product added to cart!!"})
  } catch (err) {
    console.log(err);
  }
}

function* addToCartWatcher() {
  yield takeEvery(ADD_TO_CART, addToCartWorker)
}

function* deleteItemWorker({payload: id}) {
  try {
    yield call(API.deleteItem, id);
    yield put(cartAction.changeCart());
  } catch (err) {
    console.log(err);
  }
}

function* deleteItemWatcher() {
  yield takeEvery(DELETE_ITEM, deleteItemWorker);
}

function* updateItemWorker({payload}) {
  try {
    yield call(API.updateItem, payload);
    yield put(cartAction.changeCart());
  } catch (err) {
    console.log(err);
  }
}

function* updateItemWatcher() {
  yield takeEvery(UPDATE_ITEM, updateItemWorker);
}

function* placeOrderWorker({payload: info}) {
  try {
    yield call(API.placeOrder, info);
    yield delay(500)
    yield put(cartAction.orderSuccess());
  } catch (err) {
    console.log(err);
  }
}

function* placeOrderWatcher() {
  yield takeEvery(PLACE_ORDER, placeOrderWorker)
}

export default function* cartSagas() {
  yield all([
    getCartWatcher(),
    addToCartWatcher(),
    deleteItemWatcher(),
    updateItemWatcher(),
    placeOrderWatcher()
  ]);
}
