import React, { Fragment, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';  
import 'font-awesome/css/font-awesome.min.css';
import '../../css/admin css/adminpanel.css'

import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import ListAltSharpIcon from '@mui/icons-material/ListAltSharp';
import {NavLink} from 'react-router-dom';

function Adminpanel(props) {
    const [showOrderContainer, setOrderContainer] = useState(false)
    const [showCategory, setCategory] = useState(false);
    const [showProducts, setProducts] = useState(false);
    const[isOpen, setIsOpen]=useState(true);
    const[dropdown,setDropdown]=useState(false)
    const toggle = ()=> setIsOpen(!isOpen)
    const showDropdown = ()=> setDropdown(!dropdown)
    return (
        <div>
        
        {isOpen &&  
        <div className='container-fluid' id="sidebar">
            <div className='row'> 
                <div className='col-2 min-vh-100  admin-sidebar side_bar'>
                    <ul className='admin-side-nav ms-1 d-sm-inlineblock'>
                        <div className='admin-side-nav-element'>

                      
                       <NavLink to='/dashboard' style={{textDecoration:"none", color:"#333"}}  activeclassName="admin_active" > 
                       <li className='admin-sideContent'>
                            <h3 className='nav-link px-2 ms-1 admin-side-content' style={{color:"#fff"}} >
                             <p className='icon'><DashboardIcon className='icon' /></p><p className='ms-1 show_side_title'>Dashboard</p>
                            </h3>
                        </li>
                        </NavLink>

                       
                        <li className='admin-sideContent' >
                            <h3 className='nav-link px-2 ms-1 admin-side-content'  style={{color:"#fff"}}>
                             <p className='icon'><ListAltSharpIcon className='icon' onClick={()=>setCategory(!showCategory)} /></p><p className='ms-1  d-sm-inline  title show_side_title'   onClick={()=>setCategory(!showCategory)}>Category</p><p id="right-icon"><i class="fa-solid fa-angles-left fa-fade" onClick={()=>setCategory(!showCategory)} ></i></p>
                            </h3>
                        </li>
                      
                        { showCategory &&
                        <>
                        <div className='admin-nestedContent'>
                         <NavLink to='/category'  activeclassName="admin_active" style={{textDecoration:"none"}}>
                            <li className='admin-sideContent'>
                            <h3 className='nav-link px-2 ms-1 admin-nested-content'>
                             <p className='ms-1  d-sm-inline  title'>Categories</p>
                            </h3>
                           </li>
                        </NavLink>
         
                        </div>
                        </>
                   
                   }
                         <li className='admin-sideContent'>             
                            <h3 className='nav-link  admin-side-content'  style={{color:"#fff"}}>
                            <p className='icon'  onClick={()=>setProducts(!showProducts)} ><i class="fa-brands fa-product-hunt" style={{marginLeft:"-0.5rem"}}></i></p><p className='ms-1  d-sm-inline show_side_title title'  onClick={()=>setProducts(!showProducts)} >Product</p><p id="right-icon"><i class="fa-solid fa-angles-left fa-fade" onClick={()=>setProducts(!showProducts)} ></i></p></h3>
                        </li>
                        {showProducts &&
                        <>
                        <div className='admin-nestedContent'>
                         <NavLink to='/activeproducts'  activeclassName="admin_active" style={{textDecoration:"none", color:"#333"}}>
                            <li className='admin-sideContent'>
                            <h3 className='nav-link px-2 admin-nested-content'>
                            <p className='ms-1  d-sm-inline  title' style={{fontSize:"13px"}}>Products</p></h3>
                           </li>
                        </NavLink>
                        <NavLink to='/inactiveproducts'  activeclassName="admin_active" style={{textDecoration:"none", color:"#333"}}>
                        <li className='admin-sideContent'>
                            <h3 className='nav-link px-2 admin-nested-content'  >
                            <p className='ms-1 d-sm-inline  title' style={{fontSize:"13px"}}>Inactive Products</p></h3>
                        </li>
                        </NavLink>
                        </div>
                        </>
                         }
                        <li className='admin-sideContent'>
                            <h3 className='nav-link px-2 admin-side-content'  style={{color:"#fff"}}>
                            <p className='icon'  onClick={()=>setOrderContainer(!showOrderContainer)} ><LocalMallRoundedIcon  className='icon'/></p><p className='ms-1 show_side_title d-sm-inline  title'  onClick={()=>setOrderContainer(!showOrderContainer)} >Sales</p><p id="right-icon"><i class="fa-solid fa-angles-left fa-fade" onClick={()=>setOrderContainer(!showOrderContainer)} ></i></p>
                            </h3>
                        </li>
                      
                  
                      { showOrderContainer  &&
                          <div className='admin-nestedContent'>
                          <NavLink to='/orders' style={{textDecoration:"none", color:"#333"}}> 
                           <li className='admin-sideContent'>
                            <h3 className='nav-link px-2 admin-nested-content'>
                             <p className='ms-1  d-sm-inline  title' style={{fontSize:"13px"}}>Orders</p>
                            </h3>
                          </li>
                          </NavLink>
                          <NavLink to='/ordersreport'>
                          <li className='admin-sideContent'>
                            <h3 className='nav-link px-2 admin-nested-content'>
                             <p className='ms-1  d-sm-inline  title' style={{fontSize:"13px"}}>Orders Report</p>
                            </h3>
                          </li>
                          </NavLink>
                         </div>
                         }

                   
                     
                          <NavLink to='/customers' style={{textDecoration:"none", color:"#333"}}> 
                          <li className='admin-sideContent'>
                            <h3 className='nav-link px-2 admin-side-content'  style={{color:"#fff"}} >
                            <p className='icon'><i class="fa-solid fa-users" style={{fontSize:"16px"}}></i></p><p className='ms-1 show_side_title d-sm-inline title'>Customers</p>
                            </h3>
                           </li>
                        </NavLink>
                                
                        <NavLink to='/customers' style={{textDecoration:"none", color:"#333"}}> 
                          <li className='admin-sideContent'>
                            <h3 className='nav-link px-2 admin-side-content'style={{color:"#fff"}}>
                            <p className='icon'><i class="fa-solid fa-person-walking-luggage" style={{fontSize:"18px"}}></i></p><p className='ms-1 show_side_title d-sm-inline title'>Offers</p>
                            </h3>
                           </li>
                        </NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        }
         {/* offCanvas End */}

        {/* main continer */}
       
        {/* main continer end*/}
        </div>
    );
}

export default Adminpanel;