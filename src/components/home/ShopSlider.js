import React from 'react';
import Slider from 'react-slick'
function ShopSlider(props) {
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
    return (
        <div>
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
        </div>
    );
}

export default ShopSlider;