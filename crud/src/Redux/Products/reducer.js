import { EDIT_PRODUCTS_REQUEST, EDIT_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"

const initialState = {
    products:[],
    isLoading:false,
    isError:false
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCTS_REQUEST:
            return {...state,isLoading:true}
        case GET_PRODUCTS_SUCCESS:
            return {...state,isLoading:false,products:payload}
        case GET_PRODUCTS_FAILURE:
            return {...state,isLoading:false,isError:true}
        //Edit
        case EDIT_PRODUCTS_REQUEST:
            return {...state,isLoading:true}
        case EDIT_PRODUCTS_SUCCESS:
            return {...state,isLoading:false}
        default:
            return state
    }
}