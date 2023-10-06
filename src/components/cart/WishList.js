import React from 'react';
import '../../css/style.css'
 import {removeItemFromWishlist} from '../../slice/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Service from '../../components/home/Service'
function WishList(props) {
  const{items}= useSelector(state=>state.wishlistState);
  const dispatch = useDispatch()
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
                {items?.map(item=>(
                <tbody>
                  <tr>
                    <td class="th-delate"><a onClick={()=> dispatch(removeItemFromWishlist(item.product))}>X</a></td>
                    <td class="th-product"><a><Link to={`/product/${item.product}`}><img src={item.image} alt="Product" /></Link></a></td>
                    <td class="th-details"><h2><Link to={`/product/${item.product}`}><a>{item.name}</a></Link></h2></td>
                    <td class="th-price"><span>₹{item.price}</span></td>
                    <th class="td-add-to-cart"><a href="#"> Add to Cart</a></th>
                  </tr>
                </tbody>
                ))}
              </table>
              <a href="checkout.html" class="all-cart">Add all to cart</a> </div>
          </div>
        </div>
      
      </div>
    </div>
  </section>
  {/* <!-- service section --> */}
  <Service/>
 
        </div>
    );
}

export default WishList;