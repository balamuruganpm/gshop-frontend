import React from 'react';
import Slider from "react-slick"
import '../../css/animate.css';
import '../../css/flexslider.css';
import '../../css/revolution-slider.css'

import '../../css/style.css'
import 'animate.css';
import Service from './Service';
import Products from '../products/Products';
import FeaturedProduct from '../products/FeaturedProduct';
import BestSale from '../products/BestSale';
import LatestNews from '../products/LatestNews';
import CategoryWiseProduct from '../products/CategoryWiseProduct';
import MetaData from '../layouts/MetaData';

function Home2(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className:"slick-prev:before slick-next:before",
  
    
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            }
          ]
      };
return (
        <div>
              <MetaData title={'Buy Best Products'}/>
            <Slider {...settings}>
   
               <div  style={{height:"100%",zIndex:"-1"}} >
                 
                 <img className="rev-slidebg" 
                    src='/images/slider/a1.jpg'
                    alt=""
                    style={{position:"relative"}}
                />
                 <div style={{ top:"10rem", marginLeft:"4rem", position:"absolute",display:"flex", flexDirection:"column", width:"100vw", alignItems:"center", justifyContent:"center", backgroundColor:"transparent"}}>
                  <h5 
                  className="animate__animated animate__backInDown text-center" 
                 
                  style={{fontSize: "15px", color: "#333", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase"}}
                
                  > DESIGN NEW STYLE </h5>
         
                  <h2 className=" animate__animated animate__backInRight text-center" style={{fontSize: "65px", color: "#72011c", fontWeight: "bold", textTransform: "uppercase"}}>NEW COLLECTION</h2>

                  <p className="animate__animated animate__backInUp text-center" style={{fontStyle: "italic", fontSize: "15px", color: "#666"}}>Donec vitae hendrerit arcu, sit amet faucibus nisl.Cras pretium arcu ex.</p>
                  <div className="animate__animated animate__backInLeft"  style={{zIndex: "11", maxWidth: "auto", maxHeight: "auto", marginTop:"1rem", marginLeft:"em",  whiteSpace: "nowrap"}}>
                  <button className="btn outline btn-white" style={{fontSize: "12px"}} target="_blank">View more</button>
                  <button className="btn outline btn-color" style={{fontSize:"12px", marginLeft: "15px"}}>All Shop</button>
                  </div>
                  </div>
   
                </div>
               
                <div  style={{height:"100%"}}>
                 
                 <img className="rev-slidebg" 
                    src='/images/slider/a2.jpg'
                    alt=""
                    style={{position:"relative"}}
                />
                 <div style={{ top:"5rem",position:"absolute",display:"flex", flexDirection:"column", width:"100vw", alignItems:"center", justifyContent:"center", backgroundColor:"transparent"}}>
                  <h5 
                  className="animate__animated animate__backInDown text-center" 
                 
                  style={{fontSize: "15px", color: "#fff", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase"}}
                
                  > LUXURY UNDERWARE </h5>
         
                  <h2 className=" animate__animated animate__backInRight text-center" style={{fontSize: "65px", color: "#fff", fontWeight: "bold", textTransform: "uppercase"}}>SEASON SALE <br/> 75% OFF</h2>

                  <p className="animate__animated animate__backInUp text-center" style={{fontStyle: "italic", fontSize: "15px", color: "#fff"}}>Donec vitea hendrerit arcu, sit amet faucibus nisl.<br/> Cras pretium arcu ex.</p>
                  <div className="animate__animated animate__backInLeft"  style={{zIndex: "11", maxWidth: "auto", maxHeight: "auto", marginTop:"1rem", marginLeft:"em",  whiteSpace: "nowrap"}}>
                  <button className="btn outline btn-white" style={{fontSize: "12px"}} target="_blank">See more</button>
                  <button className="btn outline btn-color" style={{fontSize:"12px", marginLeft: "15px"}}>view Shop</button>
                  </div>
                  </div>
   
                </div>
                
            </Slider>
       
            <Service/>
            <CategoryWiseProduct/>
     
            <Products/>
   
            <FeaturedProduct/>
            <BestSale/>
            <LatestNews/>
            
        </div>
    );
}

export default Home2;