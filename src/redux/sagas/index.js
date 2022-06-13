import { all } from "redux-saga/effects";
import authSagas from "./authSaga";
import cartSagas from "./cartSagas";
import productSagas from "./productSaga";

export default function* rootSaga() {
  yield all([authSagas(), productSagas(), cartSagas()]);
}
