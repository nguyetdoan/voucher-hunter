import {
  CHANGE_PAGE, GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  LOAD_PRODUCT_DETAIL,
  LOAD_PRODUCT_LIST, LOAD_PRODUCT_LIST_BY_USER, PRODUCT_CHANGE, SEARCH_PRODUCT, SORT_PAGE,
  TOGGLE_HEART
} from "./actionType";

const productActions = {
  loadProductList(info) {
    return {
      type: LOAD_PRODUCT_LIST,
      payload: info,
    };
  },
  loadProductListByUser(info) {
    return {
      type: LOAD_PRODUCT_LIST_BY_USER,
      payload: info,
    }
  },
  getProductList(list) {
    return {
      type: GET_PRODUCT_LIST,
      payload: list,
    };
  },
  loadProductDetail(id) {
    return {
      type: LOAD_PRODUCT_DETAIL,
      payload: id,
    };
  },
  getProductDetail(detail) {
    return {
      type: GET_PRODUCT_DETAIL,
      payload: detail,
    };
  },
  
  changeProduct() {
    return {
      type: PRODUCT_CHANGE,
    };
  },
  
  changePage(payload) {
    return {
      type: CHANGE_PAGE,
      payload
    }
  },
  sortPage(payload) {
    return {
      type: SORT_PAGE,
      payload
    }
  },
  searchProduct(keyword) {
    return {
      type: SEARCH_PRODUCT,
      payload: keyword
    }
  },
  toggleHeart(payload) {
    return {
      type: TOGGLE_HEART,
      payload
    }
  },
  changeHeart(productId) {
    return {
      type: SEARCH_PRODUCT,
      payload: productId
    }
  }
};

export default productActions;
