import React, { Fragment,useEffect } from 'react';
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import {deleteOrder, adminOrders as adminOrdersAction} from '../../../actions/orderAction';
import Loader from '../../layouts/Loader';
import {MDBDataTable} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import '../../../css/admin css/order.css'
import Adminpanel from '../Adminpanel';
import {clearError, clearOrderDeleted } from '../../../slice/orderSlice';

import { NavLink } from 'react-router-dom';


function Order(props) {
    const { adminOrders = [], loading = true, error, isOrderDeleted }  = useSelector(state => state.orderState)

    const dispatch = useDispatch();

    const setOrders = () => {
        const data = {
            columns : [
                {
                    label: 'S.No',
                    field: 'serialno',
                    sort: 'asc'
                },
                {
                    label: 'Order ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Date',
                    field: 'date',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Mobile',
                    field: 'mobile',
                    sort: 'asc'
                },
              
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc'
                },
                {
                    label: 'Total',
                    field: 'total',
                    sort: 'asc'
                },
                {
                    label: 'Payment Method',
                    field: 'payment',
                    sort: 'asc'
                },
                {
                    label: 'Transaction Id',
                    field: 'transaction id',
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

        adminOrders.forEach( (order,index) => {
            data.rows.push({
                serialno:<p>{index+1}</p>,
                id: order._id,
                date:order.createdAt,
                name: order.user,
                mobile:order.shippingInfo.phoneNo,
                total: `$${order.totalPrice}`,
                status: <p style={{color: order.orderStatus.includes('Processing') ? 'red' : 'green'}}>{order.orderStatus}</p> ,
                actions: (
                    <Fragment>
                        {/* <Link to={`/admin/updateorder/${order._id}`} className="btn btn-primary"> <i className="fa fa-pencil"></i></Link> */}
                        <Button onClick={e => deleteHandler(e, order._id)} className="btn btn-danger py-1 px-2 ml-2">
                            <i className="fa fa-trash"></i>
                        </Button>
                    </Fragment>
                )
            })
        })

        return data;
    }

    const deleteHandler = (e, id) => {
        e.target.disabled = true;
        dispatch(deleteOrder(id))
    }

    useEffect(() => {
        if(error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearError()) }
            })
            return
        }
        if(isOrderDeleted) {
            toast('Order Deleted Succesfully!',{
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(clearOrderDeleted())
            })
            return;
        }

        dispatch(adminOrdersAction)
    },[dispatch, error, isOrderDeleted])

    return (
       <Fragment>
        <Adminpanel/>
        <div className="admin-container" style={{marginTop:"3rem", display:"block"}}>
              <div className='add_title'>
               <h2>Order List</h2>
               <div className='status_btns_container'>
               <NavLink to='/addcategory'><button className='status_btn'>Order Placed (0)</button></NavLink>
               <NavLink to='/addcategory'><button className='status_btn'> Processing(0)</button></NavLink>
               <NavLink to='/addcategory'><button className='status_btn'>Dispatch(0)</button></NavLink>
               <NavLink to='/addcategory'><button className='status_btn'> Delivered(0)</button></NavLink>
               <NavLink to='/addcategory'><button className='status_btn'> Completed(`${adminOrders.length}`)</button></NavLink>
               <NavLink to='/addcategory'><button className='status_btn'>Cacelled(0)</button></NavLink>
               <NavLink to='/addcategory'><button className='status_btn'>Returned(0)</button></NavLink>
               </div>
            </div>
            <div  className='res_order'>
        {loading ? <Loader/>:
    
            
                <MDBDataTable
                data={setOrders()}
                bordered
                striped
                responsive
                hover
                className="py-1 w-100 h-10 mt-2 ml-3"
                />
    }
                </div>
            
            
        </div>
       </Fragment>
    );
}

export default Order;