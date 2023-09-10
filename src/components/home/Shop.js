import React,{useState} from 'react';
import '../../css/owl.carousel.css';
import '../../css/owl.transitions.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/flexslider.css'
import  {Link} from 'react-router-dom'
import Service from './Service'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import {toast} from 'react-toastify';
import Slider  from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css';
import ShopSlider from './ShopSlider';
import ShopSliderone from './ShopSliderone';
function Shop(props) {


  const {products=[], loading, error} = useSelector((state) => state.productsState);
  const dispatch = useDispatch();
  const [price,setPrice]=useState([1,1000]);
  const [priceChanged,setPriceChanged] = useState(price)

  useEffect(()=>{
    if(error){
      return toast.error(error,{
       position: toast.POSITION.BOTTOM_CENTER
      })
    }
     dispatch(getProducts()) 

 },[error, dispatch,priceChanged])


    return (
        <div>
              {/* <!-- Breadcrumbs --> */}
  
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <Link to='/'><li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li></Link>
            <Link to='/shop'><li><strong>Shop</strong></li></Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}
  {/* <!-- Main Container --> */}
  <div className="main-container col2-left-layout">
    <div className="container">
      <div className="row" id="item__categories">
        <aside className="sidebar col-sm-3 col-xs-12 col-sm-pull-9">
          <div className="block category-sidebar">
            <div className="sidebar-title">
              <h3>Categories</h3>
            </div>
            <ul className="product-categories">
              <li className="cat-item current-cat cat-parent"><a href= "shop_grid.html">Women</a>
                <ul className="children">
                  <li className="cat-item cat-parent"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Accessories</a>
                    <ul className="children">
                      <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Dresses</a></li>
                      <li className="cat-item cat-parent"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Handbags</a>
                        <ul className="children">
                          <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Beaded Handbags</a></li>
                          <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Sling bag</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="cat-item cat-parent"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Handbags</a>
                    <ul className="children">
                      <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; backpack</a></li>
                      <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Beaded Handbags</a></li>
                      <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Fabric Handbags</a></li>
                      <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Sling bag</a></li>
                    </ul>
                  </li>
                  <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Jewellery</a> </li>
                  <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Swimwear</a> </li>
                </ul>
              </li>
              <li className="cat-item cat-parent"><a href="shop_grid.html">Men</a>
                <ul className="children">
                  <li className="cat-item cat-parent"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Dresses</a>
                    <ul className="children">
                      <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Casual</a></li>
                      <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Designer</a></li>
                      <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Evening</a></li>
                      <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Hoodies</a></li>
                    </ul>
                  </li>
                  <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Jackets</a> </li>
                  <li className="cat-item"><a href="shop_grid.html"><i className="fa fa-angle-right"></i>&nbsp; Shoes</a> </li>
                </ul>
              </li>
              <li className="cat-item"><a href="shop_grid.html">Electronics</a></li>
              <li className="cat-item"><a href="shop_grid.html">Furniture</a></li>
              <li className="cat-item"><a href="shop_grid.html">KItchen</a></li>
            </ul>
          </div>
          <div className="block shop-by-side">
            <div className="sidebar-bar-title">
              <h3>Shop By</h3>
            </div>
            <div className="block-content">
              <p className="block-subtitle">Shopping Options</p>
              <div className="layered-Category">
                <h2 className="saider-bar-title">Categories</h2>
                <div className="layered-content">
                  <ul className="check-box-list">
                    <li>
                      <input type="checkbox" id="jtv1" name="jtvc"/>
                      <label for="jtv1"> <span className="button"></span> Camera & Photo<span className="count">(12)</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="jtv2" name="jtvc"/>
                      <label for="jtv2"> <span className="button"></span> Computers<span className="count">(18)</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="jtv3" name="jtvc"/>
                      <label for="jtv3"> <span className="button"></span> Apple Store<span className="count">(15)</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="jtv4" name="jtvc"/>
                      <label for="jtv4"> <span className="button"></span> Car Electronic<span className="count">(03)</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="jtv5" name="jtvc"/>
                      <label for="jtv5"> <span className="button"></span> Accessories<span className="count">(04)</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="jtv7" name="jtvc"/>
                      <label for="jtv7"> <span className="button"></span> Game & Video<span className="count">(07)</span> </label>
                    </li>
                    <li>
                      <input type="checkbox" id="jtv8" name="jtvc"/>
                      <label for="jtv8"> <span className="button"></span> Best selling<span className="count">(05)</span> </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="manufacturer-area">
                <h2 className="saider-bar-title">Manufacturer</h2>
                <div className="saide-bar-menu">
                  <ul>
                    <li><a  style={{color:"black"}}><i className="fa fa-angle-right"></i> Aliquam</a></li>
                    <li><a  style={{color:"black"}}><i className="fa fa-angle-right"></i> Duis tempus id </a></li>
                    <li><a  style={{color:"black"}}><i className="fa fa-angle-right"></i> Leo quis molestie. </a></li>
                    <li><a  style={{color:"black"}}><i className="fa fa-angle-right"></i> Suspendisse </a></li>
                    <li><a  style={{color:"black"}}><i className="fa fa-angle-right"></i> Nunc gravida </a></li>
                  </ul>
                </div>
              </div>
              
              
            </div>
          </div>
          <div className="block product-price-range ">
            <div className="sidebar-bar-title">
              <h3>Price</h3>
            </div>
            <div className="block-content">
              <div className="slider-range" onMouseUp={()=>setPriceChanged(price)}>


             <Slider style={{marginTop:"1rem"}}
              range ={true}
              marks = {
                  {
                    1:'$1',
                    1000:'$1000'
                  }

              }
              min={1}
              max={1000}
              defaultValue={price}
              className="horizontal-slider"
              onChange={(price)=>{
                setPrice(price)
                 console.log(price[0], price[1]);
            }}
              handleRender={
                renderProps => {
                    return (
                        <Tooltip  overlay={`$${renderProps.props['aria-valuenow']}`}  >
                             <div {...renderProps.props}>  </div>
                        </Tooltip>
                    )
                }
            }
              />
              
            <div className="amount-range-price" style={{marginTop:"2rem"}}>Range: ₹{price[0]} - ₹{price[1]}</div>
             
                <ul className="check-box-list">
                  <li>
                    <input type="checkbox" id="p1" name="cc" />
                    <label for="p1"> <span className="button"></span> ₹20 - ₹50<span className="count">(0)</span> </label>
                  </li>
                  <li>
                    <input type="checkbox" id="p2" name="cc" />
                    <label for="p2"> <span className="button"></span> ₹50 - ₹100<span className="count">(0)</span> </label>
                  </li>
                  <li>
                    <input type="checkbox" id="p3" name="cc" />
                    <label for="p3"> <span className="button"></span> ₹100 - ₹250<span className="count">(0)</span> </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
       
          <div className="single-img-add sidebar-add-slider ">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel"> 
              {/* <!-- Indicators --> */}
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>
              
              {/* <!-- Wrapper for slides --> */}
              <div className="carousel-inner" id="slide__add" role="listbox">
                <ShopSliderone/>
              </div>
             
              {/* <!-- Controls -->  */}
              <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span className="sr-only">Next</span> </a> </div>
         
         </div>
         
        
        </aside>
        <div className="col-main col-sm-9 col-xs-12 col-sm-push-3" style={{marginTop:"-3.5rem"}}>
          <div className="category-description std">
            <div className="slider-items-products">
              <div id="category-desc-slider" className="product-flexslider hidden-buttons">
                <div className=""> 
                  
                  {/* <!-- Item --> */}
                     <ShopSlider/>
                  {/* <!-- End Item -->  */}
                  
                </div>
              </div>
            </div>
          </div>
          <div className="shop-inner">
            <div className="page-title">
              <h2>Our Products</h2>
            </div>
            <div className="toolbar">
              <div className="view-mode">
                <ul>
                  <li className="active"> <a href="shop_grid.html"> <i className="fa fa-th"></i> </a> </li>
                  <li> <a href="shop_list.html"> <i className="fa fa-th-list"></i> </a> </li>
                </ul>
              </div>
              <div className="sorter">
                <div className="short-by">
                  <label>Sort By:</label>
                  <select>
                    <option selected="selected">Position</option>
                    <option>Name</option>
                    <option>Price</option>
                    <option>Size</option>
                  </select>
                </div>
                <div className="short-by page">
                  <label>Show:</label>
                  <select>
                    <option selected="selected">18</option>
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="product-grid-area" id="our__product">
          
    
              { products && products?.map(product =>(  
                <div className="product-item" style={{ marginRight:"1rem"}}>
                 <div className="item-inner" >
                  <div className="product-thumb has-hover-img"> 
                   <Link to={`/product/${product._id}`}> <figure style={{border: "1px #eee solid"}}>{product.images.length > 0 && <> <img src={product.images[0].image} alt="" /> <img className="hover-img" src={product.hoverimages[0].image} alt="" /> </> }</figure></Link>
                
                  <div className="pr-info-area animated animate2"><a href="quick_view.html" className="quick-view"><i className="fa fa-search"><span>Quick view</span></i></a> <a href="wishlist.html" className="wishlist"><i className="fa fa-heart"><span>Wishlist</span></i></a> <a href="compare.html" className="compare"><i className="fa fa-exchange"><span>Compare</span></i></a> </div>
                   </div>
                    <div className="item-info" >
                    <div className="info-inner" >
                  
                      <div className="item-content item-details">
                      <div className="item-title">
                        <h4><a title="Ipsums Dolors Untra" href="single_product.html">{product.name}</a></h4>
                      </div>
                      <div className='ratings mt-auto'>
                         <div className='rating-outer'>
                         <div className='rating-inner'  style={{width: `${product.ratings / 5 * 100}%` }}></div>
                         </div>
                     </div>                        
                      <div className="item-price">
                          <div className="price-box"> <span className="regular-price"> <span className="price">₹ {product.price}</span> </span> </div>
                        </div>
                        <div className="pro-action">
                          <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))}

  
          <div className="pagination-area ">
              <ul>
                <li><a className="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
              </ul>
            </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
  {/* <!-- Main Container End -->  */}
  {/* <!-- service section --> */}
  
      <Service/>
  
        </div>
    );
}

export default Shop;