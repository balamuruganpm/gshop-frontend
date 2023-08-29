import React from 'react'
import {Fragment} from 'react'
import {MDBDataTable} from 'mdbreact';
 import '../../../css/admin css/products.css' ;
 import '../../../css/admin css/category.css'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect} from 'react';
import {getAdminProducts} from '../../../actions/productActions'
 import {getAdminCategories} from '../../../actions/categoryAction';
 import { deleteCategory } from '../../../actions/categoryAction';
import { clearError } from '../../../slice/categorySlice';
import { clearCategoryDeleted } from '../../../slice/categorySlice';
import {Button} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import Loader from '../../layouts/Loader';
import Adminpanel from '../Adminpanel';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';


const Products = () => {
    const {categories = [], loading = true, error} = useSelector (state => state.categoryState)
    const dispatch = useDispatch();
    const{products=[]} = useSelector(state=>state.productsState)
   
    const{ isCategoryDeleted, error:categoryError } = useSelector(state => state.categoryState)
   

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
                    label: 'Stock',
                    field: 'stock',
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
        categories.forEach( (category,index) => {
            data.rows.push({
                serialno:<p>{index+1}</p>,
                image:<PhotoLibraryIcon className='c-image' style={{fontSize:"24px"}}/>,
                category : category.category,
                stock:(products[0]?.category, console.log(products[0]?.category) ),
                status:<p style={{color:"blue"}}>Active</p>,
                actions: (
                    <Fragment>
                        <Link to={`/admin/category/updatecategory/${category._id}`} className="btn btn-primary  py-1  res_btn ml-1"> <i className="fa fa-pencil"></i></Link>
                        <Button onClick={e => deleteHandler(e, category._id)} className="btn btn-danger py-1 ml-2 res_btn">
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
        dispatch(deleteCategory(id))
    }




    useEffect(()=>{

        if(error || categoryError){
         toast(error || categoryError,{
             position:toast.POSITION.BOTTOM_CENTER,
             type:'error',
             onOpen: ()=>{dispatch(clearError())}
         })
         return
        }
        if(isCategoryDeleted){
         toast('Category Deleted Succesfully!',{
             type: 'success',
             position: toast.POSITION.BOTTOM_CENTER,
             onOpen: () => dispatch(clearCategoryDeleted())
         })
         return;
     }
        dispatch(getAdminCategories)
        dispatch(getAdminProducts)
     },[dispatch,error, isCategoryDeleted, categoryError])

 

  return (
        <>

           <Adminpanel/>
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
