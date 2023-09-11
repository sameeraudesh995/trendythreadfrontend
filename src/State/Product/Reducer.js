import { FIND_PRODUCTS_BY_ID_FAILURE, FIND_PRODUCTS_BY_ID_REQUEST, FIND_PRODUCTS_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

  
  const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    deleteProduct:null,
  };
  
  const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCTS_BY_ID_REQUEST:
            return {...state, loading:true,error:null};
        case FIND_PRODUCTS_SUCCESS:
            return {...state, loading:false, error: null, product:action.payload}
        case FIND_PRODUCTS_BY_ID_SUCCESS:
            return{...state, loading:false, error:null, product:action.payload}
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCTS_BY_ID_FAILURE:
            return{...state, loading:false, error:action.payload}
        default:
            return state;
    }
  };
  
  export default customerProductReducer;