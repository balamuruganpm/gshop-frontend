import React from 'react';
import {Link} from 'react-router-dom'
import Service from './Service'
function ContactUs(props) {
    return (
        <div>
                 {/* <!-- Breadcrumbs --> */}
  
                 <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <Link to='/'><li class="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li></Link>
            <Link to='/contact_us'><li><strong>Contact Us</strong></li></Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}

  {/* <!-- Main Container --> */}
  <section class="main-container col1-layout">
    <div class="main container">
      <div class="row">
        <section class="col-main col-sm-12">
          
          <div id="contact" class="page-content page-contact">
          <div class="page-title">
            <h2>Contact Us</h2>
          </div>
            <div id="message-box-conact"style={{fontFamily: 'Open Sans'}}>We're available for new projects</div>
            <div class="row">
              <div class="col-xs-12 col-sm-6" id="contact_form_map">
                <h3 class="page-subheading">Let's get in touch</h3>
                <p style={{fontFamily: 'Open Sans', fontWeight:"700"}}>Lorem ipsum dolor sit amet onsectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor dapibus eget. Mauris tincidunt aliquam lectus sed vestibulum. Vestibulum bibendum suscipit mattis.</p>
                <br/>
                <ul>
                  <li>Praesent nec tincidunt turpis.</li>
                  <li>Aliquam et nisi risus.&nbsp;Cras ut varius ante.</li>
                  <li>Ut congue gravida dolor, vitae viverra dolor.</li>
                </ul>
                <br/>
                <ul class="store_info">
                  <li><i class="fa fa-home"></i>Tamilnadu, Insia.</li>
                  <li><i class="fa fa-phone"></i><span>Call Us : +91  98765 43210</span></li>
             
                  <li><i class="fa fa-envelope"></i>Email: <span><a href=""><span class="__cf_email__" data-cfemail="582b2d2828372a2c18322d2b2c2c303d353d2e3934343d21763b3735">info@gmail.com</span></a></span></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h3 class="page-subheading">Make an enquiry</h3>
                <div class="contact-form-box">
                  <div class="form-selector">
                    <label>Name</label>
                    <input type="text" class="form-control input-sm" id="name" />
                  </div>
                  <div class="form-selector">
                    <label>Email</label>
                    <input type="text" class="form-control input-sm" id="email" />
                  </div>
                  <div class="form-selector">
                    <label>Phone</label>
                    <input type="text" class="form-control input-sm" id="phone" />
                  </div>
                  <div class="form-selector">
                    <label>Message</label>
                    <textarea class="form-control input-sm" rows="10" id="message"></textarea>
                  </div>
                  <div class="form-selector">
                    <button class="button"><i class="fa fa-send"></i>&nbsp; <span>Send Message</span></button>
                    &nbsp; <a href="#" class="button">Clear</a> </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
  {/* <!-- Main Container End --> */}
  {/* <!-- service section --> */}
  
       <Service/>
  
            
        </div>
    );
}

export default ContactUs;