import React from 'react';
import {Link} from 'react-router-dom'
import Service from '../home/Service'
function Profile(props) {
    return (
        <div>
              
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <Link to='/'><li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li></Link>
            <Link to='/profile'> <li><strong>Peofile</strong></li></Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}
  
  
  
   <section className="main-container col1-layout">
    <div className="main container">
      <div className="row">
        <section className="col-main col-sm-12">
          
          <div id="contact" className="page-content page-contact">
          <div className="page-title">
            <h2>My Profile</h2>
          </div>
            <div className="row">
            
              <div className="col-sm-12">
                <div className="contact-form-box">
                  <div className="col-sm-6">
                    <label>First Name</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                  
                     <div className="col-sm-6">
                    <label>Last Name</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                   <div className="col-sm-6">
                    <label>Mobile Number</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                  
                <div className="col-sm-6">
                    <label>Email</label>
                    <input type="text" className="form-control input-sm" id="email" />
                  </div>
                  
                  
                   <div className="col-sm-6" style={{paddingTop:"20px"}}>
                    <label>Date Of Birth &nbsp; </label> 
                    <input type="date" id="birthday" name="birthday" />
                  </div>
                  
                   <div className="col-sm-6" style={{paddingTop:"20px"}}>
                    <label>Door No.</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                  
                    <div className="col-sm-6">
                    <label>Street Name</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                    <div className="col-sm-6">
                    <label>Landmark</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                  
                    <div className="col-sm-3">
                    <label>City</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                    <div className="col-sm-3">
                    <label>State</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                    <div className="col-sm-3">
                    <label>Pincode</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                    <div className="col-sm-3">
                    <label>Country</label>
                    <input type="text" className="form-control input-sm" id="name" />
                  </div>
                  
                
                  <div className="form-selector" style={{marginTop:"1rem",marginLeft:"1rem"}}>
                    <button className="button"> <span>Update Profile</span></button>
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
    <Service/>
    
        </div>
    );
}

export default Profile;