import React,{useEffect, useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import '../../css/style.css'
import { useSelector,useDispatch } from 'react-redux';
import Service from '../../components/home/Service'
import {  saveShippingInfo} from '../../slice/cartSlice'
import { register } from '../../actions/userActions';
import {toast} from 'react-toastify'
import{clearAuthError, login} from '../../actions/userActions';
function CheckOut(props) {
   
   const [billingInfo, setBillingInfo] = useState(false)
   const [shippingInfo, setShippingInfo] = useState(false)
   const [shippingMethod, setShippingMethod] = useState(false)
   const [paymentInfo, setPaymentInfo] = useState(false)
   const [orderReview, setOrderView] = useState(false)

   const { user} = useSelector(state=>state.authState);
   const {items:cartItems } = useSelector(state => state.cartState);
   const itemsPrice = cartItems.reduce((acc, item)=> (acc + item.price * item.quantity),0);
   const shippingPrice = itemsPrice > 200 ? 0 : 25;
   let taxPrice = Number( 0.05 * itemsPrice);
   const totalPrice = Number(itemsPrice  + taxPrice).toFixed(2);
   taxPrice = Number( 0.05 * itemsPrice).toFixed(2)
   const dispatch = useDispatch()


const [email,setEmail] = useState("");
const [password,setPassword] = useState("")


const navigate = useNavigate()

const {loading, error, isAuthenticated} = useSelector(state=>state.authState)

const submitHandler= (e)=>{
    e.preventDefault();
    dispatch(login(email,password))


    if(isAuthenticated){
      toast('successfully LogIn',{
        type:"success",
        position:toast.POSITION.TOP_RIGHT,
      
      })
    }

 

    // if(!isAuthenticated){
    //     toast('Please Register',{
    //         position:toast.POSITION.TOP_RIGHT,
          
    //       })
    // }

 

}


useEffect(()=>{
  if(error){
     toast(error, {
       position:toast.POSITION.TOP_CENTER,
       type:'error',
       onOpen:()=>{dispatch(clearAuthError)}
     })
      return
  }
},[error, isAuthenticated,dispatch])

 useEffect(()=>{
    dispatch(register)
 },[dispatch])


    return (
        <div>
  {/* <!-- Breadcrumbs --> */}
  
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <Link to='/'><li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li></Link>
            <Link to='/check_out'><li><strong>Checkout</strong></li></Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}
  
{/* <!-- Main Container --> */}
<section className="main-container col2-right-layout">
  <div className="main container">
    <div className="row">
      <div className="col-main col-sm-9 col-xs-12">
 
        
        <div className="page-content checkout-page"><div className="page-title">
          <h2>Checkout</h2>
        </div>
            <h4 className="checkout-sep">1. Checkout Method</h4>
            <div className="box-border">
                <div className="row">
                    <div className="col-sm-6">
                        <h5>Checkout as a Guest or Register</h5>
                        <p>Register with us for future convenience:</p>
                        <ul>
                            <li><label><input type="radio" name="radio1"/>Checkout as Guest</label></li>
                            <li><label><input type="radio" name="radio1"/>Register</label></li>
                        </ul>
                        <br/>
                        <h4>Register and save time!</h4>
                        <p>Register with us for future convenience:</p>
                        <p><i className="fa fa-check-circle text-primary"></i> Fast and easy check out</p>
                        <p><i className="fa fa-check-circle text-primary"></i> Easy access to your order history and status</p>
                        <button className="button"><i className="fa fa-angle-double-right"></i>&nbsp; <span>Continue</span></button>
                    </div>
                    <div className="col-sm-6">
                        <form onSubmit={submitHandler}>
                        <h5>Login</h5>
                        <p>Already registered? Please log in below:</p>
                        <label>Email address</label>
                        <input type="text" onChange={e=>setEmail(e.target.value)} value={email}  name="email" className="form-control input"/>
                        <label>Password</label>
                        <input type="password" value={password} name='password' onChange={e=>setPassword(e.target.value)}  className="form-control input"/>
                        <p><a href="#">Forgot your password?</a></p>
                        <button className="button" type ="submit"><i className="icon-login"></i>&nbsp; <span>Login</span></button>
                        </form>
                    </div>

                </div>
            </div>
            <h4 className="checkout-step" onClick={()=>setBillingInfo(!billingInfo)}>2. Billing Infomations</h4>
            {billingInfo && <div className="box-border">
                <ul>
                    <li className="row">
                        <div className="col-sm-6">
                            <label for="first_name" className="required">First Name</label>
                            <input type="text" className="input form-control" name="" id="first_name"/>
                        </div>
                        {/* <!--/ [col] --> */}
                        <div className="col-sm-6">
                            <label for="last_name" className="required">Last Name</label>
                            <input type="text" name="" className="input form-control" id="last_name"/>
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}
                    <li className="row">
                        <div className="col-sm-6">
                            <label for="company_name">Company Name</label>
                            <input type="text" name="" className="input form-control" id="company_name"/>
                        </div>
                        {/* <!--/ [col] --> */}
                        <div className="col-sm-6">
                            <label for="email_address" className="required">Email Address</label>
                            <input type="text" className="input form-control" name="" id="email_address" />
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}
                    <li className="row"> 
                        <div className="col-xs-12">
                            <label for="address" className="required">Address</label>
                            <input type="text" className="input form-control" name="" id="address"/>
                        </div>
                        {/* <!--/ [col] --> */}

                    </li>
                    {/* <!-- / .row --> */}

                    <li className="row">

                        <div className="col-sm-6">
                            
                            <label for="city" className="required">City</label>
                            <input className="input form-control" type="text" name="" id="city" />

                        </div>
                        {/* <!--/ [col] --> */}

                        <div className="col-sm-6">
                            <label className="required">State/Province</label>
                                <select className="input form-control" name="">
                                    <option value="Alabama">Alabama</option>
                                    <option value="Illinois">Illinois</option>
                                    <option value="Kansas">Kansas</option>
                            </select>
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}

                    <li className="row">

                        <div className="col-sm-6">

                            <label for="postal_code" className="required">Zip/Postal Code</label>
                            <input className="input form-control" type="text" name="" id="postal_code"/>
                        </div>
                        {/* <!--/ [col] --> */}

                        <div  className="col-sm-6">
                            <label className="required">Country</label>
                            <select className="input form-control" name="">
                                <option value="USA">USA</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Canada">Canada</option>
                            </select>
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}
                    <li className="row">
                        <div className="col-sm-6">
                            <label for="telephone" className="required">Telephone</label>
                            <input className="input form-control" type="text" name="" id="telephone"/>
                        </div>
                        {/* <!--/ [col] --> */}

                        <div className="col-sm-6">
                            <label for="fax">Fax</label>
                            <input className="input form-control" type="text" name="" id="fax"/>
                        </div>
                        {/* <!--/ [col] --> */}

                    </li>
                    {/* <!--/ .row --> */}

                    <li className="row">
                        <div className="col-sm-6">
                            <label for="password" className="required">Password</label>
                            <input className="input form-control" type="password" name="" id="password" />
                        </div>
                            {/* !--/ [col] --> */}

                        <div className="col-sm-6">
                            <label for="confirm" className="required">Confirm Password</label>
                            <input className="input form-control" type="password" name="" id="confirm"/>
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}
                    <li>
                        <button className="button"><i className="fa fa-angle-double-right"></i>&nbsp; <span>Continue</span></button>
                    </li>
                </ul>
                            </div>
            }

            <h4 className="checkout-step" onClick={()=>setShippingInfo(!shippingInfo)}>3. Shipping Information</h4>
            {shippingInfo && <div className="box-border">
                <ul>
                                    
                    <li className="row">
                        
                        <div className="col-sm-6">
                            
                            <label for="first_name_1" className="required">First Name</label>
                            <input className="input form-control" type="text" name="" id="first_name_1" />

                        </div>
                        {/* <!--/ [col] --> */}

                        <div className="col-sm-6">
                            
                            <label for="last_name_1" className="required">Last Name</label>
                            <input className="input form-control" type="text" name="" id="last_name_1" />

                        </div>
                        {/* <!--/ [col] --> */}

                    </li>
                    {/* <!--/ .row --> */}

                    <li className="row">
                        
                        <div className="col-sm-6">
                            
                            <label for="company_name_1">Company Name</label>
                            <input className="input form-control" type="text" name="" id="company_name_1" />

                        </div>
                        {/* <!--/ [col] --> */}

                        <div className="col-sm-6">
                            
                            <label for="email_address_1" className="required">Email Address</label>
                            <input className="input form-control" type="text" name="" id="email_address_1" />

                        </div>
                        {/* <!--/ [col] --> */}

                    </li>
                    {/* <!--/ .row --> */}

                    <li className="row">

                        <div className="col-xs-12">

                            <label for="address_1" className="required">Address</label>
                            <input className="input form-control" type="text" name="" id="address_1"/>

                        </div>
                        {/* <!--/ [col] --> */}

                    </li>
                    {/* <!--/ .row --> */}

                    <li className="row">

                        <div className="col-sm-6">
                            
                            <label for="city_1" className="required">City</label>
                            <input className="input form-control" type="text" name="" id="city_1" />

                        </div>
                        {/* <!--/ [col] --> */}

                        <div className="col-sm-6">

                            <label className="required">State/Province</label>

                            <div className="custom_select">

                                <select className="input form-control" name="">

                                    <option value="Alabama">Alabama</option>
                                    <option value="Illinois">Illinois</option>
                                    <option value="Kansas">Kansas</option>

                                </select>

                            </div>

                        </div>
                        {/* <!--/ [col] --> */}

                    </li>
                    {/* <!--/ .row --> */}

                    <li className="row">

                        <div className="col-sm-6">

                            <label for="postal_code_1" className="required">Zip/Postal Code</label>
                            <input className="input form-control" type="text" name="" id="postal_code_1"/>

                        </div>
                        {/* <!--/ [col] --> */}

                        <div className="col-sm-6">

                            <label className="required">Country</label>

                            <div className="custom_select">

                                <select className="input form-control" name="">
                                    
                                    <option value="USA">USA</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Canada">Canada</option>

                                </select>

                            </div>

                        </div>
                        {/* <!--/ [col] --> */}

                    </li>
                    {/* <!--/ .row --> */}

                    <li className="row">

                        <div className="col-sm-6">

                            <label for="telephone_1" className="required">Telephone</label>
                            <input className="input form-control" type="text" name="" id="telephone_1"/>

                        </div>
                        {/* <!--/ [col] --> */}

                        <div className="col-sm-6">

                            <label for="fax_1">Fax</label>
                            <input className="input form-control" type="text" name="" id="fax_1" />

                        </div>
                        {/* <!--/ [col] --> */}

                    </li>  
                    {/* <!--/ .row --> */}

                </ul>
                <button className="button"><i className="fa fa-angle-double-right"></i>&nbsp; <span>Continue</span></button>
                             </div>
             } 
            <h4 className="checkout-step" onClick={()=>setShippingMethod(!shippingMethod)}>4. Shipping Method</h4>
            {shippingMethod && <div className="box-border">
                <ul className="shipping_method">
                    <li>
                        <p className="subcaption bold">Free Shipping</p>
                        <label for="radio_button_3"><input type="radio" checked name="radio_3" id="radio_button_3"/>Free $0</label>
                    </li>

                    <li>
                        <p className="subcaption bold">Free Shipping</p>
                        <label for="radio_button_4"><input type="radio" name="radio_3" id="radio_button_4" /> Standard Shipping $5.00</label>
                    </li>
                </ul>
                <button className="button"><i className="fa fa-angle-double-right"></i>&nbsp; <span>Continue</span></button>
                               </div>
             }

            <h4 className="checkout-step" onClick={()=>setPaymentInfo(!paymentInfo)}>5. Payment Information</h4>
            {paymentInfo && <div className="box-border">
                <ul>
                    <li>
                        <label for="radio_button_5"><input type="radio" checked name="radio_4" id="radio_button_5" /> Check / Money order</label>
                    </li>

                    <li>
            
                        <label for="radio_button_6"><input type="radio" name="radio_4" id="radio_button_6"/> Credit card (saved)</label>
                    </li>

                </ul>
                <button className="button"><i className="fa fa-angle-double-right"></i>&nbsp; <span>Continue</span></button>
                            </div>
            }

            <h4 className="checkout-step last" onClick={()=>setOrderView(!orderReview)}>6. Order Review</h4>
             {orderReview && <div className="box-border">
            <div className="table-responsive">
                <table className="table table-bordered cart_summary">
                    <thead>
                        <tr>
                            <th className="cart_product">Product</th>
                            <th>Description</th>
                            <th>Avail.</th>
                            <th>Unit price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th className="action"><i className="fa fa-trash-o"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item =>(
                        <tr>
                            <td className="cart_product">
                                <a href="#"><img src={item.image} alt="Product"/></a>
                            </td>
                            <td className="cart_description">
                                <p className="product-name"><a href="#">Frederique Constant </a></p>
                                 <small><a href="#">Color : Beige</a></small><br/>   
                                <small><a href="#">Size : S</a></small>
                            </td>
                            <td className="cart_avail"><span className="label label-success">In stock</span></td>
                            <td className="price"><span>${item.price} </span></td>
                            <td className="qty">
                            <span>${item.quantity} </span>
                            </td>
                            <td className="price">
                                <span>${item.price}</span>
                            </td>
                            <td className="action">
                                <a href="#"><i className="fa fa-trash-o"></i></a>
                            </td>
                        </tr>
                      ))}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" rowspan="2"></td>
                            <td colspan="3">Total products (tax incl.)</td>
                            <td colspan="2">${totalPrice}</td>
                        </tr>
                        <tr>
                            <td colspan="3"><strong>Total</strong></td>
                            <td colspan="2"><strong>${totalPrice} </strong></td>
                        </tr>
                    </tfoot>    
                </table></div>
                <button className="button pull-right"><span>Place Order</span></button>
                             </div>
             }
        </div>
      </div>
        <aside className="right sidebar col-sm-3 col-xs-12">
        <div className="sidebar-checkout block">
         <div className="sidebar-bar-title">
              <h3>Your Checkout</h3>
            </div>
           <div className="block-content">
               <dl>
               <dt className="complete"> Billing Address <span className="separator">|</span> <a href="#">Change</a> </dt>
               <dd className="complete">
                <address>
                   
                      
                                 <p>{user?.firstname}</p>
                                 <p>{user?.lastname}</p>
                                 <p>{user?.street}</p>
                                 <p>{user?.city}</p>
                                  <p>{user?.phone}</p>
                     
                 
        
              
                </address>
              </dd>
              <dt className="complete"> Shipping Address <span className="separator">|</span> <a href="#">Change</a> </dt>
              <dd className="complete">
                 <address>
                Deo Jone<br/>
                Company Name<br/>
                7064 Lorem <br/>
                Ipsum <br/>
                Vestibulum 0 666/13<br/>
                United States<br/>
                T: 12345678 <br/>
                F: 987654
                </address>
              </dd>
              <dt className="complete"> Shipping Method <span className="separator">|</span> <a href="#">Change</a> </dt>
              <dd className="complete"> Flat Rate - Fixed <br/>
                <span className="price">$15.00</span> </dd>
              <dt> Payment Method </dt>
            </dl>
          </div>
        </div>
        </aside>
    </div>
  </div>
  </section>
  {/* <!-- Main Container End --> */}
  {/* <!-- service section --> */}
  
<Service/>
        </div>
    );
}

export default CheckOut;