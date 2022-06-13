import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "../redux/reducers/authReducer";
import cartReducer from "../redux/reducers/cartReducer";
import productReducer from "../redux/reducers/productReducer";
import rootSaga from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ cart: cartReducer, auth: authReducer, product: productReducer });

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
