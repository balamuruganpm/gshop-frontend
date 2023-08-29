import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import{register} from '../../actions/userActions';
function Register(props) {
  const[userData,setUserData] = useState({
    name:"",
    email:"",
    password:"",
    address:"",
    phone:''
  
});

const onChange= (e)=> {
   setUserData({...userData, [e.target.name]: e.target.value})
}


const dispatch = useDispatch();

const submitRegister=(e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append('name', userData.name)
  formData.append('email', userData.email)
  formData.append('password', userData.password)
  formData.append('address', userData.address)  
  formData.append('phone', userData.phone)  

  dispatch(register(formData))
  
}
    return (
        <div>
    <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <Link to='/'><li class="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li></Link>
            <Link to='/register'><li><strong>New Customer</strong></li></Link>
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
          <div class="box-authentication new-customer-box Account Page">
            <form onSubmit={submitRegister}>
              <div class="row">
                <div class="col-xs-12">
                  <div class="check-title">
                    <h4>New Customer</h4>
                  </div>
                </div>
               
                <div class="col-sm-6">
                  <label>First Name:</label>
                  <div class="input-text">
                    <input type="text" name="name" onChange={onChange} class="form-control"/>
                  </div>
                </div>
                <div class="col-sm-6">
                  <label>Last Name:</label>
                  <div class="input-text">
                    <input type="text" name="name" onChange={onChange} class="form-control" />
                  </div>
                </div>
                <div class="col-xs-12">
                  <label>Address:</label>
                  <div class="input-text">
                    <input type="text" name="address" onChange={onChange}class="form-control"/>
                  </div>
                </div>
                <div class="col-xs-12">
                  <label>City/Town:</label>
                  <div class="input-text">
                    <input type="text" name="address" onChange={onChange} class="form-control"/>
                  </div>
                </div>
                <div class="col-sm-6">
                  <label>Email:</label>
                  <div class="input-text">
                    <input type="text" name="email" onChange={onChange} class="form-control"/>
                  </div>
                </div>
                <div class="col-sm-6">
                  <label>Password:</label>
                  <div class="input-text">
                    <input type="password" name="password" onChange={onChange} class="form-control"/>
                  </div>
                </div>
                <div class="col-sm-6">
                  <label>Phone:</label>
                  <div class="input-text">
                    <input type="text" name="phone" onChange={onChange} class="form-control"/>
                  </div>
                </div>
                <div class="col-xs-12">
                  <div class="billing-checkbox">
                    <label class="inline" for="rememberme">
                      <input type="checkbox" value="forever" id="rememberme" name="rememberme"/>
                      Sign up for our newsletter! </label>
                  </div>
                  <div class="submit-text">
                    <button class="button" type="submit"><i class="fa fa-user"></i>&nbsp; <span>Register</span></button>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Main Container End -->  */}
  {/* <!-- service section --> */}
  
  <div class="jtv-service-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-4 col-xs-12">
          <div class="jtv-service">
            <div class="ser-icon"> <i class="fa fa-truck flip-horizontal"></i> </div>
            <div class="service-content">
              <h5>FREE SHIPPING WORLDWIDE </h5>
              <p>free ship-on oder over $299.00</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4 col-xs-12">
          <div class="jtv-service">
            <div class="ser-icon"> <i class="fa fa-mail-forward"></i> </div>
            <div class="service-content">
              <h5>MONEY BACK GUARATEE! </h5>
              <p>30 days money back guarantee!</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4 col-xs-12">
          <div class="jtv-service">
            <div class="ser-icon"> <i class="fa fa-comments flip-horizontal"></i> </div>
            <div class="service-content">
              <h5>24/7 CUSTOMER SERVICE </h5>
              <p>We support online 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
}

export default Register;