import React,{useState} from 'react';
import {removeItemFromCart} from '../../slice/cartSlice'
import {Link, useNavigate}  from 'react-router-dom'
import {useDispatch,useSelector } from 'react-redux';
import {DropdownButton, Dropdown, Image} from 'react-bootstrap';
import "react-bootstrap/dist/react-bootstrap.min.js";
import '../../css/admin css/adminpanel.css'
import { logout } from '../../actions/userActions';
import { toast } from "react-toastify";
function Header1(props) {
  const{items:cartItems} = useSelector(state=>state.cartState);
  const{items }= useSelector(state=>state.cartState);
  const dispatch = useDispatch();
  const[dropdown,setDropdown]=useState(false)
  const [showLog, setShowLog] = useState(false)
  const {user} = useSelector(state=>state.authState);
  const {loading, error, isAuthenticated} = useSelector(state=>state.authState)
  const[showNavbar,setShowNavbar] = useState(false)
  const navigate = useNavigate()

const logoutHandler = () => {
  dispatch(logout);
}


const showDashboard = ()=>{
  setDropdown(!dropdown)
   navigate('/dashboard')
}

    return (
  <div className="cms-index-index cms-home-page">
            {/* <!-- mobile menu --> */}
 <div id="mobile-menu">
  <div id="mobile-search">
    <form>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" name="search" />
        <button className="btn-search" type="button"><i className="fa fa-search"></i></button>
      </div>
    </form>
  </div>


</div>
{/* <!-- end mobile menu --> */}
<div id="page"> 
  
  {/* <!-- Header --> */}
  <header>
    <div className="header-container">
      { showNavbar && 
     <div className='hambarger_nav animate1'>
      <i class="fa-solid fa-circle-xmark" id="close_navbar" onClick={()=>setShowNavbar(showNavbar===false)}></i>
         <ul className="hidden-xs" id="side_header">    
               <li className="mt-root demo_custom_link_cms" onClick={()=>setShowNavbar(showNavbar===false)}>
               <div className="mt-root-item"><a href="index.html">
               <Link to='/'> <div className="title title_font"><span className="title-text">Home</span></div>    </Link>
                 </a></div>
             </li>
             <li className="mt-root" onClick={()=>setShowNavbar(showNavbar===false)}>
               <div className="mt-root-item"><a href="about_us.html">
               <Link to='/about_us'><div className="title title_font"><span className="title-text">about us</span></div></Link>
                 </a></div>
             </li>
             
                <li className="mt-root" onClick={()=>setShowNavbar(showNavbar===false)}>
               <div className="mt-root-item"><a href="shop_grid.html">
                 <Link to='/shop'><div className="title title_font"><span className="title-text">Shop</span> </div></Link>
                 </a></div>
             </li>
             
                <li className="mt-root" onClick={()=>setShowNavbar(showNavbar===false)}>
               <div className="mt-root-item"><a href="contact_us.html">
                 <Link to='/contact_us'><div className="title title_font"><span className="title-text">Contact Us</span> </div></Link>
                 </a></div>
             </li>
             

             
             
             
            
      </ul>
      </div>
       }
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 hidden-xs"> 
              {/* <!-- Default Welcome Message --> */}
              <div className="welcome-msg">Welcome to G Shop</div>
            </div>
            
            {/* <!-- top links --> */}
          
            <div className="headerlinkmenu col-lg-8 col-md-7 col-sm-8 col-xs-12">
              <div className="links">
         

{ isAuthenticated ? 
            (
               <>
     
                
                 <div className="wishlist" id="myaccount" onClick={()=> setDropdown(!dropdown)}><a title="My Wishlist"><i className="fa fa-user" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">{user.name}</span></a></div>
                
              {dropdown &&  <div className='res_homedropDown'>
                {user.role === 'admin' && <div className='res_homelist'  onClick={showDashboard}><p><i class="fa-regular fa-address-card" style={{marginRight:"0.5rem"}}></i> DashBoard</p></div>}
                <div className='res_homelist' onClick={()=> setDropdown(!dropdown)}> <p><i class="fa-regular fa-address-card" style={{marginRight:"1rem"}} onClick={()=>{navigate('/profile')}}></i>Profile</p> </div>

                <div className='res_homelist' onChange={()=>setDropdown(!dropdown)} onClick={logoutHandler}><p> <i class="fa-solid fa-arrow-right-from-bracket" style={{marginRight:"1rem"}}></i>Logout</p></div>
                </div>
                 }
            
                 <Link to='/wishlist'> <div className="wishlist" id="wishlist"><a title="My Wishlist"><i className="fa fa-heart" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">Wishlist</span></a></div></Link>
                 <Link to='/blog'> <div className="blog" id="blog"><a title="Blog"><i className="fa fa-rss" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">Blog</span></a></div></Link>
                 <Link to='/profile'> <div className="profile"><a> <span className="hidden-xs">Profile</span> <i class="fas fa-sort-down" id="down_sort" onClick={()=> setShowLog(!showLog)}style={{color:"#fff"}}></i><i class="fa-regular fa-address-card" id="add-card" onClick={()=> setShowLog(!showLog)}style={{color:"#fff"}}></i></a></div> </Link>
                  {showLog&&<div className='res_logdropDown' >
                 <div className='res_homelist' id="log_out" onChange={()=>setShowLog(!showLog)} onClick={logoutHandler}><p> <i class="fa-solid fa-arrow-right-from-bracket" style={{marginRight:"1rem"}}></i>Logout</p></div>
                 </div>
                 }
               </>
            )
          
          :
          <Link to='/my_account'> <div className="login"><a><i className="fa fa-unlock-alt" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">Log In</span></a></div></Link> 
     
          }
              </div> 
            </div>
            
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-3 col-xs-8"> 
            {/* <!-- Header Logo --> */}
            <Link to='/'><div className="logo"><a title="e-commerce" href="index.html"><img alt="e-commerce" src="/images/g.png"/></a> </div></Link>
            {/* <!-- End Header Logo -->  */}
          </div>
          <div className="col-md-9 col-sm-8 col-xs-4">
            <div className="mtmegamenu">

              <ul className="hidden-xs">
               
                  <li className="mt-root demo_custom_link_cms">
                  <div className="mt-root-item"><a href="index.html">
                  <Link to='/'> <div className="title title_font"><span className="title-text">Home</span></div>    </Link>
                    </a></div>
                </li>
            
              
             
                <li className="mt-root">
                  <div className="mt-root-item"><a href="about_us.html">
                  <Link to='/about_us'><div className="title title_font"><span className="title-text">about us</span></div></Link>
                    </a></div>
                </li>
                
                   <li className="mt-root">
                  <div className="mt-root-item"><a href="shop_grid.html">
                    <Link to='/shop'><div className="title title_font"><span className="title-text">Shop</span> </div></Link>
                    </a></div>
                </li>
                
                   <li className="mt-root">
                  <div className="mt-root-item"><a href="contact_us.html">
                    <Link to='/contact_us'><div className="title title_font"><span className="title-text">Contact Us</span> </div></Link>
                    </a></div>
                </li>
                

                
                
                
               
              </ul>


              {/* <!-- top cart --> */}
              <div className="col-md-3 col-xs-9 col-sm-2 top-cart">
                <div className="top-cart-contain">
                  <div className="mini-cart">
                    <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle"> <a href="#">
                      <div className="cart-icon"><i className="fa fa-shopping-cart"></i></div>
                      <div className="shoppingcart-inner hidden-xs hidden-sm"><span className="cart-title">Shopping Cart</span> <span className="cart-total">{cartItems && cartItems.length} Item(s): <span>&#x20b9;</span> {items.reduce((acc,item)=>(acc + item.quantity * item.price),0)}</span></div>
                      </a></div>
                    <div>
                      <div className="top-cart-content">
                        <div className="block-subtitle hidden-xs">Recently added item(s)</div>
                        <ul id="cart-sidebar" className="mini-products-list">
                        {items?.map (item=>(
                          <li className="item odd"> <a href="shopping_cart.html" title="Ipsums Dolors Untra" className="product-image"><img  src={item.image} alt={item.name}  width="65"/></a>
                            <div className="product-details"> <a title="Remove This Item" className="remove-cart"  onClick={()=> dispatch(removeItemFromCart(item.product))}><i className="icon-close"></i></a>
                              <p className="product-name"><a href="shopping_cart.html">{item.name}</a> </p>
                              <strong>1</strong> x <span className="price"><span>&#8377;</span> {item.price}</span> </div>
                          </li>
                          ))}

                        </ul>
                        <div className="top-subtotal">Subtotal: <span className="price"><span>&#8377;</span> {items.reduce((acc,item)=>(acc + item.quantity * item.price),0)}</span></div>
                        <div className="actions">
                        <Link to='/check_out'><button className="btn-checkout" type="button"><i className="fa fa-check"></i><span>Checkout</span></button></Link>
                        <Link to='/cart'> <button className="view-cart" type="button"><i className="fa fa-shopping-cart"></i> <span>View Cart</span></button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

 

             </div>
          </div>
        </div>
        
      </div>
   
      <div id="hambarger">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 hidden-xs"> 
              {/* <!-- Default Welcome Message --> */}
              <div className="welcome-bar" onClick={()=> setShowNavbar(!showNavbar)} data-bs-toggle="offcanvas" role="button" aria-controls='sidebar'><i class="fa-solid fa-bars"></i></div>
            </div>
            
            {/* <!-- top links --> */}
          
          {/* offcanvas */}
   
            
          </div>
        </div>
      </div>
    

    </div>
  </header>
  {/* <!-- end header -->  */}
   


  </div>
        </div>
    );
}

export default Header1;



