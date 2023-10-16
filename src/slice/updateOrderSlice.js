import { createSlice } from "@reduxjs/toolkit";

const updateOrderSlice = createSlice({
    name: 'updateOrder',
    initialState: {
        items: localStorage.getItem('order')? JSON.parse(localStorage.getItem('order')): [],
        loading: false,
        // shippingInfo: localStorage.getItem('shippingInfo')? JSON.parse(localStorage.getItem('shippingInfo')): {}
    },
    reducers: {
        dispatchRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        dispatchSuccess(state, action){
            const item = action.payload

            const isItemExist = state.items.find( i => i.product === item.product);
            
            if(isItemExist) {
                state = {
                    ...state,
                    loading: false,
                }
            }else{
                state = {
                    items: [...state.items, item],
                    loading: false
                }
                
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
            return state
            
        },
      
        cancelOrder(state, action) {
            const filterItems = state.items.filter(item => {
                return item.product !== action.payload
            })
            localStorage.setItem('cartItems', JSON.stringify(filterItems));
            return {
                ...state,
                items: filterItems
            }
        },
        saveOrderInfo(state, action) {
            localStorage.setItem('orderInfo', JSON.stringify(action.payload));
            return {
                ...state,
                shippingInfo: action.payload
            }
        },
        orderCompleted(state, action) {
            localStorage.removeItem('shippingInfo');
            localStorage.removeItem('cartItems');
            sessionStorage.removeItem('orderInfo');
            return {
                items: [],
                loading: false,
                shippingInfo: {}
            }
        }

    }
});

const { actions, reducer } = updateOrderSlice;

export const { 
    addCartItemRequest, 
    addCartItemSuccess,
    decreaseCartItemQty,
    increaseCartItemQty,
    removeItemFromCart,
    saveShippingInfo,
    orderCompleted
 } = actions;

export default reducer;