import React, { Fragment, useEffect } from 'react';
import MetaData from '../layouts/MetaData';
import '../../cssFiles/cart.scss'
import {MDBDataTable} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import { userOrder  as userOrdersAction} from '../../actions/orderAction'
import { Link } from 'react-router-dom';
function UserOrders(props) {
  
        const { userOrders = []} = useSelector(state => state.orderState)
        const
     dispatch = useDispatch();
    
        useEffect(() => {
            dispatch(userOrdersAction)
        },[dispatch])
    
        const setOrders = () => {
            const data = {
                columns: [
                    {
                        label: "Order ID",
                        field: 'id',
                        sort: "asc"
                    },
                    {
                        label: "Number of Items",
                        field: 'numOfItems',
                        sort: "asc"
                    },
                    {
                        label: "Amount",
                        field: 'amount',
                        sort: "asc"
                    },
                    {
                        label: "Status",
                        field: 'status',
                        sort: "asc"
                    },
                    {
                        label: "Actions",
                        field: 'actions',
                        sort: "asc"
                    }
                ],
                rows:[]
            }
    
            userOrders.forEach(userOrder => {
                data.rows.push({
                    id:  userOrder._id,
                    numOfItems: userOrder.orderItems.length,
                    amount: `$${userOrder.totalPrice}`,
                    status: userOrder.orderStatus && userOrder.orderStatus.includes('Delivered') ?
                    (<p style={{color: 'green'}}> {userOrder.orderStatus} </p>):
                    (<p style={{color: 'red'}}> {userOrder.orderStatus} </p>),
                    actions: <Link to={`/order/${userOrder._id}`} className="btn btn-primary" >
                        <i className='fa fa-eye'></i>
                    </Link>
                })
            })
            return data;
        }
    
    return (
        <Fragment>
          <MetaData title="My Order"/> 
          <div className='cart-items-container' style={{width:"80%",marginTop:"10rem"}}>
          <h1>My Orders</h1>
             <MDBDataTable
                data={setOrders()}
                bordered
                striped
                hover
                className="py-1 w-100 h-10 mt-2 px-5"
                />
          </div>
      
        </Fragment>
      
    );
}

export default UserOrders;