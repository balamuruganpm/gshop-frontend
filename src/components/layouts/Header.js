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
   {/* <ul>
     <li><a href="index.html" className="home1">Home</a></li>
     <li><a href="about_us.html">About us</a></li>
     <li><a href="shop_grid.html">Shop</a></li>
     <li><a href="contact_us.html">Contact us</a></li>
  </ul> */}

</div>
{/* <!-- end mobile menu --> */}
<div id="page"> 
  
  {/* <!-- Header --> */}
  <header>
    <div className="header-container">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 hidden-xs"> 
              {/* <!-- Default Welcome Message --> */}
              <div className="welcome-msg ">Welcome to G Shop</div>
            </div>
            
            {/* <!-- top links --> */}
          
            <div className="headerlinkmenu col-lg-8 col-md-7 col-sm-8 col-xs-12">
              <div className="links">
              {/* {isAuthenticated ?
              <>
              (         
   
              )
                : 

                 </>
                 } */}

{ isAuthenticated ? 
            (
               <>
              <div>
                
                <div className="myaccount" onClick={()=> setDropdown(!dropdown)}><i className="fa fa-user" style={{color:"#FFFFFF", marginRight:"5px"}}></i><span className="hidden-xs"  style={{color:"#FFFFFF"}}>{user.firstname}</span></div>
              
              {dropdown &&  <div className='res_homedropDown'>
                {user.role === 'admin' && <div className='res_homelist'  onClick={showDashboard}><p><i class="fa-regular fa-address-card" style={{marginRight:"0.5rem"}}></i> DashBoard</p></div>}
                <div className='res_homelist' onClick={()=> setDropdown(!dropdown)}> <p><i class="fa-regular fa-address-card" style={{marginRight:"1rem"}} onClick={()=>{navigate('/profile')}}></i>Profile</p> </div>

                <div className='res_homelist' onChange={()=>setDropdown(!dropdown)} onClick={logoutHandler}><p> <i class="fa-solid fa-arrow-right-from-bracket" style={{marginRight:"1rem"}}></i>Logout</p></div>
                </div>
                 }
                </div>
                <Link to='/wishlist'> <div className="wishlist"><a title="My Wishlist" href="wishlist.html"><i className="fa fa-heart" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">Wishlist</span></a></div></Link>
                 <Link to='/blog'> <div className="blog"><a title="Blog" href="blog.html"><i className="fa fa-rss" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">Blog</span></a></div></Link>
                 <div className="login"> <a><Link to='/profile'> <span className="hidden-xs">Profile</span> </Link> <i class="fas fa-sort-down" onClick={()=> setShowLog(!showLog)}style={{color:"#fff"}}></i></a></div>
                  {showLog&&<div className='res_logdropDown' >
                   <div className='res_homelist' id="log_out" onChange={()=>setShowLog(!showLog)} onClick={logoutHandler}><p> <i class="fa-solid fa-arrow-right-from-bracket" style={{marginRight:"1rem"}}></i>Logout</p></div>
                   </div>
                 }
               </>
            )
          
          :
          <Link to='/my_account'> <div className="login"><a href="account_page.html"><i className="fa fa-unlock-alt" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">Log In</span></a></div></Link> 
     
          }
              </div> 
            </div>
            
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{background:"transparent",zIndex:"1000"}}>
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

              <div class="col-md-3 col-xs-9 col-sm-2 top-cart">
                <div class="top-cart-contain">
                  <div class="mini-cart">
                    <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle"> <a href="#">
                      <div class="cart-icon"><i class="fa fa-shopping-cart"></i></div>
                      <div class="shoppingcart-inner hidden-xs hidden-sm"><span class="cart-title">Shopping Cart</span> <span class="cart-total">{cartItems && cartItems.length} Item(s): <span>&#x20b9;</span> {items.reduce((acc,item)=>(acc + item.quantity * item.price),0)}</span></div>
                      </a></div>
                    <div>
                      <div class="top-cart-content">
                        <div class="block-subtitle hidden-xs">Recently added item(s)</div>
                        <ul id="cart-sidebar" class="mini-products-list">
                        {items?.map (item=>(
                          <li class="item odd"> <a href="shopping_cart.html" title="Ipsums Dolors Untra" class="product-image"><img  src={item.image} alt={item.name}  width="65"/></a>
                            <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart" onClick={()=> dispatch(removeItemFromCart(item.product))}><i class="icon-close"></i></a>
                              <p class="product-name"><a href="shopping_cart.html">{item.name}</a> </p>
                              <strong>{item.quantity}</strong> x <span class="price"><span>&#8377;</span> {item.price}</span> </div>
                          </li>
                        ))}
                       
                        </ul>
                        <div class="top-subtotal">Subtotal: <span class="price"><span>&#8377;</span> {items.reduce((acc,item)=>(acc + item.quantity * item.price),0)}</span></div>
                        <div class="actions">
                        <Link to='/check_out'><button class="btn-checkout" type="button"><i class="fa fa-check"></i><span>Checkout</span></button> </Link>
                        <Link to='/check_out'><button class="view-cart" type="button"><i class="fa fa-shopping-cart"></i> <span>View Cart</span></button></Link>
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
    </div>
  </header>
  {/* <!-- end header -->  */}
  

  </div>
        </div>
    );
}

export default Header1;



