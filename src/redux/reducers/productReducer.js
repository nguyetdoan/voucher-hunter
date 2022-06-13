import {
  CHANGE_PAGE, GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  PRODUCT_CHANGE, SEARCH_PRODUCT, SORT_PAGE
} from "../actions/actionType";

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
  totalItems: 0,
  size: 10,
  search: "",
  sortBy: "",
  order: "",
  productDetail: null,
  changed: false,
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      const { list, totalPages, page, size, totalItems } = action.payload;

      return {
        ...state,
        changed: false,
        loading: false,
        list,
        totalPages,
        totalItems,
        page,
        size,
      };
    case GET_PRODUCT_DETAIL:
      const productDetail = action.payload;
      return {
        ...state,
        productDetail,
      };

    case PRODUCT_CHANGE:
      return {
        ...state,
        changed: true,
      };

    case CHANGE_PAGE:

      return {
        ...state,
        page: action.payload.page,
        size: action.payload.size,
        changed: true,
      }

    case SORT_PAGE:
      const {sortBy, order} = action.payload
      return {
        ...state,
        sortBy,
        order,
        changed: true
      }
    
    case SEARCH_PRODUCT:
      return {
        ...state,
        search: action.payload,
        page: 1,
        changed: true
      }

    default:
      return state;
  }
};

export default productReducer;
