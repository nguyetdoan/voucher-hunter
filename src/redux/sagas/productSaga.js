import { notification } from "antd";
import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../services/api";
import {
  LOAD_PRODUCT_LIST
} from "../actions/actionType";
import productActions from "../actions/productAction";

notification.config({
  placement: "top",
  bottom: 50,
  duration: 2,
  rtl: false,
});

function* loadProductWorker({ payload: loadInfo }) {
  try {
    const data = yield call(API.loadProduct, loadInfo);
    yield put(productActions.getProductList(data));
  } catch (err) {
    console.log(err);
  }
}

function* loadProductWatcher() {
  yield takeEvery(LOAD_PRODUCT_LIST, loadProductWorker);
}

export default function* productSagas() {
  yield all([
    loadProductWatcher(),
  ]);
}
