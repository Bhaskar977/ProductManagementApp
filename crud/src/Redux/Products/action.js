import { EDIT_PRODUCTS_REQUEST, EDIT_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"
import axios from "axios"

export const getProductsRequestAction = () =>{
    return {type:GET_PRODUCTS_REQUEST}
}

export const getProductsSuccessAction = (payload) =>{
    return {type:GET_PRODUCTS_SUCCESS,payload}
}

export const getProductsFailureAction = () =>{
    return {type:GET_PRODUCTS_FAILURE}
}

export const editProductRequest = () =>{
    return {type:EDIT_PRODUCTS_REQUEST}
}
export const editProductSuccess = () =>{
    return {type:EDIT_PRODUCTS_SUCCESS}
}

export const getProducts =(params={}) => (dispatch) =>{
    dispatch(getProductsRequestAction())
    axios.get("http://localhost:8080/Products",params)
    .then((res)=>{
        dispatch(getProductsSuccessAction(res.data))
    })
    .catch((err)=>{
        dispatch(getProductsFailureAction())
    })
}

export const editProduct = (id,productData) => (dispatch) =>{
    return axios.patch(`http://localhost:8080/Products/${id}`,productData).then(()=>{
        dispatch(editProductSuccess())
    })
}