import React from 'react';
import '../../css/style.css'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import{clearAuthError, login} from '../../actions/userActions';
import {toast} from 'react-toastify'
import Service from '../home/Service'


function MyAccount(props) {

  
const [email,setEmail] = useState("");
const [password,setPassword] = useState("")
const[showContainer,setContainer]=useState(true);
const dispatch = useDispatch();



const {loading, error, isAuthenticated} = useSelector(state=>state.authState)

const submitHandler= (e)=>{
    e.preventDefault();
    dispatch(login(email,password))
    setContainer(!showContainer)

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

    return (
        <div>
   <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <Link to='/'><li class="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li></Link>
            <Link to='/my_account'><li><strong>My Account</strong></li></Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}
  
  {/* <!-- Main Container --> */}
  <section class="main-container col1-layout">
    <div class="main container">
      
        
        <div class="page-content">
          
            <div class="account-login">
              
   
          
              <div class="box-authentication">
                <h4>Login</h4>
               <p class="before-login-text">Welcome back! Sign in to your account</p>
               <form onSubmit={submitHandler}>
                <label for="emmail_login">Email address<span class="required">*</span></label>
                <input id="emmail_login" type="text" value={email} name='email' onChange={e=>setEmail(e.target.value)} class="form-control" />
                <label for="password_login">Password<span class="required">*</span></label>
                <input id="password_login" type="password" value={password} name='password' onChange={e=>setPassword(e.target.value)} class="form-control" />
                <p class="forgot-pass"><a href="#">Lost your password?</a></p>
                <button class="button" type="submit" disabled={loading}><i class="fa fa-lock"></i>&nbsp; <span>Login</span></button><label class="inline" for="rememberme">
				        <input type="checkbox" value="forever" id="rememberme" name="rememberme" /> Remember me
				        </label>
               </form>
              </div>
              <div class="box-authentication">
                <h4>Register</h4><p>Create your very own account</p> 											
                <label for="emmail_register">Email address<span class="required">*</span></label>
                <input id="emmail_register" type="text" class="form-control" value={email} onChange={e=> setEmail(e.target.value)} name="email" />
                <Link to='/register'><button class="button"><i class="fa fa-user"></i>&nbsp; <span>Register</span></button></Link>
                
                <div class="register-benefits">
												<h5>Sign up today and you will be able to :</h5>
												<ul>
													<li>Speed your way through checkout</li>
													<li>Track your orders easily</li>
													<li>Keep a record of all your purchases</li>
												</ul>
											</div>
              </div>
   
    
        </div>
      </div>

    </div>
  </section>
  {/* <!-- Main Container End -->  */}
  {/* <!-- service section --> */}
    <Service />
        </div>
    );
}

export default MyAccount;