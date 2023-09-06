import React from 'react';
import Slider from 'react-slick'
function ShopSliderone(props) {
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
    );
}

export default ShopSliderone;