import axios from "axios";
import { filterFail, filterRequest, filterSuccess, productByFilterFail, productByFilterRequest, productByFilterSuccess } from "../slice/filterSlice";
export const getNewArrivals =  async (dispatch)=>{
  
    const sortBy = 'price'

    try{
        
        dispatch(filterRequest())
         const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/v1/filter?sortBy=${sortBy}`);
         dispatch(filterSuccess(data))

    }
    catch(error){
       //handle error

       dispatch(filterFail(error.response.data.message)) 

    }
    
     
}
export const getProductByFilter = product => async (dispatch)=>{
  
 

    try{
        
        dispatch(productByFilterRequest())
         const {data} = await axios.post(`${process.env.REACT_APP_URL}/api/v1/search`,product)
         console.log(data)
         
         dispatch(productByFilterSuccess(data))
      

    }
    catch(error){
       //handle error

       dispatch(productByFilterFail(error.response.data.message)) 

    }
    
     
}
