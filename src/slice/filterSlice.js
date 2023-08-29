import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filter",
    initialState:{
        newArrival:[],
    },
    reducers:{
        filterRequest(state, action){
            return {
                loading:true,
            }
        },
        filterSuccess(state,action){
           
            return {
                loading:false,
                newArrival:[...action.payload],
                state
            }
        },

        filterFail(state, action)
        {
            return{
                loading: false,
                error: action.payload
            }
        },
        productByFilterRequest(state, action){
            return {
                loading:true,
            }
        },
        productByFilterSuccess(state,action){
  
                
            return {
                loading:false,
                filter:action.payload.filterproducts,
                state
                
            }
        },

        productByFilterFail(state, action)
        {
            return{
                loading: false,
                error: action.payload
            }
        },
    }
})


const {actions, reducer} = filterSlice;
export const{
    filterFail,
    filterRequest,
    filterSuccess,
    productByFilterFail,
    productByFilterRequest,
    productByFilterSuccess
} = actions;
export default reducer;