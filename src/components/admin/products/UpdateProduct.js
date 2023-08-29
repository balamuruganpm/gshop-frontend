import React,{useState, useEffect} from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom'
import '../../../css/admin css/products.css'
import '../../../css/admin css/updateproduct.css'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import { clearProductUpdated,clearError } from '../../../slice/productSlice';
import { getProduct, updateProduct } from '../../../actions/productActions';
import Adminpanel from '../Adminpanel';
import {getAdminCategories} from '../../../actions/categoryAction'

function UpdateProduct(props) {
    const[images,setImages]=useState([]);
    const[imagesPreview, setImagesPreview]=useState([]);
    const[imagesCleared,setImagesCleared]=useState(false);
    const{loading, isProductUpdated, error, product=[] } = useSelector(state => state.productState)
    const{categories=[]}=useSelector(state => state.categoryState)
    const [categoryname,setCategoryName] = useState("");
    const[productName, setProductName]=useState("");
    const[productCode, setProductCode]= useState("");
    const[price,setPrice]=useState("");
    const[mrpPrice, setMrpPrice]=useState("");
    const[deliveryCharge, setDeliveryCharge]=useState("")
    const[categoryIds, setCategoryIds] = useState([]);
    const { id:productId } = useParams();
   
    const categoriesList = [
        'Gift',
        'Indoor Plants',
        'Numismatist',
        'His & Her Essentials',
        'Utility products'
      
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



  const submitHandler = (e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productName)
     categories.forEach(category=>{
        formData.append('category', category.category)
    })
    formData.append('price', price)
    formData.append('mrpPrice', mrpPrice)
    formData.append('deliveryCharge', deliveryCharge)
    formData.append('productcode', productCode)

    images.forEach(image =>{
     formData.append('images', image)
    })
  dispatch(updateProduct(productId,formData))
 

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
 
const clearImagesHandler = ()=>{
    setImages([]);
    setImagesPreview([]);
    setImagesCleared(true)
  }


  useEffect(()=>{
    if(isProductUpdated){
        toast('Product Updated Succesfully!',{
            type: 'success',
            position: toast.POSITION.BOTTOM_CENTER,
            onOpen: () => dispatch(clearProductUpdated())
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
    dispatch(getProduct(productId))
  },[isProductUpdated,error,dispatch,navigate,productId])
   
  
  useEffect(() => {
    if(product._id) {
        setProductName(product.name);
        setProductCode(product.productcode);
        setCategoryIds(product.category);
        setMrpPrice(product.mrpPrice);
        setPrice(product.price);
        setDeliveryCharge(product.deliveryCharge);
     
        
        let images = []
        product.images.forEach(image => {

          images.push(image.image)

        });
        setImagesPreview(images)
    }
},[product])
   




    return (
        <div>
          <Adminpanel/>
             <div className='add_title admin-container'>
               <h2>Update Products </h2>
               <NavLink to='/products'><button className='view_cate'>  View Product</button></NavLink>
             </div>
             <div className='pt-3 admin-container me-0 product_element' style={{marginTop:"7rem",marginLeft:"3rem", display:"block", width:"75%"}}>
             


              <form onSubmit={submitHandler}>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label product__name">Category</label>
                  <div class="col-sm-10">
                  {/* <select value={categoryname} className='slct-category' onChange={e => setCategoryName(e.target.value)} >
                <option id="options" vlaue="">Select Category</option>
                {categoriesList.map(category =>(
                    <option key={category} value={category}>{category}</option>
                ))}

             </select>
                      */}
             <input type="text" placeholder='Place category code'  onChange = {e=>setCategoryIds(e.target.value)} value={categoryIds} className='form-control'/>
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

             <div className='images-container' style={{marginTop:"-6rem"}}>
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
                   
                 </div>  <button type="submit" disabled = {loading} className='add_product' >Update Product</button>

                  </form>
            </div>

            
        </div>
    );
}

export default UpdateProduct;