import React,{useState, useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
 import '../../../css/admin css/category.css'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import { clearCategoryCreated,clearError } from '../../../slice/categorySlice';
import { createNewCategory } from '../../../actions/categoryAction';
import Adminpanel from '../Adminpanel';

function AddCategory(props) {
    const[images,setImages]=useState([]);
    const[imagesPreview, setImagesPreview]=useState([]);
    const [categoryname,setCategoryName] = useState("");
    const{loading, isCategoryCreated, error, categories=[] } = useSelector(state => state.categoryState)

   
 

    const onImagesChange = (e)=>{
        const files = Array.from(e.target.files);
    
        files.forEach(file=>{
    
            const reader = new FileReader()
            reader.onload = () => {
               if(reader.readyState === 2)
                {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, file])
                }   
             }
            reader.readAsDataURL(file)
    
        })
    
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const clearImagesHandler = ()=>{
    setImages([]);
    setImagesPreview([]);

  }



  const submitHandler = (e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('categories', categoryname)
 

    images.forEach(image =>{
     formData.append('images', image)
    })
  dispatch(createNewCategory(formData))


}


  useEffect(()=>{

    if(isCategoryCreated){
        toast('Category Created Succesfully!',{
            type: 'success',
            position: toast.POSITION.BOTTOM_CENTER,
            onOpen: () => dispatch(clearCategoryCreated())
        })
        navigate('/category')
        return;
    }
    if(error)  {
        toast(error, {
            position: toast.POSITION.BOTTOM_CENTER,
            type: 'error',
            onOpen: ()=> { dispatch(clearError()) }
        })
        return
    }

 
  },[isCategoryCreated,error,dispatch,navigate])
   




    return (
        <div>
          <Adminpanel/>
             <div className='add_title admin-container'>
               <h2>Add Category </h2>
               <NavLink to='/category'><button className='view_cate'>  View Category</button></NavLink>
             </div>
             <div className='pt-3 admin-container me-0 form_element'>
               <form onSubmit={submitHandler} className='cate_form_detail'>
      
                    <div class="mb-3 row">
                          <label for="staticEmail" class="col-sm-2 col-form-label cate__name">Category Name  </label>
                          <div class="col-sm-6">
                            <select id="browser" className='cate_input' onChange = {e=>setCategoryName(e.target.value)}  value={categoryname}>
                                          {
                                        categories && categories?.map((cat)=>(
                                          <option value={cat._id}  key={cat._id}>{cat.category}</option>
                                          ))}
                            </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="inputPassword" class="col-sm-2 col-form-label cate__name">Image(optional) </label>
                      <div class="col-sm-6">
                        <div class="form-control cate_input" >
                        <input type="file" class="form-control cate_input" onClick={onImagesChange} id="hide_input"multiple />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="inputPassword" class="col-sm-2 col-form-label cate__name">Active </label>
                      <div class="col-sm-1">
                        <input type="checkbox"  id="check"/>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="inputPassword" class="col-sm-2 col-form-label cate__name">Description </label>
                      <div class="col-sm-6">
                        <textarea type="text"  rows="5"  class="form-control cate_input" id="inputPassword"/>
                      </div>
                    </div>
                    <div className='images-container'>
                          <div className='img-preview'>
                          {imagesPreview.map(image=>(
                              <img
                              src={image} 
                              key={image}
                              alt=""
                            className='pre-img' />
                  
                            ))}
                          {imagesPreview.length >  0 && <button id="delete-btn" className='add_category' onClick={clearImagesHandler} style={{cursor:"pointer"}} ><i className='fa fa-trash' style={{marginLeft:"-1rem",marginRight:"1rem"}}></i>Delete</button> }
                          </div>
                        
                    </div>
                    <button type="submit" disabled = {loading} className='add_category' >Add Category</button>
               </form>
            </div>

            
        </div>
    );
}

export default AddCategory;