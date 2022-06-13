import {
  CLEAR_ERROR,
  GET_USER,
  LOG_IN_FAILED,
  LOG_OUT,
  NOT_LOADED_YET, RECEIVE_ADDRESS, SET_LOADING, SET_LOADING_ADDRESS_FORM, SET_LOADING_FORM,
  SIGN_UP_FAILED
} from "../actions/actionType";

const inititalState = {
  user: null,
  loading: true,
  error: null,
  loadingForm: false,
  billingAddress: null,
  billingAddressForm: false
};

const authReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOG_IN_FAILED:
    case SIGN_UP_FAILED:
      localStorage.removeItem("token");

      return {
        user: null,
        loading: false,
        loadingForm: false,
        error: action.payload,
      };
    case SET_LOADING_FORM:
      return {
        ...state,
        loadingForm: true,
      };
    case LOG_OUT:
    case NOT_LOADED_YET:
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        loadingForm: false,
        error: null,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_ADDRESS:
      return {
        ...state,
        billingAddress: action.payload,
        loadingAddressForm: false,
      }

    case SET_LOADING_ADDRESS_FORM:
      return {
        ...state,
        loadingAddressForm: action.payload
      }

    default:
      return state;
  }
};

export default authReducer;
