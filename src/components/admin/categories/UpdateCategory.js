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
    const[subCategory,setSubCategory]=useState("");
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
    setImagesPreview([]);
    setImagesCleared(true)

  }


  const submitHandler = (e)=>{
    e.preventDefault();

    const formData = new FormData();
   
      formData.append('category', categoryname)

    formData.append('subcategory', subCategory)

    images.forEach(image =>{
     formData.append('images', image)
    })
    formData.append('imagesCleared' , imagesCleared);
    dispatch(updateCategory(categoryId, formData))

}


  useEffect(()=>{
    if(isCategoryUpdated){
        toast('Category Updated Succesfully!',{
            type: 'success',
            position: toast.POSITION.BOTTOM_CENTER,
            onOpen: () => dispatch(clearCategoryUpdated())
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
    dispatch(getCategory(categoryId))
  },[isCategoryUpdated,error,dispatch,navigate, categoryId])

    
  useEffect(() => {

        if(category._id) {
            setCategoryName(category.category);
            setSubCategory(category.subcategory);
         
            
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
               <NavLink to='/category'><button className='view_cate'>  View Category</button></NavLink>
             </div>
             <div className='pt-3 admin-container me-0 form_element' style={{marginTop:"7rem",marginLeft:"3rem", display:"block", width:"75%"}}>
               <form onSubmit={submitHandler}>
                <div className='cate_form_detail'>
                  <div className='input_label'>
                  <label className='cate__name'>Category Name *  </label>
                  <label className='cate__name'>Image(optional) *  </label>
                  <label className='cate__name'>Active </label>
                  <label className='cate__name'>Description</label>
                 
                  </div>
                <div className='cate_inputfield'>
                <input type="text" onChange = {e=>setCategoryName(e.target.value)}  value={categoryname}  className='cate_input' />
                <div className='cate_input select_img'><input type="file" className='hide_input' onChange={onImagesChange} multiple/></div>
                <input type="checkbox" classname="cate_input check" />
                <textarea cols="50" rows="10" className='cate_input description' ></textarea>
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