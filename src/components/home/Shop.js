import React,{useState} from 'react';
import '../../css/owl.carousel.css';
import '../../css/owl.transitions.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/flexslider.css'
import  {Link} from 'react-router-dom'
import Service from './Service'
import Slider from 'react-slick'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import {toast} from 'react-toastify';
import ReactSlider from 'react-slider'

function Shop(props) {

  const slides = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

  };
  const our__product = {

    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,


  };
  const {products =[], loading, error} = useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  const [value, setValue] = useState([]);

  useEffect(()=>{
    if(error){
      return toast.error(error,{
       position: toast.POSITION.BOTTOM_CENTER
      })
    }

    console.log(getProducts)
  dispatch(getProducts) 

 }, [error, dispatch])


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
              <div className="slider-range">
              <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              defaultValue={[0, 500]}
              max={500}
              min={0}
              ariaLabel={['Lower thumb', 'Upper thumb']}
              ariaValuetext={state => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              pearling
              minDistance={10}
              onChange={(value,index)=>setValue(value)}
              /> <br/>
            <div className="amount-range-price">Range: ₹{value[0]} - ₹{value[1]}</div>
             
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
                <Slider {...slides}>
                <div className="item active"> <img src="/images/add-slide1.jpg" alt="slide1"/>
                  <div className="carousel-caption">
                    <h3><a href="single_product.html" title=" Sample Product">Sale Up to 50% off</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" className="info">shopping Now</a> </div>
                </div>
                <div className="item"> <img src="/images/add-slide2.jpg" alt="slide2"/>
                  <div className="carousel-caption">
                    <h3><a href="single_product.html" title=" Sample Product">Smartwatch Collection</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" className="info">All Collection</a> </div>
                </div>
                <div className="item"> <img src="/images/add-slide3.jpg" alt="slide3"/>
                  <div className="carousel-caption">
                    <h3><a href="single_product.html" title=" Sample Product">Summer Sale</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                </Slider>
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
                  <Slider {...slides} >
                  <div className="item">
                     <a href="#x"><img alt="" src="/images/cat-slider-img1.jpg"/></a>
                       <div className="inner-info">
                       <div className="cat-img-title"> <span>Up To 20% Off Decor</span>
                        <h2 className="cat-heading"><strong>Vintage Casual</strong></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <a className="info" href="#">Shop Now</a> </div>
                        </div>
                  </div>
                  {/* <!-- End Item -->  */}
                  
                  {/* <!-- Item --> */}
                  <div className="item"> <a href="#x"><img alt="" src="/images/ss.jpg" /></a> </div>
                  </Slider>
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
          
    
              { products && products.map(product =>(  
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