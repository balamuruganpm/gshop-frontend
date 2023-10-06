import React from 'react'
import {Fragment} from 'react'
import {MDBDataTable} from 'mdbreact';
import '../../../css/admin css/products.css'

import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {getActiveProducts} from '../../../actions/productActions';
import { deleteProduct } from '../../../actions/productActions';
import { clearError } from '../../../slice/productsSlice';
import { clearProductDeleted } from '../../../slice/productSlice';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import Adminpanel from '../Adminpanel';
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
                    label: 'HoverImage',
                    field: 'hoverimage',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
               
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: 'MRP Price',
                    field: 'mrpprice',
                    sort: 'asc'
                },
                {
                    label: 'Product Code',
                    field: 'productcode',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                },
        
            ],
            rows : []
        }
        products.forEach( (product,index) => {
            data.rows.push({
               
              
                serialno:<p>{index+1}</p>,
                image:<img src={product.images[0]?.image} alt="" style={{width:"50px", height:"40px"}}/>,
                hoverimage:<img src={product.images[1]?.image} alt="" style={{width:"50px", height:"40px"}}/>,
             
                price : <><span>&#8377;</span> {product.price}</>,
                mrpprice :<><span>&#8377;</span>{product.mrpPrice}</>,
                name: product.name,
                productcode: product.productcode,
               
                
                actions: (
                    <Fragment>
                        <Link to={`/admin/product/updateproduct/${product._id}`} className="btn btn-primary  py-1  ml-1"> <i className="fa fa-pencil"></i></Link>
                        <Button onClick={e => deleteHandler(e, product._id)} className="btn btn-danger py-1 ml-3">
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
        dispatch(getActiveProducts)
     },[dispatch,error, isProductDeleted, productError])

  return (
    <>
    <Adminpanel/>
             <div className='add_title admin-container'>
               <h2 className='cate_title'>Product List</h2>
               <Link to='/addproduct'><button className='view_cate'> Add Product</button></Link>
             </div>

             <div className='pt-3 admin-container me-0' style={{marginTop:"7rem",marginLeft:"3rem", width:"75%"}}>
                <MDBDataTable
                data={setProducts()}
                bordered
                striped
                responsive
                hover
                className="py-1 w-100 h-10 mt-2 "
                />
            </div>
   </>
  )
}

export default Products
