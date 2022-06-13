import {
  CLEAR_ERROR,
  GET_USER,
  LOAD_ADDRESS,
  LOAD_USER,
  LOGIN_GOOGLE,
  LOG_IN,
  LOG_IN_FAILED,
  LOG_OUT,
  NOT_LOADED_YET,
  POST_ADDRESS, RECEIVE_ADDRESS, SET_LOADING, SET_LOADING_ADDRESS_FORM, SET_LOADING_FORM,
  SIGN_UP,
  SIGN_UP_FAILED
} from "./actionType";

const authActions = {
  signup(signupInfo) {
    return {
      type: SIGN_UP,
      payload: signupInfo,
    };
  },
  login(loginInfo) {
    return {
      type: LOG_IN,
      payload: loginInfo,
    };
  },
  loadUser() {
    return {
      type: LOAD_USER,
    };
  },
  getUser(user) {
    return {
      type: GET_USER,
      payload: user,
    };
  },
  loginFailed(err) {
    return {
      type: LOG_IN_FAILED,
      payload: err,
    };
  },
  signUpFailed(err) {
    return {
      type: SIGN_UP_FAILED,
      payload: err,
    };
  },
  loadUserFailed() {
    return {
      type: NOT_LOADED_YET,
    };
  },
  setLoading() {
    return {
      type: SET_LOADING,
    };
  },
  logout() {
    return {
      type: LOG_OUT,
    };
  },
  clearError() {
    return {
      type: CLEAR_ERROR,
    };
  },
  loginGoogle(idToken) {
    return {
      type: LOGIN_GOOGLE,
      payload: idToken,
    };
  },
  setLoadingForm() {
    return {
      type: SET_LOADING_FORM,
    };
  },
  loadAddress() {
    return {
      type: LOAD_ADDRESS,
    }
  },
  addAddress(info) {
    return {
      type: POST_ADDRESS,
      payload: info
    }
  },
  receiveAddress(info) {
    return {
      type: RECEIVE_ADDRESS,
      payload: info
    }
  },
  setLoadingAddressForm(status) {
    return {
      type: SET_LOADING_ADDRESS_FORM,
      payload: status
    }
  }
};

export default authActions;
