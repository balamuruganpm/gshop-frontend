import React,{useEffect, useState} from 'react';
import {Link,useNavigate, useParams} from 'react-router-dom';
import '../../css/style.css'
import { useSelector,useDispatch } from 'react-redux';
import Service from '../../components/home/Service'
import ShippingInfo from '../order/ShippingInfo';
import BillingInfo from '../order/BillingInfo';
import { register } from '../../actions/userActions';
import {toast} from 'react-toastify'
import{clearAuthError, login} from '../../actions/userActions';
import { orderCompleted } from '../../slice/cartSlice';
import {createOrder} from '../../actions/orderAction'
import {shippingInfo} from '../../slice/cartSlice'
import {clearError as clearOrderError} from "../../slice/orderSlice"
// import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// import {CardCvcElement, CardExpiryElement, CardNumberElement, Elements, useElements,useStripe } from '@stripe/react-stripe-js';
export const validateShipping = (shippingInfo, navigate) => {
   
  if(
      !shippingInfo.address||
      !shippingInfo.city||
      !shippingInfo.state|| 
      !shippingInfo.country||
      !shippingInfo.phoneNo||
      !shippingInfo.postalCode
      ) {
          // toast.error('Please fill the shipping information',{position: toast.POSITION.BOTTOM_CENTER})
         
  }
} 

function CheckOut(props) {
   const { user =[]} = useSelector(state=>state.authState);
   const {loading, error, isAuthenticated} = useSelector(state=>state.authState)
   const{shippingInfo = {}, items:cartItems =[]}= useSelector(state=>state.cartState);
   const { error:orderError } = useSelector(state => state.orderState)
   const {id} = useParams()
   const [billingInfo, setBillingInfo] = useState(false)
   const [shippingDetail, setShippingDetail] = useState(false)
   const [shippingMethod, setShippingMethod] = useState(false)
   const [paymentInfo, setPaymentInfo] = useState(false)
   const [orderReview, setOrderView] = useState(false)

   const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))
  
   const itemsPrice = cartItems.reduce((acc, item)=> (acc + item.price * item.quantity),0);
   const shippingPrice = itemsPrice > 200 ? 0 : 25;
   let taxPrice = Number( 0.05 * itemsPrice);
   const totalPrice = Number(itemsPrice  + taxPrice).toFixed(2);
   taxPrice = Number( 0.05 * itemsPrice).toFixed(2)

   const dispatch = useDispatch()
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("")
   const navigate = useNavigate()
  

  
 
 
 
   const processPayment = ()=>{
     const data = {
         itemsPrice,
         shippingInfo,
         taxPrice,
         totalPrice,
       
     } 
     sessionStorage.setItem('orderInfo', JSON.stringify(data))
 }

 const paymentData = {
  amount : Math.round( orderInfo?.totalPrice * 100),
  shipping :{
      firstname: user?.firstname,
      
      address:{
          city: shippingInfo.city,
          postal_code : shippingInfo.postalCode,
          country: shippingInfo.country,
          state: shippingInfo.state,
          line1 : shippingInfo.address
      },
      phone: shippingInfo.phoneNo
  },

}

   
  
const submitHandler= (e)=>{
    e.preventDefault();
    dispatch(login(email,password))


    if(isAuthenticated){
      toast('successfully LogIn',{
        type:"success",
        position:toast.POSITION.TOP_RIGHT,
      
      })
    }
}
const order = {
  orderItems: cartItems,
  shippingInfo,
  user:user.firstName
}

if(orderInfo) {
  order.itemsPrice = orderInfo.itemsPrice
  order.shippingPrice = orderInfo.shippingPrice
  order.taxPrice = orderInfo.taxPrice
  order.totalPrice = orderInfo.totalPrice
  
}

useEffect(() => {
  validateShipping(shippingInfo, navigate)
  if(orderError) {
      toast(orderError, {
          position: toast.POSITION.BOTTOM_CENTER,
          type: 'error',
          onOpen: ()=> { dispatch(clearOrderError()) }
      })
      return
  }

},[dispatch,navigate,orderError,shippingInfo])

