import React,{useState, useEffect} from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom'
 import '../../../css/admin css/category.css'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import {clearCategoryUpdated,clearError } from '../../../slice/categorySlice';
import {getCategory, updateCategory } from '../../../actions/categoryAction';
import Adminpanel from '../Adminpanel';


function UpdateCategory(props) {
    const[images,setImages]=useState([]);
    const [categoryname,setCategoryName] = useState("");
    const [active,setActive] = useState(true);
    const[imagesPreview, setImagesPreview]=useState([]);
    const[imagesCleared,setImagesCleared]=useState(false);
    const{loading, isCategoryUpdated, error,  category=[] } = useSelector(state => state.categoryState)
    const { id:categoryId } = useParams();


    const navigate = useNavigate();
    const dispatch = useDispatch();

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

  const clearImagesHandler = ()=>{
    setImages([]);
    setImagesPreview([]);
    setImagesCleared(true)

  }


  const submitHandler = (e)=>{
    e.preventDefault();

    const formData = new FormData();
   
      formData.append('category', categoryname)
      formData.append('isActive', active)

    images.forEach(image =>{
     formData.append('images', image)
    })
 
    dispatch(updateCategory(categoryId, formData))

}


  

 useEffect(()=>{
  if(isCategoryUpdated){
      toast('Category Updated Succesfully!',{
          type: 'success',
          position: toast.POSITION.BOTTOM_CENTER,
          onOpen: () => dispatch(clearCategoryUpdated())
      })
      setImages([])
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
  dispatch(getCategory(categoryId))

},[isCategoryUpdated,error,dispatch,navigate,categoryId])

  useEffect(() => {

        if(category._id) {
            setCategoryName(category.category);
            setActive(category.isActive);
         
            
            let images = []
            category.images.forEach(image => {
    
              images.push(image.image)
    
            });
            setImagesPreview(images)
        }
       

},[category])
 




    return (
        <div>
          <Adminpanel/>
             <div className='add_title admin-container'>
               <h2>Update Category </h2>
               <NavLink to='/category'><button className='view_cate'>View Category</button></NavLink>
        
         </div>
             <div className='pt-3 admin-container me-0 form_element'>
               <form onSubmit={submitHandler} className='cate_form_detail'>
            
                  <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label cate__name">Category Name  </label>
                  
                    <div class="col-sm-6">
                    <input for="staticEmail" class="form-control cate_input" onClick={()=>setCategoryName}  value={categoryname}  />  
                
                    
                </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label cate__name">Image(optional) </label>
                    <div class="col-sm-6">
                      <div class="form-control cate_input" >
                      <input type="file" class="form-control cate_input" onClick={onImagesChange} id="hide_input" multiple />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label cate__name">Active </label>
                    <div class="col-sm-1">
                    {category.isActive ?   <input type="checkbox"   checked  id="check"/> : 
                      <input type="checkbox" onChange = {()=>setActive(!active)}  value={active}  id="check"/>}
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
                  <button type="submit" disabled = {loading} className='add_category' >Update Category</button>

              </form>
            </div>

            
        </div>
    );
}

export default UpdateCategory;