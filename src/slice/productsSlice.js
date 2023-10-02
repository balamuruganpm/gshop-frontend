import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name:"products",
    initialState:{
        loading:false,

    },
    reducers:{
        productsRequest(state, action){
            return {
                loading:true,
            }
        },
        productsSuccess(state,action){
           
            return {
                loading:false,
                products:action.payload.products
            }
        },

        productsFail(state, action)
        {
            return{
                loading: false,
                error: action.payload
            }
        },

        activeProductsRequest(state, action){
            return {
                loading:true,
            }
        },
        activeProductsSuccess(state,action){
           
            return {
                loading:false,
                products:action.payload.products
            }
        },

        activeProductsFail(state, action)
        {
            return{
                loading: false,
                error: action.payload
            }
        },

        adminProductsRequest(state, action){
            return {
                loading: true
            }
        },
        adminProductsSuccess(state, action){
            return {
                loading: false,
                products: action.payload.products,
            }
        },
        adminProductsFail(state, action){
            return {
                loading: false,
                error:  action.payload
            }
        },
       clearError(state, action){
            return {
                ...state,
                error:  null
            }
        },
    }


});

const {actions, reducer} = productsSlice;

export const{
    productsRequest,
    productsSuccess, 
    productsFail,
    adminProductsFail,
    adminProductsRequest,
    adminProductsSuccess,
    clearError
} = actions;

export default reducer;