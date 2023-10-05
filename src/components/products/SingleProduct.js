import React from "react";
import '../../css/style.css';
import { useParams } from "react-router";
import { useDispatch} from "react-redux";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { getProduct } from "../../actions/productActions";
import { addCartItem } from "../../actions/cartAction";
import {toast} from 'react-toastify'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Slider from "react-slick";
import RelatedProduct from "./RelatedProduct";
import UpsellProduct from './UpsellProduct'

function SingleProduct(props) {
    const[showTab, setShowtab] = useState(1);
    const handleClick = (e) =>{
      setShowtab(e);
    }


    const {loading, product=[]} = useSelector((state) => state.productState);
    const dispatch = useDispatch();
    const {id} = useParams()
    const [quantity,setQuantity] = useState(1);
  
    const increseQty = ()=>{
       const count =  quantity
       if(product.stock === 0 || quantity >= product.stock ) return;
       const qty = count+1
       setQuantity(qty);
    } 
  
    const decreseQty = ()=>{
      const count = quantity
      if(product.stock === 1) return;
      if(quantity > 1 ){  
         const qty = count- 1
        setQuantity(qty);}
   
   } 
  
  
    useEffect(()=>{
     dispatch(getProduct(id))
    },[dispatch,id])
  
    const settings = {
      // customPaging: function(i) {
      //   return (
      //     <a>
      //       <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
      //     </a>
      //   );
      // },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className:"slick-prev slick-next slick-prev:before slick-next:before"
    };
    return (
   <>  
   <div className="main-container col1-layout">
    <div className="container">
      <div className="row">
        <div className="col-main">
          <div className="product-view-area">
            <div className="product-big-image col-xs-12 col-sm-5 col-lg-5 col-md-5">
              <div className="icon-sale-label sale-left">Sale</div>
             <Zoom><div className="large-image"> <a href="#" className="cloud-zoom" id="zoom1" rel="useWrapper: false, adjustY:0, adjustX:20"> <img className="zoom-img" src={product.image[0]?.image} alt={product.name} /> </a> </div></Zoom> 
              
             
             
              <div className="flexslider flexslider-thumb">
                <ul className="previews-list slides">
                <Slider {...settings} className="">
                  <li><a href='/images/a1.jpg' className='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: '/images/a1.jpg' "><img src="/images/a1.jpg" alt = "Thumbnail 2"/></a></li> 
                   <li><a href='/images/a2.jpg' className='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'images/a2.jpg' "><img src="/images/a2.jpg" alt = "Thumbnail 2"/></a></li>
                  <li><a href='/images/a3.jpg' className='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'images/a3.jpg' "><img src="/images/a3.jpg" alt = "Thumbnail 2"/></a></li>
                  <li><a href='/images/a4.jpg' className='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'images/a4.jpg' "><img src="/images/a4.jpg" alt = "Thumbnail 2"/></a></li>
                 <li><a href='/images/a1.jpg' className='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'images/a1.jpg' "><img src="/images/a1.jpg" alt = "Thumbnail 2"/></a></li>
                 </Slider>
                </ul>

              </div>
             
              {/* <!-- end: more-images -->  */}
              
            </div>
            <div className="col-xs-12 col-sm-7 col-lg-7 col-md-7 product-details-area">
              <div className="product-name">
                <h1>{product.name}</h1>
              </div>
              <div className="price-box">
                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> ₹ {product.price} </span> </p>
                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> ₹ {product.price} </span> </p>
              </div>
              <div className="ratings">
                <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Your Review</a> </p>
                <p className="availability in-stock pull-right">Availability: <span>In Stock</span></p>
              </div>
              <div className="short-description">
                <h4>Quick Overview</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.</p>
                <p> Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.</p>
              </div>
             
              <div className="product-variation">
                <form action="#" method="post">
                  <div className="cart-plus-minus">
                    <label for="qty">Quantity:</label>
                    <div className="numbers-row">
                      <div onClick={decreseQty} className="dec qtybutton"><i className="fa fa-minus">&nbsp;</i></div>
                      <input type="text" className="qty" title="Qty" value={quantity} maxlength="12" id="qty" name="qty" />
                      <div onClick={increseQty} className="inc qtybutton"><i className="fa fa-plus">&nbsp;</i></div>
                    </div>
                  </div>
                  <button className="button pro-add-to-cart" disabled={product.stock === 0 ? true : false} onClick={()=>
                { dispatch(addCartItem(product._id,quantity))
                  
                    toast('Cart Item Added',{
                      type:'success',
                      position:toast.POSITION.TOP_RIGHT
                    })

                }} title="Add to Cart" type="button"><span><i className="fa fa-shopping-cart"></i> Add to Cart</span></button>
                </form>
              </div>
              <div className="product-cart-option">
                <ul>
                  <li><a href="#"><i className="fa fa-heart"></i><span>Add to Wishlist</span></a></li>
                  <li><a href="#"><i className="fa fa-retweet"></i><span>Add to Compare</span></a></li>
                  <li><a href="#"><i className="fa fa-envelope"></i><span>Email to a Friend</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="product-overview-tab">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="product-tab-inner">
                  <div className="line">

                  </div>
                  <ul id="product-detail-tab" className="nav nav-tabs product-tabs">
                    <li className={showTab===1 ? "active" : ""} onClick={()=> handleClick(1)}> <h3 id="tab-active"> Description </h3> </li>
                    <li className={showTab===2 ? "active" : ""} onClick={()=> handleClick(2)}> <h3 id="tab-active">Reviews</h3> </li>
                    <li className={showTab===3 ? "active" : ""} onClick={()=> handleClick(3)}><h3 id="tab-active">Tags</h3></li>
                    <li className={showTab===4 ? "active" : ""} onClick={()=> handleClick(4)}> <h3 id="tab-active">Custom Tab</h3> </li>
                  </ul>
                  <div id="show_contents">

                 
                  <div id="productTabContent" className="tab-content">
                  
                    <div  className={showTab===1 ? "active" : "tab-pane fade"} id="description">
                      <div className="std">
                        <p>Proin lectus ipsum, gravida et mattis vulputate, 
                          tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in 
                          faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend 
                          laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                          luctus malesuada tincidunt. Nunc facilisis sagittis ullamcorper. Proin 
                          lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et 
                          lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et 
                          ultrices posuere cubilia Curae;</p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                      </div>
                    </div>
                
                    <div   className={showTab===2 ? "active" : "tab-pane fade"} class="tab-pane fade">
                      <div id="reviews">
                      <div class="col-sm-5 col-lg-5 col-md-5">
                        <div class="reviews-content-left">
                          <h2>Customer Reviews</h2>
                          <div class="review-ratting">
                            <p><a href="#">Amazing</a> Review by Company</p>
                            <table>
                              <tbody>
                                <tr>
                                  <th>Price</th>
                                  <td><div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div></td>
                                </tr>
                                <tr>
                                  <th>Value</th>
                                  <td><div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div></td>
                                </tr>
                                <tr>
                                  <th>Quality</th>
                                  <td><div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div></td>
                                </tr>
                              </tbody>
                            </table>
                            <p class="author"> Angela Mack<small> (Posted on 16/12/2015)</small> </p>
                          </div>
                          <div class="review-ratting">
                            <p><a href="#">Good!!!!!</a> Review by Company</p>
                            <table>
                              <tbody>
                                <tr>
                                  <th>Price</th>
                                  <td><div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div></td>
                                </tr>
                                <tr>
                                  <th>Value</th>
                                  <td><div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div></td>
                                </tr>
                                <tr>
                                  <th>Quality</th>
                                  <td><div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div></td>
                                </tr>
                              </tbody>
                            </table>
                            <p class="author"> Lifestyle<small> (Posted on 20/12/2015)</small> </p>
                          </div>
                          <div class="review-ratting">
                            <p><a href="#">Excellent</a> Review by Company</p>
                            <table>
                              <tbody>
                                <tr>
                                  <th>Price</th>
                                  <td><div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div></td>
                                </tr>
                                <tr>
                                  <th>Value</th>
                                  <td><div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div></td>
                                </tr>
                                <tr>
                                  <th>Quality</th>
                                  <td><div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div></td>
                                </tr>
                              </tbody>
                            </table>
                            <p class="author"> Jone Deo<small> (Posted on 25/12/2015)</small> </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-7 col-lg-7 col-md-7">
                        <div class="reviews-content-right">
                          <h2>Write Your Own Review</h2>
                          <form>
                            <h3>You're reviewing: <span>Donec Ac Tempus</span></h3>
                            <h4>How do you rate this product?<em>*</em></h4>
                            <div class="table-responsive reviews-table">
                              <table>
                                <tbody>
                                  <tr>
                                    <th></th>
                                    <th>1 star</th>
                                    <th>2 stars</th>
                                    <th>3 stars</th>
                                    <th>4 stars</th>
                                    <th>5 stars</th>
                                  </tr>
                                  <tr>
                                    <td>Quality</td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                  </tr>
                                  <tr>
                                    <td>Price</td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                  </tr>
                                  <tr>
                                    <td>Value</td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                    <td><input type="radio" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="form-area">
                              <div class="form-element">
                                <label>Nickname <em>*</em></label>
                                <input type="text" />
                              </div>
                              <div class="form-element">
                                <label>Summary of Your Review <em>*</em></label>
                                <input type="text" />
                              </div>
                              <div class="form-element" id="text_review">
                                <label>Review <em>*</em></label>
                                <textarea></textarea>
                              </div>
                              <br/>
                              <div class="buttons-set" id="review_btn">
                                <button class="button submit" title="Submit Review" type="submit"><span><i class="fa fa-thumbs-up"></i> &nbsp;Review</span></button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      </div>
                    </div>

                
                    <div className={showTab=== 3 ? "active" : "tab-pane fade"}>
                    <div>
                    <div class="tags">
                        <form id="addTagForm" action="#" method="get">
                            <div class="form-add-tags">
                              <div class="input-box" id="products_tag">
                                <label for="productTagName">Add Your Tags:</label>
                                <input class="input-text" name="productTagName" id="productTagName" type="text" />
                                <button type="button" title="Add Tags" class="button add-tags"><i class="fa fa-plus"></i> &nbsp;<span>Add Tags</span> </button>
                               
                              </div>
                             {/* <!--input-box-->  */}
                             <p style={{marginTop:"10px"}}>Use spaces to separate tags. Use single quotes (') for phrases.</p>
                            </div>
                           
                          </form>
                        </div>
                        {/* <!--tags--> */}
                                       </div>
                    </div>
                
                    <div class="tab-pane fade"  className={showTab=== 4  ? "tab-pane  active" : "tab-pane fade"}  id="custom_tabs">
                      <div class="product-tabs-content-inner clearfix">
                        <p><strong>Lorem Ipsum</strong><span>&nbsp;is
                          simply dummy text of the printing and typesetting industry. Lorem Ipsum
                          has been the industry's standard dummy text ever since the 1500s, when 
                          an unknown printer took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five centuries, but also the 
                          leap into electronic typesetting, remaining essentially unchanged. It 
                          was popularised in the 1960s with the release of Letraset sheets 
                          containing Lorem Ipsum passages, and more recently with desktop 
                          publishing software like Aldus PageMaker including versions of Lorem 
                          Ipsum.</span></p>
                      </div>
                    </div>
                  
                 
                    
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   <RelatedProduct/>
   <UpsellProduct /> 
   </>

 );
}

export default SingleProduct;