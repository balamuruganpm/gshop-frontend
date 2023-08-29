
import React, { Fragment } from 'react';
// import {NavLink} from 'react-router-dom';
import '../../css/style.css'
import {Link} from 'react-router-dom'
function Footer(props) {
  return (
        <Fragment>
            

  <footer style={{backgroundColor:"#676767",marginTop:"5rem"}} > 
    
    {/* <!-- our clients Slider --> */}
    <div className="our-clients">
    
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3 col-xs-12 col-lg-2 collapsed-block">
          <div className="footer-links">
            <h3 className="links-title">Information</h3>
            <div className="tabBlock" id="TabBlock-1">
              <ul className="list-links list-unstyled">
                <li><a href="#s">Delivery Information</a></li>
                <li><a href="#">Discount</a></li>
                <li><a href="sitemap.html">Sitemap</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="faq.html">FAQs</a></li>
                <li><a href="#">Terms &amp; Condition</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xs-12 col-lg-2 collapsed-block">
          <div className="footer-links">
            <h3 className="links-title">Insider</h3>
            <div className="tabBlock" id="TabBlock-3">
              <ul className="list-links list-unstyled">
                <li> <a href="sitemap.html">Sites Map </a> </li>
                <li> <a href="#">News</a> </li>
                <li> <a href="#">Trends</a> </li>
               <Link to='/about_us'><li> <a href="about_us.html">About Us</a> </li></Link> 
               <Link to='/contact_us'><li> <a href="contact_us.html">Contact Us</a> </li></Link> 
                <li> <a href="#">My Orders</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-xs-12 col-lg-2 collapsed-block">
          <div className="footer-links">
            <h3 className="links-title">Service</h3>
            <div className="tabBlock" id="TabBlock-4">
              <ul className="list-links list-unstyled">
              <Link to='/my_account'> <li> <a href="">Account</a> </li></Link>
              <Link to='/wishlist'> <li> <a href="">Wishlist</a> </li></Link>
              <Link to='/cart'> <li> <a href="">Shopping Cart</a> </li></Link>
                <li> <a href="#">Return Policy</a> </li>
                <li> <a href="#">Special</a> </li>
                <li> <a href="#">Lookbook</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xs-12 col-lg-3">
          <h3 className="links-title">Contact us</h3>
          <p style={{color:"#FFF",  fontFamily: "Open Sans"}}>Lorem Ipsum is simply dummy text of the print and typesetting industry.</p>
          <div className="footer-content">
            <div className="email"> <i className="fa fa-envelope"></i>
              <p><a href="" className="__cf_email__" data-cfemail="5e0d2b2e2e312c2a1e2a363b333b2d703d3133" style={{color:"#FFFFFF"}}>info@gmail.com</a></p>
            </div>
            <div className="phone"> <i className="fa fa-phone"></i>
              <p>(+91) 98765 43210 </p>
            </div>
            <div className="address"> <i className="fa fa-map-marker"></i>
              <p> Tamilnadu, India.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-3">
          <div className="footer-links">
            <div className="footer-newsletter">
              <h3 className="links-title">Sign up for newsletter</h3>
              <form id="newsletter-validate-detail" method="post" action="#">
                <div className="newsletter-inner">
                  <input className="newsletter-email" name='Email' placeholder='Enter Your Email'/>
                  <button className="button subscribe" type="submit" title="Subscribe">Subscribe</button>
                </div>
              </form>
            </div>
            <div className="social">
              <ul className="inline-mode">
                <li className="social-network fb"><a title="Connect us on Facebook" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
              
                <li className="social-network tw"><a title="Connect us on Twitter" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                <li className="social-network linkedin"><a title="Connect us on Linkedin" target="_blank" href="https://www.pinterest.com/"><i className="fab fa-linkedin"></i></a></li>
                <li className="social-network rss"><a title="Connect us on Instagram" target="_blank" href="https://instagram.com/"><i className="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-coppyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-12 coppyright"> Copyright © 2023 <a href="#" style={{color:"#F9FBD7"}}> G Shop </a>. All Rights Reserved. </div>
          <div className="col-sm-6 col-xs-12">
            <div className="payment">
              <ul>
                <li><a href="#"><img title="Visa" alt="Visa" src="/images/visa.png" /></a></li>
                <li><a href="#"><img title="Paypal" alt="Paypal" src="/images/paypal.png" /></a></li>
                <li><a href="#"><img title="Discover" alt="Discover" src="/images/discover.png"/></a></li>
                <li><a href="#"><img title="Master Card" alt="Master Card" src="/images/master-card.png"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a href="#" className="totop"><i className="fa fa-arrow-up"></i></a> 
  {/* <!-- End Footer --> 
  <!--Newsletter Popup Start--> */}
  <div id="myModal" className="modal fade">
    <div className="modal-dialog newsletter-popup">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <div className="modal-body">
          <h4 className="modal-title">Join Our Newsletters</h4>
          <form id="newsletter-form" method="post" action="#">
            <div className="content-subscribe">
              <div className="form-subscribe-header">
                <label>Enter your email and we'll send you a coupon with 10% off your next order.</label>
              </div>
              <div className="input-box">
                <input type="text" className="input-text newsletter-subscribe" title="Sign up for our newsletter" name="email" placeholder="Enter your email address" />
              </div>
              <div className="actions">
                <button className="button-subscribe" title="Subscribe" type="submit">Subscribe</button>
              </div>
            </div>
          </form>
          <div className="subscribe-bottom">
            <input name="notshowpopup" id="notshowpopup" type="checkbox" />
            Don’t show this popup again </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!--End of Newsletter Popup-->  */}
          
        </Fragment>
  );
}

export default Footer;