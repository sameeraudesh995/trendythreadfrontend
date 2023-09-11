import { FIND_PRODUCTS_BY_ID_FAILURE, FIND_PRODUCTS_BY_ID_REQUEST, FIND_PRODUCTS_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
import api, { API_BASE_URL } from "../../../config/apiConfig";

export const findProducts=(reqData)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCTS_REQUEST})
    const {
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize,
      } = reqData;
    try {
        const {data}=api.get(
            `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&
            minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&
            pageNumber=${pageNumber}&pageSize=${pageSize}`
          );
          console.log("get product by category - ", data);
          dispatch({
            type: FIND_PRODUCTS_SUCCESS,
            payload: data,
            
          });
  
    } catch (error) {
        dispatch({
            type: FIND_PRODUCTS_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        
    }
};
export const findProductById = (reqData) => async (dispatch) => {
    try {
      dispatch({ type: FIND_PRODUCTS_BY_ID_REQUEST });
      const{productId}=reqData;
  
      const { data } = await api.get(`/api/products/id/${reqData.productId}`);
  
      console.log("products by  id : ", data);
      dispatch({
        type: FIND_PRODUCTS_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FIND_PRODUCTS_BY_ID_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };