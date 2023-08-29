import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState:{
        loading:false,
        product:{},
        isProductCreated:false,
        isProductDeleted:false,
        isProductUpdated:false
    },

    reducers:{
        productRequest(state, action){
            return {
                loading:true,
            }
        },
        productSuccess(state,action){
           
            return {
                loading:false,
                product:action.payload.product
            }
        },

        productFail(state, action)
        {
            return{
                loading: false,
                error: action.payload
            }
        },
        clearError(state,action){
           return{
            ...state,
            error:null
           }
        },
        newProductRequest(state, action){
            return {
                loading:true,
            }
        },
        newProductSuccess(state,action){
           
            return {
                ...state,
                loading:false,
                product:action.payload.product,
                isProductCreated:true
            }
        },

        newProductFail(state, action)
        {
            return{
                ...state,
                loading: false,
                error: action.payload,
                isProductCreated:false
            }
        },
        clearProductCreated(state,action){
            return{
                ...state,
                isProductCreated:false
            }
        },
        updateProductRequest(state, action){
            return {
                ...state,
                loading:true,
            }
        },
        updateProductSuccess(state,action){
           
            return {
                ...state,
                loading:false,
                product:action.payload.product,
                isProductUpdated:true
            }
        },

        updateProductFail(state, action)
        {
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        },
        clearProductUpdated(state,action){
            return{
                ...state,
                isProductUpdated:false
            }
        },
        deleteProductRequest(state, action){
            return {
                loading:true,
            }
        },
        deleteProductSuccess(state,action){
           
            return {
                ...state,
                loading:false,
                isProductDeleted:true
            }
        },

        deleteProductFail(state, action)
        {
            return{
                ...state,
                loading: false,
                error: action.payload,
         
            }
        },
        clearProductDeleted(state,action){
            return{
                ...state,
                isProductDeleted:false
            }
        }

    }


});

const {actions, reducer} = productSlice;

export const{
    productRequest,
    productSuccess, 
    productFail,
    newProductFail,
    newProductRequest,
    newProductSuccess,
    clearProductCreated,
    clearError,
    deleteProductFail,
    deleteProductSuccess,
    deleteProductRequest,
    clearProductDeleted,
    updateProductFail,
    updateProductRequest,
    updateProductSuccess,
    clearProductUpdated
} = actions;

export default reducer;