const orderFinished=()=>{
  dispatch(orderCompleted())
   navigate('/')
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
 const submitOrder = async (e) => {
  e.preventDefault();
  console.log(user);
  // document.querySelector('#reg-btn').disabled = true;
  dispatch(createOrder(order))
  // navigate('/confirmorder')

  try{
      const {data} = await axios.post('/api/v1/payment/process', paymentData)
      const clientSecret = data.client_secret
      //  const result = await stripe.confirmCardPayment(clientSecret,
      //  {

      //     payment_method: {
      //         card: elements.getElement(CardNumberElement),
      //         billing_details: {
      //             name: user.name,
      //             email: user.email
      //         }
            
      //      } 
        
      //   }) 
 
      //    console.log(result);

      //   if(result.error){
      //     toast(result.error.message, {
      //         type: 'error',
      //         position: toast.POSITION.BOTTOM_CENTER
      //     })
      //     document.querySelector('#reg-btn').disabled=false;
      //   }else{
      //     if((await result).paymentIntent.status === 'succeeded') {
      //         toast('Payment Success!', {
      //             type: 'success',
      //             position: toast.POSITION.BOTTOM_CENTER
      //         })
      //         order.paymentInfo = {
      //             id: result.paymentIntent.id,
      //             status: result.paymentIntent.status
      //         }
      //         dispatch(orderCompleted())
              
             
           
      //     }else{
      //         toast('Please Try again!', {
      //             type: 'warning',
      //             position: toast.POSITION.BOTTOM_CENTER
      //         })
      //       }
        
                
  }catch(error){

  }
}


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
            <h4 className="checkout-sep"> Checkout Method</h4>
            <br/>
            {!isAuthenticated ?
            <div className="box-border">
                <div className="row">
                    <div className="col-sm-6">
                        <h5>Checkout for Register</h5>
                        <p>Register with us for future convenience:</p>
                        <ul>
                            {/* <li><label><input type="radio" name="radio1"/>Checkout as Guest</label></li> */}
                           <Link to="/register" className='reg-link'> <li><label><input type="radio"  name="radio1"/>Register</label></li></Link>
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
             :''}
            
            {/* <h4 className="checkout-step" onClick={()=>setBillingInfo(!billingInfo)}>2. Billing Infomations</h4>
            {billingInfo && 
               <>
                <BillingInfo/>
               </>
            } */}

            <h4 className="checkout-step" onClick={()=>setShippingDetail(!shippingDetail)}>1. Shipping Information</h4>
            {shippingDetail && 
                <>
                <ShippingInfo/>
                </>
             } 
            <h4 className="checkout-step" onClick={()=>setShippingMethod(!shippingMethod)}>2. Shipping Method</h4>
            {shippingMethod && <div className="box-border">
                <ul className="shipping_method">
                    <li>
                        <p className="subcaption bold">Free Shipping</p>
                        <label for="radio_button_3"><input type="radio" checked name="radio_3" id="radio_button_3"/>Free <span>&#8377;</span>0</label>
                    </li>

                    <li>
                        <p className="subcaption bold">Free Shipping</p>
                        <label for="radio_button_4"><input type="radio" name="radio_3" id="radio_button_4" /> Standard Shipping <span>&#8377;</span>5.00</label>
                    </li>
                </ul>
                <button className="button"><i className="fa fa-angle-double-right"></i>&nbsp; <span>Continue</span></button>
                               </div>
             }

            <h4 className="checkout-step" onClick={()=>setPaymentInfo(!paymentInfo)}>3. Payment Information</h4>
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

            <h4 className="checkout-step last" onClick={()=>setOrderView(!orderReview)}>4. Order Review</h4>
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
                            <td className="price"><span><span>&#8377;</span>{item.price} </span></td>
                            <td className="qty">
                            <span><span>&#8377;</span>{item.quantity} </span>
                            </td>
                            <td className="price">
                                <span><span>&#8377;</span>{item.price}</span>
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
                            <td colspan="2"><span>&#8377;</span>{totalPrice}</td>
                        </tr>
                        <tr>
                            <td colspan="3"><strong>Total</strong></td>
                            <td colspan="2"><strong><span>&#8377;</span>{totalPrice} </strong></td>
                        </tr>
                    </tfoot>    
                </table></div>
               <button className="button pull-right"  onClick={submitOrder}><span>continue</span></button>
               <button className="button pull-right"  onClick={processPayment}><span>Place Order</span></button>
                 
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
              <dt className="complete"> Shipping Address <span className="separator">|</span> <a onClick={()=>setShippingDetail(!shippingDetail)}>Change</a> </dt>
              <dd className="complete">
                 <address>
                                 <p>{shippingInfo?.firstName}</p>
                                 <p>{shippingInfo?.lastName}</p>
                                 <p>{shippingInfo?.address}</p>
                                 <p>{shippingInfo?.city}</p>
                                 <p>{shippingInfo?.state}</p>
                                 <p>{shippingInfo?.country}</p>
                                 <p>{shippingInfo?.postalCode}</p>
                                 <p>{shippingInfo?.companyName}</p>
                                 <p>{shippingInfo?.phoneNo}</p>
                </address>
              </dd>
              <dt className="complete"> Shipping Method <span className="separator">|</span> <a onClick={()=>setShippingMethod(!shippingMethod)}>Change</a> </dt>
              <dd className="complete"> Flat Rate - Fixed <br/>
                <span className="price"><span>&#8377;</span>15.00</span> </dd>
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