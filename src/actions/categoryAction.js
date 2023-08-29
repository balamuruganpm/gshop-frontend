import axios from 'axios'
import { 
    categoryFail,
    categoryRequest,
    categorySuccess,

    newCategoryRequest,
    newCategorySuccess,
    newCategoryFail,

    updateCategoryFail,
    updateCategorySuccess,
    updateCategoryRequest,

    deleteCategoryFail,
    deleteCategorySuccess,
    deleteCategoryRequest

} from '../slice/categorySlice';
export const getProduct = id => async (dispatch)=>{
 
    try{
         dispatch(categoryRequest())
         const {data} = await axios.get(`/api/v1/product/${id}`);
         dispatch(categorySuccess(data))

    }
    catch(error){
       //handle error

       dispatch(categoryFail(error.response.data.message)) 

    }
     
}

export const createNewCategory = productData => async(dispatch)=>{
    try{
        dispatch(newCategoryRequest())
        const { data } = await axios.post(`/api/v1/admin/product/new`,productData);
        dispatch(newCategorySuccess(data))
    }catch(error){
        dispatch(newCategoryFail(error.response.data.message))
    }
}
export const updateCategory = (id,productData) => async(dispatch)=>{
    try{
        dispatch(updateCategoryRequest())
        const { data } = await axios.put(`/api/v1/admin/product/${id}`,productData);
        dispatch(updateCategorySuccess(data))
    }catch(error){
        dispatch(updateCategoryFail(error.response.data.message))
    }
}

export const deleteCategory = id => async(dispatch)=>{
    try{
        dispatch(deleteCategoryRequest())
        await axios.delete(`/api/v1/admin/product/${id}`);
        dispatch(deleteCategorySuccess())
    }catch(error){
        dispatch(deleteCategoryFail(error.response.data.message))
    }
}