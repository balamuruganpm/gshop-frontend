import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const testimonials = [
  {
    name:"John Duo",
    ceo:"CEO, Company",
    description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img:"images/testimonials-img1.jpg",

  },
  {
    name:"Vince Roy",
    ceo:"CEO, Newspaper",
    description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Excepteur sint occaecat cupidatat non proident. ",
    img:"images/testimonials-img1.jpg"
  },
  {
    name:"Vince Roy",
    ceo:"CEO, Newspaper",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud..",
    img:"images/testimonials-img2.jpg"
  },
  {
    name:"Vince Roy",
    ceo:"CEO, Newspaper",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud..",
    img:"images/testimonials-img4.jpg"
  },
]

function BestSale(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

  };
 
    return (
        <div>
              <div className="jtv-category-area">
    <div className="container">
      <div className="row">
         {/* <!-- banner --> */}
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="jtv-banner">
            <div className="upper">
              <div className="jtv-subbanner1"><a href="#"><img className="img-respo" alt="jtv-subbanner1" src="images/banner4.jpg" /></a>
                <div className="text-block">
                  <div className="text1"><a href="#"> Shoes</a></div>
                  <div className="text2"><a href="#">special offer</a></div>
                  <div className="text3"><a href="#">35% off</a></div>
                </div>
              </div>
              <div className="jtv-subbanner2"><a href="#"><img className="img-respo" alt="jtv-subbanner2" src="images/banner5.jpg" /></a>
                <div className="text-block">
                  <div className="text1"><a href="#">Handbag</a></div>
                  <div className="text2"><a href="#">Best offer</a></div>
                  <div className="text3"><a href="#">25% off</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 col-xs-12">
          <div className="jtv-single-cat">
            <div className="page-header">
              <h2>Best sale of week</h2>
            </div>
            <div className="jtv-product">
              <div className="product-img"> <a href="single_product.html"> <img src="images/a1.jpg" alt="" /> <img className="secondary-img" src="images/a1.jpg" alt="" /> </a> </div>
              <div className="jtv-product-content">
                <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                <div className="price-box"> <span className="regular-price"> <span className="price">₹ 125.00</span> </span> </div>
                <div className="jtv-product-action">
                  <div className="jtv-extra-link">
                    <div className="button-cart">
                      <button><i className="fa fa-shopping-cart"></i></button>
                    </div>
                    <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                </div>
              </div>
            </div>
           <div className="jtv-product">
              <div className="product-img"> <a href="single_product.html"> <img src="images/a2.jpg" alt="" /> <img className="secondary-img" src="images/a2.jpg" alt="" /> </a> </div>
              <div className="jtv-product-content">
                <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                <div className="price-box"> <span className="regular-price"> <span className="price">₹ 125.00</span> </span> </div>
                <div className="jtv-product-action">
                  <div className="jtv-extra-link">
                    <div className="button-cart">
                      <button><i className="fa fa-shopping-cart"></i></button>
                    </div>
                    <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                </div>
              </div>
            </div>
             <div className="jtv-product">
              <div className="product-img"> <a href="single_product.html"> <img src="images/a3.jpg" alt="" /> <img className="secondary-img" src="images/a3.jpg" alt="" /> </a> </div>
              <div className="jtv-product-content">
                <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                <div className="price-box"> <span className="regular-price"> <span className="price">₹ 125.00</span> </span> </div>
                <div className="jtv-product-action">
                  <div className="jtv-extra-link">
                    <div className="button-cart">
                      <button><i className="fa fa-shopping-cart"></i></button>
                    </div>
                    <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                </div>
              </div>
            </div>
           <div className="jtv-product">
              <div className="product-img"> <a href="single_product.html"> <img src="images/a4.jpg" alt="" /> <img className="secondary-img" src="images/a4.jpg" alt="" /> </a> </div>
              <div className="jtv-product-content">
                <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                <div className="price-box"> <span className="regular-price"> <span className="price">₹ 125.00</span> </span> </div>
                <div className="jtv-product-action">
                  <div className="jtv-extra-link">
                    <div className="button-cart">
                      <button><i className="fa fa-shopping-cart"></i></button>
                    </div>
                    <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                </div>
              </div>
            </div>
            <div className="jtv-product">
              <div className="product-img"> <a href="single_product.html"> <img src="images/z1.jpg" alt="" /> <img className="secondary-img" src="images/z1.jpg" alt="" /> </a> </div>
              <div className="jtv-product-content">
                <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                <div className="price-box"> <span className="regular-price"> <span className="price">₹ 125.00</span> </span> </div>
                <div className="jtv-product-action">
                  <div className="jtv-extra-link">
                    <div className="button-cart">
                      <button><i className="fa fa-shopping-cart"></i></button>
                    </div>
                    <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                </div>
              </div>
            </div>
            <div className="jtv-product">
              <div className="product-img"> <a href="single_product.html"> <img src="images/z2.jpg" alt="" /> <img className="secondary-img" src="images/z2.jpg" alt="" /> </a> </div>
              <div className="jtv-product-content">
                <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                <div className="price-box"> <span className="regular-price"> <span className="price">₹ 125.00</span> </span> </div>
                <div className="jtv-product-action">
                  <div className="jtv-extra-link">
                    <div className="button-cart">
                      <button><i className="fa fa-shopping-cart"></i></button>
                    </div>
                    <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
       {/* <!-- category-area end --> */}
  <div className="container">
    <div className="row"> 
      {/* <!-- daily deal section--> */}
      <div className="col-md-6">
        <div className="daily-deal-section daily-deal-parallax">
          <div className="daily-deal">
            <h3 className="deal-title">DEAL THIS WEEK</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="box-timer">
              <div className="time" data-countdown="countdown" data-date="09-30-2025-10-20-50"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6"> 
        {/* <!-- Testimonials Box --> */}
       
        <div className="testimonials ">
          <div className=" ">
            <div id="" className=" home-testimonials " >   
              <div className="slider-items  slider-width-col4" >
             <Slider {...settings}>
              {testimonials.map((item)=>(
                  <div className="holder" style={{marginTop:"-3rem"}}>
                  <p>{item.description}</p>
                  <div className="thumb"> <img src={item.img} alt="testimonials img" /> </div>
                  <strong className="name">{item.name}</strong>
                  </div>  
                ))}
             
             </Slider >
            </div>
          </div>
        </div>
        
      </div>
 
      {/* <!-- End Testimonials Box -->  */}
      
    </div>
  </div>
  {/* <!-- Latest news start --> */}
    </div>
  </div>

    );
}

export default BestSale;