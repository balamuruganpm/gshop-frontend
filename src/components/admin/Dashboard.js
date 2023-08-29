import React,{useEffect} from 'react';
import '../../css/admin css/dashboard.css'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'; 
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAdminProducts} from '../../actions/productActions'
import {getUsers} from '../../actions/userActions'
import {adminOrders as adminOrdersAction} from '../../actions/orderAction'

import {Line} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
}from 'chart.js';


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function Dashboard(props) {
   
    //  const data = {
    //     labels:["May 12","May 13","May 14","May 15","May 16","May 17","May 18"],
    //     datasets:[{
    //         data:[8, 7.8, 8, 7, 5, 6],
    //         borderColor:"#FF512F"
    //     }]
    //  }
    //  const options = [];

    const {products = []} = useSelector(state => state.productsState)
    const {adminOrders = []} = useSelector(state => state.orderState)
    const {users = []} = useSelector(state => state.userState)
    const dispatch = useDispatch();


    useEffect( () => {
      dispatch(getAdminProducts);
      dispatch(getUsers);
      dispatch(adminOrdersAction)
    }, [dispatch])

    return (
        <div>
    {/* main continer */}

        <main className="mt-5 pt-3 admin-container me-0">

        <div className='widget-grid'>
         <div className='widget-container'>  
         <div className='dash_widget'>
         <Link to='/products'> 
         <div className="card text-center mb-3 widget0">
          <div className="card-body">
            <SettingsApplicationsIcon />
           <h5 className="card-title">Products</h5>
           <h1>{products.length}</h1>
          </div>
         </div>
         </Link>
         </div>
         <div className='dash_widget'>
         <Link to='/orders'>
         <div className="card text-center mb-3 widget1">
          <div className="card-body">
            <LocalMallRoundedIcon />
           <h5 className="card-title">Orders</h5>
           <h1>{adminOrders.length}</h1>
          </div>
         </div>
         </Link>
         </div>
         <div className='dash_widget'>  
         <Link to='/customers'>
         <div className="card text-center mb-3 widget2">
          <div className="card-body">
            <PeopleRoundedIcon />
           <h5 className="card-title">Users</h5>
           <h1>{users.length}</h1>
         </div>
         </div>
         </Link>
         </div>
         <div className='dash_widget'>
         <Link to='/category'>
         <div className="card text-center mb-3 widget3">
          <div className="card-body">
            <AutoFixNormalIcon />
            <h5 className="card-title">Categories</h5>
           <h1>{products.length}</h1>
           </div>
         </div>
         </Link>
         </div>
         </div> 
        </div>
        
{/* 
        <div className='charts-container'>
         <div className='charts'> Charts
         <Line data = {data} options = {options}></Line>
        </div>
        </div> */}

      
        </main>
   
     {/* main continer end*/}
     
        </div>
    );
}

export default Dashboard;