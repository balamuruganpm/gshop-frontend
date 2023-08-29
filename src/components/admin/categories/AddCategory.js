import React,{useState, useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
 import '../../../css/admin css/category.css'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import { clearCategoryCreated,clearError } from '../../../slice/categorySlice';
import { createNewCategory } from '../../../actions/categoryAction';

function AddCategory(props) {
    const[images,setImages]=useState([]);
    const[imagesPreview, setImagesPreview]=useState([]);

    const{loading, isProductCreated, error } = useSelector(state => state.productState)

    const [categoryname,setCategoryName] = useState("");
    const[subCategory,setSubCategory]=useState("");

    const categories = [
        'Toys',
        'Kids',
        'Women',
        'Cards',
        'Clock',

    ]
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
    formData.append('Categoryname', categoryname)
    formData.append('subcategiry', subCategory)

    images.forEach(image =>{
     formData.append('images', image)
    })
  dispatch(createNewCategory(formData))
}


  useEffect(()=>{
    if(isProductCreated){
        toast('Product Created Succesfully!',{
            type: 'success',
            position: toast.POSITION.BOTTOM_CENTER,
            onOpen: () => dispatch(clearCategoryCreated())
        })
        navigate('/admin/product/allproducts')
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
  },[isProductCreated,error,dispatch,navigate])
   




    return (
        <div>

             <div className='add_title admin-container'>
               <h2>Add Category </h2>
               <NavLink to='/category'><button className='view_cate'>  View Category</button></NavLink>
             </div>
             <div className='pt-3 admin-container me-0 form_element' style={{marginTop:"7rem",marginLeft:"3rem", display:"block", width:"75%"}}>
               <form onSubmit={submitHandler}>
                <div className='cate_form_detail'>
                  <div className='input_label'>
                  <label className='cate__name'>Category Name *  </label>
                  <label className='cate__name'>subcategory</label>
                  <label className='cate__name'>Image(optional) *  </label>
                  <label className='cate__name'>Active </label>
                  <label className='cate__name'>Description</label>
                 
                  </div>
                <div className='cate_inputfield'>
                <input type="text" onChange = {e=>setCategoryName(e.target.value)}  vlaue={categoryname}  className='cate_input' />
                    <select className='cate_input' onChange = {e=>setSubCategory(e.target.elue)}>
                     <option value="--Root--" id="options" key="">Select Category</option>
                        {categories.map(category =>(
                         <option key={category} value={category}>{category}</option>
                        ))}

                    {/* <option value="--Root--" key="">--College Book</option>
                    <option value="--Root--" key="">Engineering</option>
                    <option value="--Root--" key="">Medical</option>
                    <option value="--Root--" key="">Cs and IT</option>
                    <option value="--Root--" key="">Civil</option>
                    <option value="--Root--" key="">CSE</option>
                    <option value="--Root--" key="">ECE</option>
                    <option value="--Root--" key="">-----others</option>
                    <option value="--Root--" key="">---Medical</option>
                    <option value="--Root--" key="">Dental</option>
                    <option value="--Root--" key="">Nursing</option>
                    <option value="--Root--" key="">MBBS</option>
                    <option value="--Root--" key="">----others</option>
                    <option value="--Root--" key="">---Arts and Science</option>
                    <option value="--Root--" key="">Physics</option>
                    <option value="--Root--" key="">Chemistry</option>
                    <option value="--Root--" key="">Botony</option>
                    <option value="--Root--" key="">Computer Science</option>
                    <option value="--Root--" key="">---others</option>
                    <option value="--Root--" key="">--Exam Books</option>
                    <option value="--Root--" key="">UPSC</option>
                    <option value="--Root--" key="">TNPSC</option>
                    <option value="--Root--" key="">NEET</option>
                    <option value="--Root--" key="">TET</option>
                    <option value="--Root--" key="">Bank</option> */}
                </select>
                
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
                 <button type="submit" disabled = {loading} className='add_category' >Add Category</button>

                  </form>
            </div>

            
        </div>
    );
}

export default AddCategory;