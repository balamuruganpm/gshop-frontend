import React from 'react';
import {Link} from 'react-router-dom'
function Profile(props) {
    return (
        <div>
              
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <Link to='/'><li class="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li></Link>
            <Link to='/profile'> <li><strong>Peofile</strong></li></Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}
  
  
  
   <section class="main-container col1-layout">
    <div class="main container">
      <div class="row">
        <section class="col-main col-sm-12">
          
          <div id="contact" class="page-content page-contact">
          <div class="page-title">
            <h2>My Profile</h2>
          </div>
            <div class="row">
            
              <div class="col-sm-12">
                <div class="contact-form-box">
                  <div class="col-sm-6">
                    <label>First Name</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                  
                     <div class="col-sm-6">
                    <label>Last Name</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                   <div class="col-sm-6">
                    <label>Mobile Number</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                  
                <div class="col-sm-6">
                    <label>Email</label>
                    <input type="text" class="form-control input-sm" id="email" />
                  </div>
                  
                  
                   <div class="col-sm-6" style={{paddingTop:"20px"}}>
                    <label>Date Of Birth &nbsp; </label> 
                    <input type="date" id="birthday" name="birthday" />
                  </div>
                  
                   <div class="col-sm-6" style={{paddingTop:"20px"}}>
                    <label>Door No.</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                  
                    <div class="col-sm-6">
                    <label>Street Name</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                    <div class="col-sm-6">
                    <label>Landmark</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                  
                    <div class="col-sm-3">
                    <label>City</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                    <div class="col-sm-3">
                    <label>State</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                    <div class="col-sm-3">
                    <label>Pincode</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                    <div class="col-sm-3">
                    <label>Country</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  
                
                  <div class="form-selector">
                    <button class="button"> <span>Update Profile</span></button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
  
  
  
  
  
  {/* <!-- Main Container --> */}
 
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

export default Profile;