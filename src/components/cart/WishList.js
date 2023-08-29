import React from 'react';
import '../../css/style.css'
function WishList(props) {
    return (
        <div>
    <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li>
            <li><strong>Wishlist</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}
  {/* <!-- Main Container --> */}
  <section class="main-container col2-right-layout">
    <div class="main container">
      <div class="row">
        <div class="col-main col-sm-12 col-xs-12">
          <div class="my-account">
            <div class="page-title">
              <h2>My Wishlist</h2>
            </div>
            <div class="wishlist-item table-responsive">
              <table class="col-md-12">
                <thead>
                  <tr>
                    <th class="th-delate">Remove</th>
                    <th class="th-product">Images</th>
                    <th class="th-details">Product Name</th>
                    <th class="th-price">Unit Price</th>
                    <th class="th-total th-add-to-cart">Add to Cart </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="th-delate"><a href="#">X</a></td>
                    <td class="th-product"><a href="#"><img src="/images/a1.jpg" alt="cart" /></a></td>
                    <td class="th-details"><h2><a href="#">Lorem Ipsum is simply</a></h2></td>
                    <td class="th-price">$125.00</td>
                    <th class="td-add-to-cart"><a href="#"> Add to Cart</a></th>
                  </tr>
                  <tr>
                    <td class="th-delate"><a href="#">X</a></td>
                    <td class="th-product"><a href="#"><img src="/images/a2.jpg" alt="cart" /></a></td>
                    <td class="th-details"><h2><a href="#">Leo quis molestie</a></h2></td>
                    <td class="th-price">$99.00</td>
                    <th class="td-add-to-cart"><a href="#"> Add to Cart</a></th>
                  </tr>
                  <tr>
                    <td class="th-delate"><a href="#">X</a></td>
                    <td class="th-product"><a href="#"><img src="/images/a3.jpg" alt="cart"/></a></td>
                    <td class="th-details"><h2><a href="#">Lorem Ipsum is simply</a></h2></td>
                    <td class="th-price">$179.89</td>
                    <th class="td-add-to-cart"><a href="#"> Add to Cart</a></th>
                  </tr>
                  <tr>
                    <td class="th-delate"><a href="#">X</a></td>
                    <td class="th-product"><a href="#"><img src="/images/a4.jpg" alt="cart"/></a></td>
                    <td class="th-details"><h2><a href="#">Leo quis molestie</a></h2></td>
                    <td class="th-price">$199.00</td>
                    <th class="td-add-to-cart"><a href="#"> Add to Cart</a></th>
                  </tr>
                </tbody>
              </table>
              <a href="checkout.html" class="all-cart">Add all to cart</a> </div>
          </div>
        </div>
      
      </div>
    </div>
  </section>
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

export default WishList;