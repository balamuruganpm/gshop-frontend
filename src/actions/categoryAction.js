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
    deleteCategoryRequest,

    adminCategoryFail,
    adminCategoryRequest,
    adminCategorySuccess

} from '../slice/categorySlice';


export const getCategory = id => async (dispatch)=>{
 
    try{
         dispatch(categoryRequest())
         const {data} = await axios.get(`/api/v1/category/${id}`);
         dispatch(categorySuccess(data))

    }
    catch(error){
       //handle error

       dispatch(categoryFail(error.response.data.message)) 

    }
     
}

export const createNewCategory = category => async(dispatch)=>{
    try{
        dispatch(newCategoryRequest())
        const { data } = await axios.post(`/api/v1/admin/category/new`,category);
        dispatch(newCategorySuccess(data))
    }catch(error){
        dispatch(newCategoryFail(error.response.data.message))
    }
}
export const updateCategory = (id,categoryData) => async(dispatch)=>{
    try{
        dispatch(updateCategoryRequest())
        const { data } = await axios.put(`/api/v1/admin/category/${id}`,categoryData);
        dispatch(updateCategorySuccess(data))
    }catch(error){
        dispatch(updateCategoryFail(error.response.data.message))
    }
}

export const deleteCategory = id => async(dispatch)=>{
    try{
        dispatch(deleteCategoryRequest())
        await axios.delete(`/api/v1/admin/category/${id}`);
        dispatch(deleteCategorySuccess())
    }catch(error){
        dispatch(deleteCategoryFail(error.response.data.message))
    }
}
export const getAdminCategories = async(dispatch)=>{
    try{
        dispatch(adminCategoryRequest())
        const { data } = await axios.get(`/api/v1/admin/categories`);
        dispatch(adminCategorySuccess(data))
    }catch(error){
        dispatch(adminCategoryFail(error.response.data.message))
    }
}