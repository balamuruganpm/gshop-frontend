import React,{useState, useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import '../../../css/admin css/products.css'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import { clearProductCreated,clearError } from '../../../slice/productSlice';
import { createNewProduct} from '../../../actions/productActions';
import Adminpanel from '../Adminpanel';
import {getAdminCategories} from '../../../actions/categoryAction'

function AddProduct(props) {
    const[images,setImages]=useState([]);
    const[imagesPreview, setImagesPreview]=useState([]);

    const{loading, isProductCreated, error } = useSelector(state => state.productState)
    const{categories=[]}=useSelector(state => state.categoryState)
    const [categoryname,setCategoryName] = useState("");
    const[productName, setProductName]=useState("");
    const[productCode, setProductCode]= useState("");
    const[price,setPrice]=useState("");
    const[mrpPrice, setMrpPrice]=useState("");
    const[deliveryCharge, setDeliveryCharge]=useState("")
    const[categoryIds, setCategoryIds] = useState([]);


 
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



  const submitHandler = (e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productName)
    formData.append('category', categoryname)
    formData.append('price', price)
    formData.append('mrpPrice', mrpPrice)
    formData.append('deliveryCharge', deliveryCharge)
    formData.append('productcode', productCode)

    images.forEach(image =>{
     formData.append('images', image)
    })
  dispatch(createNewProduct(formData))
 

}
useEffect(()=>{
  dispatch(getAdminCategories);

},[dispatch])
const handleCategory = e=>{
  
  const currentCategoryClicked = e.target.value;
  const allCatgeoriesClicked = [...categoryIds];

  const indexFound = allCatgeoriesClicked.indexOf(currentCategoryClicked)


let updatedCategoryIds;
if (indexFound === -1) {
  // add
  updatedCategoryIds = [...categoryIds, currentCategoryClicked];
  setCategoryIds(updatedCategoryIds);
} else {
  // remove
  updatedCategoryIds = [...categoryIds];
  updatedCategoryIds.splice(indexFound, 1);
  setCategoryIds(updatedCategoryIds);
}



}

  useEffect(()=>{
    if(isProductCreated){
        toast('Product Created Succesfully!',{
            type: 'success',
            position: toast.POSITION.BOTTOM_CENTER,
            onOpen: () => dispatch(clearProductCreated()),
         
        })
         
        navigate('/products')
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
          <Adminpanel/>
             <div className='add_title admin-container'>
               <h2>Add Products </h2>
               <NavLink to='/products'><button className='view_cate'>  View Product</button></NavLink>
             </div>
             <div className='pt-3 admin-container me-0 product_element' style={{marginTop:"7rem",marginLeft:"3rem", display:"block", width:"75%"}}>
             


              <form onSubmit={submitHandler}>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label product__name">Category</label>
                  <div class="col-sm-10">
                  <input type="text" class="form-control" onChange = {e=>setCategoryName(e.target.value)}  value={categoryname}   />

                  {/* <select  name='category' onChange={handleCategory} value={categoryIds} className='form-control'>
                  <option value="Select" disabled >Select</option>
                    {
                  categories && categories.map((cat)=>(
                    <option value={cat._id}  onClick={categoryIds.includes(cat._id)} key={cat._id}>{cat.category}</option>
                    ))}
                  </select> */}
                     
             
                  </div>
              
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label product__name">Product Code</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" onChange = {e=>setProductCode(e.target.value)}  value={productCode}   />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label product__name">Name</label>
                  <div class="col-sm-10">
                  <input type="text" class="form-control"onChange = {e=>setProductName(e.target.value)}  value={productName}  />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label product__name">MRP Price</label>
                  <div class="col-sm-10">
                  <input type="text" class="form-control" onChange = {e=>setMrpPrice(e.target.value)}  value={mrpPrice} />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label product__name">Price</label>
                  <div class="col-sm-10">
                  <input type="text" class="form-control" onChange = {e=>setPrice(e.target.value)}  value={price} />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label product__name">Delivery Charge</label>
                  <div class="col-sm-10">
                  <input type="text" class="form-control" onChange = {e=>setDeliveryCharge(e.target.value)}  value={deliveryCharge}/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label product__name">vedio</label>
                  <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label product__name">images</label>
                  <div class="col-sm-2">
                  <input type="file" class="form-control" multiple onChange={onImagesChange}/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label product__name">Files</label>
                  <div class="col-sm-2">
                  <input type="file" class="form-control" id="inputPassword"/>
                  </div>
                </div>
             
     
                 <button type="submit" disabled = {loading} className='add_product' >Add Product</button>

                  </form>
            </div>

            
        </div>
    );
}

export default AddProduct;