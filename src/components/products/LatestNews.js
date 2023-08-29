import React from 'react';

function LatestNews(props) {
    return (
        <div>
              <div className="container">
    <div id="latest-news" className="news">
      <div className="page-header">
        <h2>Latest news</h2>
      </div>
      
      <div className="slider-items-products">
        <div id="latest-news-slider" className="product-flexslider hidden-buttons">
          <div className="slider-items slider-width-col6 comment-section" > 
            
            {/* <!-- Item --> */}
            <div className="item">
              <div className="jtv-single-blog">
                <div className="blog-image"> <a href=""> <img src="images/blog-img1.jpg" alt="Blog" /> </a> <span className="blog-date"> <a href="#"> <span className="month-date"><small>20</small>Feb</span> </a> </span> </div>
                <div className="blog-content">
                  <div className="title-desc"> <a href="single_post.html">
                    <h4>Sed do eiusmod sit amet</h4>
                    </a>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,</p>
                  </div>
                  <div className="blog-info"> <span className="author-name"> <i className="fa fa-user"></i>By <a href="#">John Doe</a> </span> <span className="comments-number"> <i className="fa fa-comment"></i>20 Comment </span> </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item -->  */}
            
            {/* <!-- Item --> */}
            <div className="item">
              <div className="jtv-single-blog">
                <div className="blog-image"> <a href=""> <img src="images/blog-img2.jpg" alt="Blog" /> </a> <span className="blog-date"> <a href="#"> <span className="month-date"><small>15</small>Mar</span> </a> </span> </div>
                <div className="blog-content">
                  <div className="title-desc"> <a href="single_post.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    </a>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,</p>
                  </div>
                  <div className="blog-info"> <span className="author-name"> <i className="fa fa-user"></i>By <a href="#">Vince Roy</a> </span> <span className="comments-number"> <i className="fa fa-comment"></i>20 Comment </span> </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item -->  */}
            {/* <!-- Item --> */}
            <div className="item">
              <div className="jtv-single-blog">
                <div className="blog-image"> <a href=""> <img src="/images/blog-img3.jpg" alt="Blog" /> </a> <span className="blog-date"> <a href="#"> <span className="month-date"><small>30</small>Aug</span> </a> </span> </div>
                <div className="blog-content">
                  <div className="title-desc"> <a href="single_post.html">
                    <h4>Sed do eiusmod sit amet</h4>
                    </a>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,</p>
                  </div>
                  <div className="blog-info"> <span className="author-name"> <i className="fa fa-user"></i>By <a href="#">John Doe</a> </span> <span className="comments-number"> <i className="fa fa-comment"></i>20 Comment </span> </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item -->  */}
            {/* <!-- Item --> */}
            <div className="item">
              <div className="jtv-single-blog">
                <div className="blog-image"> <a href=""> <img src="/images/blog-img4.jpg" alt="Blog" /> </a> <span className="blog-date"> <a href="#"> <span className="month-date"><small>08</small>Jun</span> </a> </span> </div>
                <div className="blog-content">
                  <div className="title-desc"> <a href="single_post.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    </a>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,</p>
                  </div>
                  <div className="blog-info"> <span className="author-name"> <i className="fa fa-user"></i>By <a href="#">Vince Roy</a> </span> <span className="comments-number"> <i className="fa fa-comment"></i>20 Comment </span> </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item -->  */}
            
          </div>
        </div>
      </div>
    </div>
   </div>
        </div>
    );
}

export default LatestNews;