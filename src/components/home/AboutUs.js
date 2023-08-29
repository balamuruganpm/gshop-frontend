import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/flexslider.css'
import '../../css/style.css'
import Slider from 'react-slick';
import Service from './Service'

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

function AboutUs(props) {


  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
   
  };
    return (
        <div>
     {/* <!-- Breadcrumbs --> */}
  
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <Link to='/'><li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li></Link>
            <Link to='/about_us'><li><strong>About Us</strong></li></Link>
          </ul>
        </div>
      </div>
    </div>
  </div>


             
  {/* <!-- Breadcrumbs End -->  */}
  
  {/* <!-- Main Container --> */}
  
  <div className="main container">
            

     <div className="about-page">
        <div className="col-xs-12 col-sm-6"> 
          
          <h1>Welcome to <span className="text_color">G Shop.Pro</span></h1>
          <p style={{ fontFamily: "Open Sans", fontWeight:"700"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus metus, convallis ut leo nec, tincidunt eleifend justo. Ut felis orci, hendrerit a pulvinar et, gravida ac lorem. Sed vitae molestie sapien, at sollicitudin tortor.<br/>
            <br/>
            Duis id volutpat libero, id vestibulum purus.Donec euismod accumsan felis, <a href="#">egestas lobortis velit tempor</a> vitae. Integer eget velit fermentum, dignissim odio non, bibendum velit.</p>
          <ul>
            <li><i className="fa fa-arrow-right"></i>&nbsp; <a href="#">Suspendisse potenti. Morbi mollis tellus ac sapien.</a></li>
            <li><i className="fa fa-arrow-right"></i>&nbsp; <a href="#">Cras id dui. Nam ipsum risus, rutrum vitae, vestibulum eu.</a></li>
            <li><i className="fa fa-arrow-right"></i>&nbsp; <a href="#">Phasellus accumsan cursus velit. Pellentesque egestas.</a></li>
            <li><i className="fa fa-arrow-right"></i>&nbsp; <a href="#">Lorem Ipsum generators on the Internet tend to repeat predefined.</a></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6" id="about_img">
          <div className="single-img-add sidebar-add-slider">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel"> 
              
              {/* <!-- Wrapper for slides --> */}
             <div>

            
              <Slider {...settings} className='about__slide'>
                <div className="item active">
                   <img src="/images/about_us_slide1.jpg" alt="slide1" />
                </div>
                
                <div className='item'>
                   <img src="/images/about_us_slide2.jpg" alt="slide2" />
                </div>

                <div  className='item'>
                   <img src="/images/about_us_slide3.jpg" alt="slide3" /> 
                </div>
             </Slider>
             </div>

     
            </div>
          </div>
        </div>
      </div>

  </div>


   
  
  <div className="our-team"> 

    
   
      
    <div className="container"> <div className="page-header">
        <h2>Our Team</h2>
      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-3 col-md-3">
          <div className="wow bounceInUp" data-wow-delay="0.2s">
            <div className="team">
              <div className="inner">
                <div className="avatar"><img src="/images/team-img01.jpg" alt="" className="img-responsive img-circle" /></div>
                <h5>Joana Doe</h5>
                <p className="subtitle">Art-director</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-3">
          <div className="wow bounceInUp" data-wow-delay="0.5s">
            <div className="team">
              <div className="inner">
                <div className="avatar"><img src="images/team-img02.jpg" alt="" className="img-responsive img-circle" /></div>
                <h5>Josefine</h5>
                <p className="subtitle">Team Leader</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-3">
          <div className="wow bounceInUp" data-wow-delay="0.8s">
            <div className="team">
              <div className="inner">
                <div className="avatar"><img src="/images/team-img03.jpg" alt="" className="img-responsive img-circle" /></div>
                <h5>Paulo Moreira</h5>
                <p className="subtitle">Senior Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-3">
          <div className="wow bounceInUp" data-wow-delay="1s">
            <div className="team">
              <div className="inner">
                <div className="avatar"><img src="/images/team-img04.jpg" alt="" className="img-responsive img-circle" /></div>
                <h5>Tom Joana</h5>
                <p className="subtitle">Digital Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 <div className="container">
    <div className="row"> 
      
      {/* <!-- daily deal section--> */}
      <div className="col-md-6">
        <div className="daily-deal-section daily-deal-parallax">
          <div className="daily-deal">
            <h3 className="deal-title">DEAL THIS WEEK</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <div className="box-timer">
              <div className="time" data-countdown="countdown" data-date="09-30-2017-10-20-50"></div>
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
 
      </div>
      {/* <!-- End Testimonials Box -->  */}
      
    </div>
  </div> 
  {/* <!-- Section: services --> */}
  <section id="service" className="text-center"> 
    
   
    
    <div className="container">
     
      <div className="row">
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-box">
              <div className="service-icon"> <i class="fa-sharp fa-solid fa-wand-magic-sparkles"></i> </div>
              <div className="service-desc">
                <h4>Web Design</h4>
                <p style={{fontFamily: 'Open Sans', fontWeight:"700"}}>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInLeft" data-wow-delay="0.2s">
            <div className="service-box">
              <div className="service-icon"> <i class="fa fa-cogs"></i> </div>
              <div className="service-desc">
                <h4>Programming</h4>
                <p style={{fontFamily: 'Open Sans', fontWeight:"700"}}>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-box">
              <div className="service-icon"><i class="fa-brands fa-instagram"></i> </div>
              <div className="service-desc">
                <h4>Photography</h4>
                <p style={{fontFamily: 'Open Sans',fontWeight:"700"}}>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInRight" data-wow-delay="0.2s">
            <div className="service-box">
              <div className="service-icon"> <i className="fa fa-search-plus"></i> </div>
              <div className="service-desc">
                <h4>SEO</h4>
                <p style={{fontFamily: 'Open Sans',fontWeight:"700"}}>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- /Section: services -->  */}
  {/* <!-- service section --> */}
  
      <Service/> 
        </div>
    );
}

export default AboutUs;