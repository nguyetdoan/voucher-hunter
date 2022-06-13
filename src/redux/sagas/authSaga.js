import { notification } from "antd";
import {
  all,
  call,
  delay,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import API from "../../services/api";
import { setAuthToken } from "../../utils/setAuthToken";
import {
  LOAD_ADDRESS,
  LOAD_USER,
  LOGIN_GOOGLE,
  LOG_IN, POST_ADDRESS, SIGN_UP
} from "../actions/actionType";
import authActions from "../actions/authActions";

function* signupWork({ payload: userInfo }) {
  try {
    const { token, user } = yield call(API.signup, userInfo);
    localStorage.token = token;
    yield put(authActions.setLoading());
    yield delay(500);
    yield put(authActions.getUser(user));
  } catch (err) {
    yield put(authActions.signUpFailed(err.response?.data.msg));
    console.log(err.response?.data.msg);
  }
}

function* signupWatch() {
  yield takeLatest(SIGN_UP, signupWork);
}

function* loginWork({ payload: userInfo }) {
  try {
    const { token, user } = yield call(API.login, userInfo);
    localStorage.token = token;
    yield put(authActions.setLoading());
    yield delay(500);
    delete user.password;
    yield put(authActions.getUser(user));
  } catch (err) {
    console.log(err);
    yield put(authActions.loginFailed(err.response?.data.msg));
  }
}

function* loginWatch() {
  yield takeLatest(LOG_IN, loginWork);
}

function* loadUserWork() {
  try {
    const token = localStorage.token;
    if (token) {
      setAuthToken(token);
      const user = yield call(API.loadUser);
      delete user.password;
      yield put(authActions.getUser(user));
    } else {
      yield put(authActions.loadUserFailed());
    }
  } catch (err) {
    yield put(authActions.loadUserFailed());
    console.log(err);
  }
}

function* loadUserWatch() {
  yield takeEvery(LOAD_USER, loadUserWork);
}

function* loginGoogleWork({ payload: idToken }) {
  try {
    yield put(authActions.setLoading());
    const { token, user } = yield call(API.googleLogin, idToken);
    delete user.password;
    localStorage.token = token;
    setAuthToken(token);
    yield put(authActions.getUser(user));
  } catch (err) {
    yield put(authActions.loginFailed(err.response?.data.msg));
    console.log(err);
  }
}

function* loginGoogleWatch() {
  yield takeLatest(LOGIN_GOOGLE, loginGoogleWork);
}

function* loadAddressWorker() {
  try {
    const data = yield call(API.getAddress);
    yield put(authActions.receiveAddress(data.address));
  } catch (err) {
    yield put(authActions.receiveAddress(null));
    console.log(err);
  }
}

function* loadAddressWatcher() {
  yield takeEvery(LOAD_ADDRESS, loadAddressWorker);
}

function* addAddressWorker({payload}) {
  console.log(payload)
  try {
    const addressInfo = yield call(API.addAddress, payload);
    yield delay(500)
    yield put(authActions.receiveAddress(addressInfo));
    notification.success({message: "Added address successfully!"})
  } catch (err) {
    yield put(authActions.receiveAddress(null));
    notification.error({message: err.response?.data?.message || err.message})
  }
}

function* addAddressWatcher() {
  yield takeEvery(POST_ADDRESS, addAddressWorker);
}

export default function* authSagas() {
  yield all([
    signupWatch(),
    loadUserWatch(),
    loginWatch(),
    loginGoogleWatch(),
    loadAddressWatcher(),
    addAddressWatcher()
  ]);
}
