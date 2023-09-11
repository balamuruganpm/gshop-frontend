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

  const {user} = useSelector(state=>state.authState);
  const {loading, error, isAuthenticated} = useSelector(state=>state.authState)

  const navigate = useNavigate()

const logoutHandler = () => {
  dispatch(logout);
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
                {user.role === 'admin' && <div className='res_homelist' onChange={()=>setDropdown(!dropdown)}  onClick={()=>{navigate('/dashboard')}}><p><i class="fa-regular fa-address-card" style={{marginRight:"0.5rem"}}></i> DashBoard</p></div>}
                <div className='res_homelist' onClick={()=> setDropdown(!dropdown)}> <p><i class="fa-regular fa-address-card" style={{marginRight:"1rem"}} onClick={()=>{navigate('/profile')}}></i>Profile</p> </div>

                <div className='res_homelist' onChange={()=>setDropdown(!dropdown)} onClick={logoutHandler}><p> <i class="fa-solid fa-arrow-right-from-bracket" style={{marginRight:"1rem"}}></i>Logout</p></div>
                </div>
                 }
                </div>
                <Link to='/wishlist'> <div className="wishlist"><a title="My Wishlist" href="wishlist.html"><i className="fa fa-heart" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">Wishlist</span></a></div></Link>
                 <Link to='/blog'> <div className="blog"><a title="Blog" href="blog.html"><i className="fa fa-rss" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">Blog</span></a></div></Link>
                 <Link to='/my_account'> <div className="login"><a href="account_page.html"><i className="fa fa-unlock-alt" style={{color:"#FFFFFF"}}></i><span className="hidden-xs">Log In</span></a></div></Link>
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
              <div className="col-md-3 col-xs-9 col-sm-2 top-cart ">
                <div className="top-cart-contain">
                  <div className="mini-cart">
                    <div  className="basket dropdown-toggle"> <a href="#">
                      <div className="cart-icon"><i className="fa fa-shopping-cart"></i></div>
                      <div className="shoppingcart-inner hidden-xs hidden-sm"><span className="cart-title">Shopping Cart</span> <span className="cart-total">{cartItems && cartItems.length} Item(s): ${items.reduce((acc,item)=>(acc + item.quantity * item.price),0)}</span></div>
                      </a></div>
                    <div className='show_mini_cart'>
                      <div className="top-cart-content">
                        <div className="block-subtitle hidden-xs">Recently added item(s)</div>
                        <ul id="cart-sidebar" className="mini-products-list">
                        {items.map (item=>(
                          <div className='cart_pruduct_detail'>
                          <li className="item odd"> <a href="shopping_cart.html" title="Ipsums Dolors Untra" className="product-image"><img src={item.image} alt={item.name} width="65"/></a>
                            <div className="product-details"> <a href="#" title="Remove This Item" className="remove-cart"><i className="icon-close"  onClick={()=> dispatch(removeItemFromCart(item.product))}></i></a>
                              <p className="product-name"><a href="shopping_cart.html">{item.name}</a> </p>
                              <strong>1</strong> x <span className="price">${item.price}</span> </div>
                          </li>
                          </div>
                        ))}
                        </ul>
                        <div className="top-subtotal">Subtotal: <span className="price">${items.reduce((acc,item)=>(acc + item.quantity * item.price),0)}</span></div>
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
    </div>
  </header>
  {/* <!-- end header -->  */}
  

  </div>
        </div>
    );
}

