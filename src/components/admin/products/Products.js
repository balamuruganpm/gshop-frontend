import React from 'react'
import {Fragment} from 'react'
import {MDBDataTable} from 'mdbreact';
import '../../../css/admin css/products.css'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {getAdminProducts} from '../../../actions/productActions';
import { deleteProduct } from '../../../actions/productActions';
import { clearError } from '../../../slice/productsSlice';
import { clearProductDeleted } from '../../../slice/productSlice';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

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
                    label: 'Stock',
                    field: 'stock',
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
                image:product.images.map(image=>(<img src={image.image} alt="" style={{width:"50px", height:"40px"}}/>)),
                price : `$${product.price}`,
                name: product.name,
                stock: product.stock,
                
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
        dispatch(getAdminProducts)
     },[dispatch,error, isProductDeleted, productError])

  return (
    <>
     <h3 className='add_title pt-4 me-0 admin-container' id="product_title">Product List</h3>

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
