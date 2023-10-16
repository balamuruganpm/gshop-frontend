import React, { Fragment,useEffect } from 'react';
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
// import {deleteOrder, adminOrders as adminOrdersAction} from '../../../actions/orderAction';
import Loader from '../../layouts/Loader';
import {MDBDataTable} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import '../../../css/admin css/order.css'
import Adminpanel from '../Adminpanel';
import {clearError, clearOrderDeleted } from '../../../slice/orderSlice';
import '../../../css/admin css/viewOrder.css'
import { Link } from 'react-router-dom';

import { userOrder  as userOrdersAction} from '../../../actions/orderAction'

function ViewOrder(props) {
    const { userOrders = []} = useSelector(state => state.orderState)
    const { orderItems = []} = useSelector(state => state.orderState)
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userOrdersAction)
    },[dispatch])
    const setOrders = () => {
        const data = {
            columns : [
                {
                    label: 'Product',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: 'Quantity',
                    field: 'quantity',
                    sort: 'asc'
                },
                {
                    label: 'Subtotal',
                    field: 'subtotal',
                    sort: 'asc'
                },
                
                {
                    label: 'Total',
                    field: 'total',
                    sort: 'asc'
                },
                
                
            ],
            rows : []
        }

        orderItems?.forEach(orderItem => {
            data.rows.push({
                 product:  orderItem.name,
                 price: orderItem.price,
                 quantity: orderItem.quantity,
            })
        })
        userOrders?.forEach(userOrder=>{
            data.rows.push({
                subtotal:userOrder.itemsPrice + userOrder.taxPrice + userOrder.shippingPrice,
                total:userOrder.totalPrice
            })
         
        })
     
        return data;
    }
    return (

        <Fragment>
        <Adminpanel/>
        <div className="admin-container" style={{ display:"block"}}>
              <div className='add_title'>
               <h2>View Order</h2>
              
            </div>
            <div className='wrapper_container'>
            <div className='wrapper'>
           <div className='collapsible'>
            <input type="checkbox" id="collapsible-one" />
            <label for="collapsible-one"><span class="material-symbols-outlined" id="angle">person</span> <span style={{marginLeft:"2rem"}}>Customer Information</span> <i class="fa-solid fa-angle-down" ></i></label>
            <div className='collapsible-text'>
                <p>Lokesh Ram</p>
                <p>vishnuraamlokesh4941@gmail.com</p>
                <p>Phone: 9894744678</p>
            </div>
          </div> 
           </div>
           <div className='wrapper'>
           <div className='collapsible'>
            <input type="checkbox" id="collapsible-two" />
            <label for="collapsible-two"><span class="material-symbols-outlined" id="angle">local_shipping</span> <span style={{marginLeft:"2rem"}}>Shipping Address</span> <i class="fa-solid fa-angle-down" ></i></label>
            <div className='collapsible-text'>
                <p>Lokesh Ram</p>
                <p>vishnuraamlokesh4941@gmail.com</p>
                <p>Phone: 9894744678</p>
            </div>
          </div> 
           </div>
           <div className='wrapper'>
           <div className='collapsible' id="payment_container">
            <input type="checkbox" id="collapsible-three" />
            <label for="collapsible-three"><span class="material-symbols-outlined" id="angle">credit_card</span>
              <span style={{marginLeft:"2rem"}}>Payment Method </span> <i class="fa-solid fa-angle-down" ></i></label>
            <div className='collapsible-text' id="payment_text_container">
                <p>Cash on Delivery</p> 
            </div>
          </div> 
           </div>
           </div>
           <div className='update_order_table'>
        <MDBDataTable
                data={setOrders()}
                bordered
                striped
                responsive
                hover
                className="py-1 w-100 h-10 mt-2 ml-3"
                />
        </div>
           <div className='update_order_container'>
           <div>
            <div className='update_order_head'>
                <h2><span class="material-symbols-outlined" style={{marginRight:"1rem"}}>credit_card</span>Update Order</h2>
                <span class="material-symbols-outlined">remove</span>
            </div>
            <div className='Update_order_btn'>
                <label>Order Status</label>
                <select>
                    <option value="completed" key="">completed</option>
                </select>
            </div>
           </div>
          <button className='update_order_btn'>Update Order</button>
          </div>
        </div>
   
  
       </Fragment>
   
    );
}

export default ViewOrder;