export default Header1;



  {/* <!-- Navbar --> */}
  // <nav>
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-md-3 col-sm-4 col-xs-3">
  //         <div className="mm-toggle-wrap">
  //           <div  className="mm-toggle"> <i className="fa fa-align-justify"></i> </div>
  //           <span className="mm-label hidden-xs">Categories</span> </div>
  //           <div className="mega-container  visible-lg visible-md visible-sm">
  //           <div className="navleft-container">
  //             <div onClick={()=>setShowCategory(!showCategory)} className="mega-menu-title dropdown-toggle">
  //               <h3>shop by category</h3>
  //             </div>
  //             {showCategory &&  <div className="mega-menu-category">
  //               <ul className="nav" id="nav_list">
  //                 <li className='women_dropdown'> <a href="#"><i className="icon fa fa-female fa-fw"></i> Women</a>
  //                   <div className="wrap-popup">
  //                     <div className="popup">
  //                       <div className="row">
  //                         <div className="col-md-4 col-sm-6 categories">
  //                           <h3>Clother</h3>
  //                           <ul className="nav">
  //                             <li><a href="shop_grid.html">Cocktail</a></li>
  //                             <li><a href="shop_grid.html">Day</a></li>
  //                             <li><a href="shop_grid.html">Evening</a></li>
  //                             <li><a href="shop_grid.html">Sports</a></li>
  //                           </ul>
  //                           <br />
  //                           <h3 style={{marginTop:"-1.2rem"}}>Dress and skirt</h3>
  //                           <ul className="nav">
  //                             <li><a
  //                               href="shop_grid.html">blazers</a></li>
  //                             <li><a href="shop_grid.html">table</a></li>
  //                             <li><a href="shop_grid.html">coats</a></li>
  //                             <li><a href="shop_grid.html">Sports</a></li>
  //                             <li><a href="shop_grid.html">kids</a></li>
  //                           </ul>
  //                         </div>
  //                         <div className="col-md-4 col-sm-6 has-sep">
  //                           <h3>Shoes</h3>
  //                           <ul className="nav">
  //                             <li> <a href="shop_grid.html">Tandoor & Grills</a> </li>
  //                             <li> <a href="shop_grid.html">Baking Tools</a> </li>
  //                             <li> <a href="shop_grid.html">Retina Display </a> </li>
  //                             <li> <a href="shop_grid.html">Washers</a> </li>
  //                           </ul>
  //                           <br/>
  //                           <h3 style={{marginTop:"-1.2rem"}}>Jewellery </h3>
  //                           <ul className="nav">
  //                             <li> <a href="shop_grid.html">Toasters</a> </li>
  //                             <li> <a href="shop_grid.html">Water Purifiers</a> </li>
  //                             <li> <a href="shop_grid.html">Glasses</a> </li>
  //                             <li> <a href="shop_grid.html">Lunch Boxes</a> </li>
  //                             <li> <a href="shop_grid.html">Knives</a> </li>
  //                           </ul>
  //                         </div>
  //                         <div className="col-md-4 has-sep hidden-sm">
  //                           <div className="custom-menu-right">
  //                             <div className="box-banner media">
  //                               <div className="add-desc">
  //                                 <h3>New Jeans<br/>
  //                                   collection </h3>
  //                                 <div className="price-sale">2016</div>
  //                                 <a href="#">Shop Now</a> </div>
  //                               <div className="add-right"><img src="images/menu-img1.jpg" alt=""/></div>
  //                             </div>
  //                             <div className="box-banner media">
  //                               <div className="add-desc">
  //                                 <h3>Save up to</h3>
  //                                 <div className="price-sale">70 <sup>%</sup><sub>off</sub></div>
  //                                 <a href="#">Shopping Now</a> </div>
  //                               <div className="add-right"><img src="images/menu-img2.jpg" alt=""/></div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </li>
  //                 <li className='men_dropdown'> <a href="#"><i className="icon fa fa-male fa-fw"></i> Men</a>
  //                   <div className="wrap-popup wrap-popup1">
  //                     <div className="popup popup1">
  //                       <div className="row">
  //                         <div className="col-md-4 col-sm-6 categories">
  //                           <ul className="nav nav1">
  //                             <li><a href="shop_grid.html"><span>Sofas & Couches</span></a></li>
  //                             <li><a href="shop_grid.html"><span>Study Tables</span></a></li>
  //                             <li><a href="shop_grid.html"><span>Bean Bags</span> </a></li>
  //                             <li><a href="shop_grid.html"><span>Bedside Tables</span> </a></li>
  //                             <li> <a href="shop_grid.html"><span>Sofa cum Beds</span></a></li>
  //                             <li><a href="shop_grid.html"><span>Bookshelves </span></a></li>
  //                             <li><a href="shop_grid.html"><span>T.V. & Entertainment Units</span></a></li>
  //                             <li><a href="shop_grid.html"><span>Center Tables </span></a></li>
  //                             <li><a href="shop_grid.html"><span>Cabinets</span></a></li>
  //                           </ul>
  //                         </div>
  //                         <div className="col-md-4 col-sm-6 has-sep">
  //                           <ul className="nav nav1">
  //                             <li><a href="shop_grid.html"><span>Partitions</span></a></li>
  //                             <li><a href="shop_grid.html"><span>High-speed</span></a></li>
  //                             <li><a href="shop_grid.html"><span>Bean Bags </span> </a></li>
  //                             <li><a href="shop_grid.html"><span>Covers & Refills</span> </a></li>
  //                             <li> <a href="shop_grid.html"><span>Footstools</span></a></li>
  //                             <li><a href="shop_grid.html"><span>Inflatable Sofas</span></a></li>
  //                             <li><a href="shop_grid.html"><span>Ottomans</span></a></li>
  //                             <li><a href="shop_grid.html"><span>Cabinets</span></a></li>
  //                             <li><a href="shop_grid.html"><span>Wall Shelves</span></a></li>
  //                           </ul>
  //                         </div>
  //                         <div className="col-md-4 has-sep hidden-sm">
  //                           <div className="custom-menu-right">
  //                             <div className="box-banner menu-banner">
  //                               <div className="add-right"><a href="#"><img src="images/menu-img4.jpg" alt="" style={{height:"280px"}}/></a></div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </li>
  //                 <li className="nosub"><a href="#"><i className="icon fa fa-camera fa-fw"></i> Electronics</a></li>
  //                 <li className='kids_dropdown'> <a href="shop_grid.html"><i className="icon fa fa-linux fa-fw"></i> Kids</a>
  //                   <div className="wrap-popup column2">
  //                     <div className="popup popup2">
  //                       <div className="row">
  //                         <div className="col-sm-6">
  //                           <h3>Furniture</h3>
  //                           <ul className="nav">
  //                             <li> <a href="shop_grid.html"> Kids' Beds </a> </li>
  //                             <li> <a href="shop_grid-2.html"> Wall Stickers </a> </li>
  //                             <li> <a href="shop_grid.html"> Humidifiers </a> </li>
  //                             <li> <a href="shop_grid.html"> Indoor Lighting </a> </li>
  //                           </ul>
  //                         </div>
  //                         <div className="col-sm-6 has-sep">
  //                           <h3> New arrivals </h3>
  //                           <ul className="nav">
  //                             <li> <a href="shop_grid.html"> Art Prints </a> </li>
  //                             <li> <a href="shop_grid.html"> Posters</a> </li>
  //                             <li> <a href="shop_grid.html"> Paintings </a> </li>
  //                             <li> <a href="shop_grid.html"> Drawings </a> </li>
  //                           </ul>
  //                         </div>
  //                         <div className="col-sm-12"> <a className="ads1" href="#"><img className="img-responsive" src="images/menu-img3.jpg" alt=""/></a> </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </li>
  //                 <li className='fashion_dropdown'> <a href="shop_grid.html"><i className="icon fa fa-heart fa-fw"></i> Fashion</a>
  //                   <div className="wrap-popup column1">
  //                     <div className="popup popup3">
  //                       <ul className="nav nav1">
  //                         <li><a href="shop_grid.html"><span>Frying Pans</span></a></li>
  //                         <li><a href="shop_grid.html"><span>Dinner Sets</span></a></li>
  //                         <li><a href="shop_grid.html"><span>Baking Tools</span></a></li>
  //                         <li><a href="shop_grid.html"><span>Spatulas</span></a></li>
  //                         <li><a href="shop_grid.html"><span>Gas Stoves</span></a></li>
  //                         <li><a href="shop_grid.html"><span>Glasses</span></a></li>
  //                         <li><a href="shop_grid.html"><span>Racks & Holders</span></a></li>
  //                         <li><a href="shop_grid.html"><span>Knives</span></a></li>
  //                         <li><a href="shop_grid.html"><span>Tableware</span></a></li>
  //                         <li><a href="shop_grid.html"><span>Kitchen Tools</span></a></li>
  //                       </ul>
  //                     </div>
  //                   </div>
  //                 </li>
  //                 <li className='access_dropdown'><a href="#"><i className="icon fa fa-codepen fa-fw"></i> Accessories</a>
  //                   <div className="wrap-popup column1">
  //                     <div className="popup popup4">
  //                       <ul className="nav">
  //                         <li> <a href="shop_grid.html"> Super Pillow </a> </li>
  //                         <li> <a href="shop_grid.html"> Hodak Chair</a> </li>
  //                         <li> <a href="shop_grid.html"> Pendant Light </a> </li>
  //                         <li> <a href="shop_grid.html"> Shoe Saver </a> </li>
  //                       </ul>
  //                     </div>
  //                   </div>
  //                 </li>
  //                 <li className="nosub"><a href="shop_grid.html"><i className="icon fa fa-shopping-basket fa-fw"></i> Trends</a></li>
  //                 <li className="nosub"><a href="shop_grid.html"><i className="icon fa fa-lightbulb-o fa-fw"></i> Lightings</a></li>
  //               </ul>
  //             </div>
  //             }

  //           </div>
  //         </div>
  //       </div>

  //       <div className="col-xs-9 col-sm-6 col-md-6 hidden-xs"> 
  //         {/* <!-- Search --> */}
          
  //         <div className="top-search">
  //           <div id="search">
  //             <form>
  //               <div className="input-group">
  //                 <input type="text" className="form-control" placeholder="Search" name="search"/>
  //                 <select className="cate-dropdown hidden-xs hidden-sm" name="category_id">
  //                   <option>All Categories</option>
  //                   <option>women</option>
  //                   <option>&nbsp;&nbsp;&nbsp;Chair </option>
  //                   <option>&nbsp;&nbsp;&nbsp;Decoration</option>
  //                   <option>&nbsp;&nbsp;&nbsp;Lamp</option>
  //                   <option>&nbsp;&nbsp;&nbsp;Handbags </option>
  //                   <option>&nbsp;&nbsp;&nbsp;Sofas </option>
  //                   <option>&nbsp;&nbsp;&nbsp;Essential </option>
  //                   <option>Men</option>
  //                   <option>Electronics</option>
  //                   <option>&nbsp;&nbsp;&nbsp;Mobiles </option>
  //                   <option>&nbsp;&nbsp;&nbsp;Music &amp; Audio </option>
  //                 </select>
  //                 <button className="btn-search" type="button"><i className="fa fa-search"></i></button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
          
  //         {/* <!-- End Search -->  */}
  //       </div>
  //        <div className="call-us hidden-sm hidden-xs"> <i className="fa fa-phone"></i>
  //         <div className="call-us-inner"> <span className="call-text">free call us</span> <span className="call-num">Call:  98765 43210</span> </div>
  //       </div>
  //     </div>
  //   </div>
  // </nav>
  {/* <!-- end nav -->  */}