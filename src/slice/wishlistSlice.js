import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: localStorage.getItem('wishlistItems')? JSON.parse(localStorage.getItem('wishlistItems')): [],
        loading: false,
        shippingInfo: localStorage.getItem('shippingInfo')? JSON.parse(localStorage.getItem('shippingInfo')): {}
    },
    reducers: {
        addWishlistRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        addWishlistSuccess(state, action){
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
                
                localStorage.setItem('wishlistItems', JSON.stringify(state.items));
            }
            return state
            
        },
        increaseWishlistItemQty(state, action) {
            state.items = state.items.map(item => {
                if(item.product === action.payload) {
                    item.quantity = item.quantity + 1
                }
                return item;
            })
            localStorage.setItem('wishlistItems', JSON.stringify(state.items));

        },
        decreaseWishlistItemQty(state, action) {
            state.items = state.items.map(item => {
                if(item.product === action.payload) {
                    item.quantity = item.quantity - 1
                }
                return item;
            })
            localStorage.setItem('wishlistItems', JSON.stringify(state.items));

        },
        removeItemFromWishlist(state, action) {
            const filterItems = state.items.filter(item => {
                return item.product !== action.payload
            })
            localStorage.setItem('wishlistItems', JSON.stringify(filterItems));
            return {
                ...state,
                items: filterItems
            }
        },
        saveShippingInfo(state, action) {
            localStorage.setItem('shippingInfo', JSON.stringify(action.payload));
            return {
                ...state,
                shippingInfo: action.payload
            }
        },
        orderCompleted(state, action) {
            localStorage.removeItem('shippingInfo');
            localStorage.removeItem('wishlistItems');
            sessionStorage.removeItem('orderInfo');
            return {
                items: [],
                loading: false,
                shippingInfo: {}
            }
        }

    }
});

const { actions, reducer } = wishlistSlice;

export const { 
    addWishlistRequest, 
    addWishlistSuccess,
    decreaseWishlistItemQty,
    increaseWishlistItemQty,
    removeItemFromWishlist,
    saveShippingInfo,
    orderCompleted
 } = actions;

export default reducer;