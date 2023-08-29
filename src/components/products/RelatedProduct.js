import React from 'react';
import Slider from "react-slick";
function RelatedProduct(props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        slidesToScroll: 3,
        className:"slick-prev slick-next slick-prev:before slick-next:before"
      };
    return (
      
         <div>
             {/* <!-- Related Product Slider --> */}
  
            
            <div className="container">
      
                <div className="row">
                <div className="col-xs-12">
                    <div className="related-product-area">
                    <div className="page-header">
                        <h2>Related Products</h2>
                    </div>
                    <div className="related-products-pro">

                      
                   
                    
                            <div id="related-product-slider" className="slider-items  slider-width-col4">
                            <Slider {...settings} className='relate-item '>
                            <div className="product-item">
                            <div className="item-inner" style={{width:"265px",height:"330px",}}>
                            <div className="product-thumb has-hover-img"  > 
                            <figure style={{border: "1px #eee solid"}}> <img src="/images/a2.jpg" alt="" /> <img className="hover-img" src="/images/z2.jpg" alt="" /></figure>
                            
                            <div className="pr-info-area animated animate2"><a href="quick_view.html" className="quick-view"><i className="fa fa-search"><span>Quick view</span></i></a> <a href="wishlist.html" className="wishlist"><i className="fa fa-heart"><span>Wishlist</span></i></a> <a href="compare.html" className="compare"><i className="fa fa-exchange"><span>Compare</span></i></a> </div>
                            </div>
                            <div className="item-info" >
                                <div className="info-inner" >
                            
                                <div className="item-content item-details">
                                <div className="item-title">
                                    <h4><a title="Ipsums Dolors Untra" href="single_product.html"></a>Ipsums Dolors Untra </h4>
                                </div>
                                <div className='ratings mt-auto'>
                                    <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                    </div>
                                </div>                        
                                <div className="item-price">
                                    <div className="price-box"> <span className="regular-price"> <span className="price">₹ 124</span> </span> </div>
                                    </div>
                                    <div className="pro-action">
                                    <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                             </div>
                             <div className="product-item">
                                <div className="item-inner" style={{width:"265px",height:"330px",}}>
                                <div className="product-thumb has-hover-img"  > 
                                <figure style={{border: "1px #eee solid"}}> <img src="/images/a1.jpg" alt="" /> <img className="hover-img" src="/images/z1.jpg" alt="" /></figure>
                                
                                <div className="pr-info-area animated animate2"><a href="quick_view.html" className="quick-view"><i className="fa fa-search"><span>Quick view</span></i></a> <a href="wishlist.html" className="wishlist"><i className="fa fa-heart"><span>Wishlist</span></i></a> <a href="compare.html" className="compare"><i className="fa fa-exchange"><span>Compare</span></i></a> </div>
                                </div>
                                <div className="item-info" >
                                    <div className="info-inner" >
                                
                                    <div className="item-content item-details">
                                    <div className="item-title">
                                        <h4><a title="Ipsums Dolors Untra" href="single_product.html"></a>Ipsums Dolors Untra </h4>
                                    </div>
                                    <div className='ratings mt-auto'>
                                        <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                        </div>
                                    </div>                        
                                    <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">₹ 124</span> </span> </div>
                                        </div>
                                        <div className="pro-action">
                                        <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                             </div>
                             <div className="product-item">
                                <div className="item-inner" style={{width:"265px",height:"330px",}}>
                                <div className="product-thumb has-hover-img"  > 
                                <figure style={{border: "1px #eee solid"}}> <img src="/images/a3.jpg" alt="" /> <img className="hover-img" src="/images/z3.jpg" alt="" /></figure>
                                
                                <div className="pr-info-area animated animate2"><a href="quick_view.html" className="quick-view"><i className="fa fa-search"><span>Quick view</span></i></a> <a href="wishlist.html" className="wishlist"><i className="fa fa-heart"><span>Wishlist</span></i></a> <a href="compare.html" className="compare"><i className="fa fa-exchange"><span>Compare</span></i></a> </div>
                                </div>
                                <div className="item-info" >
                                    <div className="info-inner" >
                                
                                    <div className="item-content item-details">
                                    <div className="item-title">
                                        <h4><a title="Ipsums Dolors Untra" href="single_product.html"></a>Ipsums Dolors Untra </h4>
                                    </div>
                                    <div className='ratings mt-auto'>
                                        <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                        </div>
                                    </div>                        
                                    <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">₹ 124</span> </span> </div>
                                        </div>
                                        <div className="pro-action">
                                        <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                             </div>
                             <div className="product-item">
                                <div className="item-inner" style={{width:"265px",height:"330px",}}>
                                <div className="product-thumb has-hover-img"  > 
                                <figure style={{border: "1px #eee solid"}}> <img src="/images/a4.jpg" alt="" /> <img className="hover-img" src="/images/z4.jpg" alt="" /></figure>
                                
                                <div className="pr-info-area animated animate2"><a href="quick_view.html" className="quick-view"><i className="fa fa-search"><span>Quick view</span></i></a> <a href="wishlist.html" className="wishlist"><i className="fa fa-heart"><span>Wishlist</span></i></a> <a href="compare.html" className="compare"><i className="fa fa-exchange"><span>Compare</span></i></a> </div>
                                </div>
                                <div className="item-info" >
                                    <div className="info-inner" >
                                
                                    <div className="item-content item-details">
                                    <div className="item-title">
                                        <h4><a title="Ipsums Dolors Untra" href="single_product.html"></a>Ipsums Dolors Untra </h4>
                                    </div>
                                    <div className='ratings mt-auto'>
                                        <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                        </div>
                                    </div>                        
                                    <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">₹ 124</span> </span> </div>
                                        </div>
                                        <div className="pro-action">
                                        <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                             </div>
                             <div className="product-item">
                                <div className="item-inner" style={{width:"265px",height:"330px",}}>
                                <div className="product-thumb has-hover-img"  > 
                                <figure style={{border: "1px #eee solid"}}> <img src="/images/a1.jpg" alt="" /> <img className="hover-img" src="images/z1.jpg" alt="" /></figure>
                                
                                <div className="pr-info-area animated animate2"><a href="quick_view.html" className="quick-view"><i className="fa fa-search"><span>Quick view</span></i></a> <a href="wishlist.html" className="wishlist"><i className="fa fa-heart"><span>Wishlist</span></i></a> <a href="compare.html" className="compare"><i className="fa fa-exchange"><span>Compare</span></i></a> </div>
                                </div>
                                <div className="item-info" >
                                    <div className="info-inner" >
                                
                                    <div className="item-content item-details">
                                    <div className="item-title">
                                        <h4><a title="Ipsums Dolors Untra" href="single_product.html"></a>Ipsums Dolors Untra </h4>
                                    </div>
                                    <div className='ratings mt-auto'>
                                        <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                        </div>
                                    </div>                        
                                    <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">₹ 124</span> </span> </div>
                                        </div>
                                        <div className="pro-action">
                                        <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                             </div>
                            
                            {/* <!-- .a2 -->  */}
                            
                            {/* <!-- b2 --> */}
                            
                            <div className="product-item">
                                <div className="item-inner" style={{width:"265px",height:"330px",}}>
                                <div className="product-thumb has-hover-img"  > 
                                <figure style={{border: "1px #eee solid"}}> <img src="/images/a2.jpg" alt="" /> <img className="hover-img" src="/images/z2.jpg" alt="" /></figure>
                                
                                <div className="pr-info-area animated animate2"><a href="quick_view.html" className="quick-view"><i className="fa fa-search"><span>Quick view</span></i></a> <a href="wishlist.html" className="wishlist"><i className="fa fa-heart"><span>Wishlist</span></i></a> <a href="compare.html" className="compare"><i className="fa fa-exchange"><span>Compare</span></i></a> </div>
                                </div>
                                <div className="item-info" >
                                    <div className="info-inner" >
                                
                                    <div className="item-content item-details">
                                    <div className="item-title">
                                        <h4><a title="Ipsums Dolors Untra" href="single_product.html"></a>Ipsums Dolors Untra </h4>
                                    </div>
                                    <div className='ratings mt-auto'>
                                        <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                        </div>
                                    </div>                        
                                    <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">₹ 124</span> </span> </div>
                                        </div>
                                        <div className="pro-action">
                                        <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                             </div>
                            </Slider>
                            </div>
          
                        
                
                   
                    </div>
                    </div>
                </div>
                </div>
      
            </div>
           
             {/* <!-- Related Product Slider End -->  */}
        </div>
    );
}

export default RelatedProduct;