
import {addCartItemRequest, addCartItemSuccess} from '../slice/cartSlice';
import {addWishlistRequest, addWishlistSuccess } from '../slice/wishlistSlice';
import axios from 'axios'

export const addCartItem = (id, quantity) => async(dispatch) => {
    try {
        dispatch(addCartItemRequest())
        const {data } = await axios.get(`${process.env.REACT_APP_URL}/api/v1/product/${id}`)
        dispatch(addCartItemSuccess({
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity
        }))
    } catch (error) {
        
    }
}


export const addWishlistItem = (id, quantity) => async(dispatch) => {
    try {
        dispatch(addWishlistRequest())
        const {data } = await axios.get(`${process.env.REACT_APP_URL}/api/v1/product/${id}`)
        dispatch(addWishlistSuccess({
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity
        }))
    } catch (error) {
        
    }
}