import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name:"categories",
    initialState:{
        loading:false,
        category:{},
        isCategoryCreated:false,
        isCategoryDeleted:false,
        isCategoryUpdated:false
    },

    reducers:{
    categoryRequest(state, action){
            return {
                loading:true,
            }
        },
        categorySuccess(state,action){
           
            return {
                loading:false,
                category:action.payload.category
            }
        },

        categoryFail(state, action)
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
        newCategoryRequest(state, action){
            return {
                loading:true,
            }
        },
        newCategorySuccess(state,action){
           
            return {
                ...state,
                loading:false,
                category:action.payload.category,
                isCategoryCreated:true
            }
        },

        newCategoryFail(state, action)
        {
            return{
                ...state,
                loading: false,
                error: action.payload,
                isCategoryCreated:false
            }
        },
        clearCategoryCreated(state,action){
            return{
                ...state,
                isCategoryCreated:false
            }
        },
        updateCategoryRequest(state, action){
            return {
                ...state,
                loading:true,
            }
        },
        updateCategorySuccess(state,action){
           
            return {
                ...state,
                loading:false,
                category:action.payload.category,
                isCategoryUpdated:true
            }
        },

        updateCategoryFail(state, action)
        {
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        },
        clearCategoryUpdated(state,action){
            return{
                ...state,
                isCategoryUpdated:false
            }
        },
        deleteCategoryRequest(state, action){
            return {
                loading:true,
            }
        },
        deleteCategorySuccess(state,action){
           
            return {
                ...state,
                loading:false,
                isCategoryDeleted:true
            }
        },

        deleteCategoryFail(state, action)
        {
            return{
                ...state,
                loading: false,
                error: action.payload,
         
            }
        },
        adminCategoryRequest(state, action){
            return {
                loading: true
            }
        },
        adminCategorySuccess(state, action){
            return {
                loading: false,
                categories: action.payload.categories,
            }
        },
        adminCategoryFail(state, action){
            return {
                loading: false,
                error:  action.payload
            }
        },
        clearCategoryDeleted(state,action){
            return{
                ...state,
                isCategoryDeleted:false
            }
        }

    }


});

const {actions, reducer} = categorySlice;

export const{
    categoryRequest,
    categorySuccess,
    categoryFail,
    clearError,
    newCategoryRequest,
    newCategorySuccess,
    newCategoryFail,
    clearCategoryCreated,
    updateCategoryFail,
    updateCategoryRequest,
    updateCategorySuccess,
    clearCategoryUpdated,
    deleteCategoryFail,
    deleteCategoryRequest,
    deleteCategorySuccess,
    clearCategoryDeleted,
    adminCategoryFail,
    adminCategorySuccess,
    adminCategoryRequest

} = actions;

export default reducer;