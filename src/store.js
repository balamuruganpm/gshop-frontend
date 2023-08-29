import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from "./slice/productsSlice"
import productReducer from "./slice/productSlice";
import authReducer from './slice/authSlice'
import cartReducer from './slice/cartSlice'
import orderReducer  from './slice/orderSlice';
import userReducer from './slice/userSlice'
import categoryReducer from './slice/categorySlice'
const reducer = combineReducers({
    productsState: productsReducer,
    productState:productReducer,
    authState:authReducer,
    cartState:cartReducer,
    orderState:orderReducer,
    userState:userReducer,
    categoryState:categoryReducer

})

const store =configureStore({
     reducer,
     middleware:[thunk]
})

export default store;