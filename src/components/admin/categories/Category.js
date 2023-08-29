import React from 'react'
import {Fragment} from 'react'
import {MDBDataTable} from 'mdbreact';
 import '../../../css/admin css/products.css' ;
 import '../../../css/admin css/category.css'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {getAdminProducts} from '../../../actions/productActions';
import { deleteProduct } from '../../../actions/productActions';
import { clearError } from '../../../slice/productsSlice';
import { clearProductDeleted } from '../../../slice/productSlice';
import {Button} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import Loader from '../../layouts/Loader';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';


const Products = () => {
    const {products = [], loading = true, error} = useSelector (state => state.productsState)
    const dispatch = useDispatch();


    const{ isProductDeleted, error:productError } = useSelector(state => state.productState)
   
    const setProducts = () =>{
        const data = {
            columns : [
              
            
                {
                    label: 'S.No',
                    field: 'serialno',
                    sort: 'asc'
                },
                {
                    label: 'Image',
                    field: 'image',
                    sort: 'asc'
                },
                {
                    label: 'Category',
                    field: 'category',
                    sort: 'asc'
                },
               
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }
            ],
            rows : []
        }
        products.forEach( (product,index) => {
            data.rows.push({
                serialno:<p>{index+1}</p>,
                image:<PhotoLibraryIcon className='c-image' style={{fontSize:"24px"}}/>,
                category : product.category,
                name: product.name,
                status:<p style={{color:"blue"}}>Active</p>,
                
                actions: (
                    <Fragment>
                        <Link to={`/admin/product/updateproduct/${product._id}`} className="btn btn-primary  py-1  res_btn ml-1"> <i className="fa fa-pencil"></i></Link>
                        <Button onClick={e => deleteHandler(e, product._id)} className="btn btn-danger py-1 ml-2 res_btn">
                            <i className="fa fa-trash"></i>
                        </Button>
                    </Fragment>
                )
            })
         
        })

        return data;
    }

      
    const deleteHandler = (e,id)=>{
        e.target.disabled = true;
        dispatch(deleteProduct(id))
    }


    useEffect(()=>{

      

        if(error || productError){
         toast(error || productError,{
             position:toast.POSITION.BOTTOM_CENTER,
             type:'error',
             onOpen: ()=>{dispatch(clearError())}
         })
         return
        }
        if(isProductDeleted){
         toast('Product Deleted Succesfully!',{
             type: 'success',
             position: toast.POSITION.BOTTOM_CENTER,
             onOpen: () => dispatch(clearProductDeleted())
         })
         return;
     }
        dispatch(getAdminProducts)
     },[dispatch,error, isProductDeleted, productError])

  return (
        <>

             <div className='add_title admin-container'>
               <h2 className='cate_title'>Category List</h2>
               <NavLink to='/addcategory'><button className='view_cate'> Add Category</button></NavLink>
             </div>
             {loading ? <Loader/> :
             <div className='pt-3 admin-container me-0 res_category res_order' style={{marginTop:"7rem",marginLeft:"3rem", width:"75%"}}>
     
                <MDBDataTable
                data={setProducts()}
                bordered
                striped
                hover
                className="w-100 h-10  res_cate_table "
                responsive  
                />
            </div>
             }
        </>
  )
}

export default Products
