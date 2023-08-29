import React, { Fragment,useEffect } from 'react';
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import {deleteOrder, adminOrders as adminOrdersAction} from '../../../actions/orderAction';
import Loader from '../../layouts/Loader';
import {MDBDataTable} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import {Link} from 'react-router-dom'
import '../../../css/admin css/order.css'
import '../../../css/admin css/category.css'
import Adminpanel from '../Adminpanel';
import {clearError, clearOrderDeleted } from '../../../slice/orderSlice';

import { NavLink } from 'react-router-dom';


function OrdersReport(props) {
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
                    label: 'Shipping Charge',
                    field: 'shipping charge',
                    sort: 'asc'
                },
                {
                    label: 'Payment Method',
                    field: 'payment',
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
                        <Link to='/order'><Button className="btn py-1 px-2 ml-2 view_cate">
                            View
                        </Button>
                        </Link>
                    </Fragment>
                )
            })
        })

        return data;
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
               <h2 className='order_title'>Order List</h2>
               <div className='order_report_title'>Orders Report</div>
               <div className='status_btns_container orders_report'>
                <div>
                <label className='status_label'>Status *</label>
                <select className='select_status'>
                    <option value="select Status" key="">Select Status</option>
                    <option value="all" key="">All</option>
                    <option value="order place" key="">Order Place</option>
                    <option value="Processing" key="">Processing</option>
                    <option value="dispatch" key="">Dispatched</option>
                    <option value="Delivered" key="">Delivered</option>
                    <option value="completed" key="">Completed</option>
                    <option value="Cancelled" key="">Cancelled</option>
                    <option value="Delivered" key="">Returned</option>
                </select>
                </div>
                <div>
                <label className='status_label'>From Date *</label>
                <input type="date" placeholder='dd/mm/yy' className='pick_date'/>
                </div>

                <div>
                <label className='status_label'>To Date *</label>
                <input type="date" placeholder='dd/mm/yy'  className='pick_date'/>
                </div>
                <button className='view_cate search_btn'>Search</button>
               </div>
            </div>
            <div className='res_order'>
        {loading ? <Loader/>:
    
            
                <MDBDataTable
                data={setOrders()}
                bordered
                striped
                responsive
                hover
                className="py-5 w-90 h-10 mt-2 ml-5"
                />
    }
                </div>
            
            
        </div>
       </Fragment>
    );
}

export default OrdersReport;