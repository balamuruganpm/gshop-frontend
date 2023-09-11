import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import{register} from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
function Register(props) {
  const[userData,setUserData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    street:"",
    city:"",
    phone:''
  
});

const onChange= (e)=> {
   setUserData({...userData, [e.target.name]: e.target.value})
}


const dispatch = useDispatch();
const navigate=useNavigate()
const submitRegister=(e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append('firstname', userData.name)
  formData.append('lastname', userData.name)
  formData.append('email', userData.email)
  formData.append('password', userData.password)
  formData.append('street', userData.street)  
  formData.append('city', userData.city)  
  formData.append('phone', userData.phone)  

  dispatch(register(formData))

  navigate('/')
  
}
    return (
        <div>
    <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <Link to='/'><li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li></Link>
            <Link to='/register'><li><strong>New Customer</strong></li></Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}
  
  {/* <!-- Main Container --> */}
  <section className="main-container col1-layout ">
    <div className="main container">
      <div className="page-content">
        <div className="account-login">
          <div className="box-authentication new-customer-box Account Page">
            <form onSubmit={submitRegister}>
              <div className="row" style={{marginLeft:"1px"}}>
                <div className="col-xs-12">
                  <div className="check-title" id="reg_title">
                    <h4>New Customer</h4>
                  </div>
                </div>
               
                <div className="col-sm-6">
                  <label>First Name:</label>
                  <div className="input-text">
                    <input type="text" name="name" onChange={onChange} required className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label>Last Name:</label>
                  <div className="input-text">
                    <input type="text" onChange={onChange} required className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label>Address:</label>
                  <div className="input-text">
                    <input type="text" name="address" required onChange={onChange}className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label>City/Town:</label>
                  <div className="input-text">
                    <input type="text" name="address" required onChange={onChange} className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label>Email:</label>
                  <div className="input-text">
                    <input type="text" name="email" required onChange={onChange} className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label>Password:</label>
                  <div className="input-text">
                    <input type="password" name="password" required onChange={onChange} className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label>Phone:</label>
                  <div className="input-text">
                    <input type="text" name="phone" required onChange={onChange} className="form-control"/>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="billing-checkbox">
                    <label className="inline" for="rememberme">
                      <input type="checkbox" value="forever" id="rememberme" name="rememberme"/>
                      Sign up for our newsletter! </label>
                  </div>
                  <div className="submit-text">
                    <button className="button" type="submit"><i className="fa fa-user"></i>&nbsp; <span>Register</span></button>
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
  
  <div className="jtv-service-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-4 col-xs-12">
          <div className="jtv-service">
            <div className="ser-icon"> <i className="fa fa-truck flip-horizontal"></i> </div>
            <div className="service-content">
              <h5>FREE SHIPPING WORLDWIDE </h5>
              <p>free ship-on oder over $299.00</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-12">
          <div className="jtv-service">
            <div className="ser-icon"> <i className="fa fa-mail-forward"></i> </div>
            <div className="service-content">
              <h5>MONEY BACK GUARATEE! </h5>
              <p>30 days money back guarantee!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-12">
          <div className="jtv-service">
            <div className="ser-icon"> <i className="fa fa-comments flip-horizontal"></i> </div>
            <div className="service-content">
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