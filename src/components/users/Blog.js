import React from 'react';
import '../../css/blog.css';
import Service from '../home/Service'
function Blog(props) {
    return (
        <div>
              <section className="blog_post">
        <div className="container"> 
      
    
       
        {/* <!-- Center colunm--> */}
        <div className="blog-wrapper" style={{width:"100%"}}> 
      
          <div className="page-title" >
            <h2>Blog post</h2>
          </div>
          
          <ul className="blog-posts"id="blogs" >  
            <li className="post-item">
              <article className="entry"> 
                <div className="row">
                  <div className="col-sm-12">
                    <div className="entry-thumb"  > 
                    <a href="single_post.html">
                         <figure><img src="/images/blog-img1.jpg" alt="Blog" /></figure> 
                         </a> <span className="blog-date"> 
                         <a href="#"> 
                         <span className="month-date"><small>08</small>Jun</span> 
                         </a> </span></div>
                  </div>
                  <div className="col-sm-12 blog_content">
                

                      <div className="entry-meta-data">
                      <h3 className="entry-title">
                        <a href="single_post.html">Aliquam Et Metus Pharetra, Bibendum Massa</a>
                        </h3>
                         <span className="author"> <i className="fa fa-user"></i>&nbsp; By: <a href="#">Admin</a></span> 
                          <span className="comment-count"> <i className="fa fa-comment"></i>&nbsp; 3 </span>  
                     </div>
                      <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i>&nbsp; <span>(5 votes)</span></div>
                      
                      <div className="entry-excerpt">Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus. Praesent Ornare Tortor Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus.</div>
                      <div className="entry-more"> <a href="#" className="button">Read more&nbsp; <i className="fa fa-angle-double-right"></i></a> </div>
                
                  </div>
                </div>
              </article>
            </li>
            
            <li className="post-item">
              <article className="entry">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="entry-thumb"> <a href="single_post.html"> <figure><img src="/images/blog-img3.jpg" alt="Blog" /></figure>  </a><span className="blog-date"> <a href="#"> <span className="month-date"><small>12</small>Jun</span> </a> </span> </div>
                  </div>
                  <div className="col-sm-12">
                
                      <h3 className="entry-title"><a href="single_post.html">Aliquam Et Metus Pharetra, Bibendum Massa</a></h3>
                      <div className="entry-meta-data"> <span className="author"> <i className="fa fa-user"></i>&nbsp; By: <a href="#">Admin</a></span>  <span className="comment-count"> <i className="fa fa-comment"></i>&nbsp; 3 </span>   </div>
                      <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i>&nbsp; <span>(5 votes)</span></div>
                      
                      <div className="entry-excerpt">Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus. Praesent Ornare Tortor Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus.</div>
                      <div className="entry-more"> <a href="#" className="button">Read more&nbsp; <i className="fa fa-angle-double-right"></i></a> </div>
                
                  </div>
                </div>
              </article>
            </li>
            <li className="post-item">
              <article className="entry">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="entry-thumb"> <a href="single_post.html"> <figure><img src="/images/blog-img4.jpg" alt="Blog" /></figure>  </a><span className="blog-date"> <a href="#"> <span className="month-date"><small>15</small>Jan</span> </a> </span> </div>
                  </div>
                  <div className="col-sm-12">
                
                      <h3 className="entry-title"><a href="single_post.html">Aliquam Et Metus Pharetra, Bibendum Massa</a></h3>
                      <div className="entry-meta-data"> <span className="author"> <i className="fa fa-user"></i>&nbsp; By: <a href="#">Admin</a></span>  <span className="comment-count"> <i className="fa fa-comment"></i>&nbsp; 3 </span>   </div>
                      <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i>&nbsp; <span>(5 votes)</span></div>
                      
                      <div className="entry-excerpt">Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus. Praesent Ornare Tortor Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus.</div>
                      <div className="entry-more"> <a href="#" className="button">Read more&nbsp; <i className="fa fa-angle-double-right"></i></a> </div>
                
                  </div>
                </div>
              </article>
            </li>
            <li className="post-item">
              <article className="entry">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="entry-thumb"> <a href="single_post.html"> <figure><img src="/images/blog-img5.jpg" alt="Blog" /></figure>  </a> <span className="blog-date"> <a href="#"> <span className="month-date"><small>13</small>Aug</span> </a> </span></div>
                  </div>
                  <div className="col-sm-12">
                
                      <h3 className="entry-title"><a href="single_post.html">Aliquam Et Metus Pharetra, Bibendum Massa</a></h3>
                      <div className="entry-meta-data"> <span className="author"> <i className="fa fa-user"></i>&nbsp; By: <a href="#">Admin</a></span>  <span className="comment-count"> <i className="fa fa-comment"></i>&nbsp; 3 </span>   </div>
                      <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i>&nbsp; <span>(5 votes)</span></div>
                      
                      <div className="entry-excerpt">Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus. Praesent Ornare Tortor Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus.</div>
                      <div className="entry-more"> <a href="#" className="button">Read more&nbsp; <i className="fa fa-angle-double-right"></i></a> </div>
                
                  </div>
                </div>
              </article>
            </li>
            <li className="post-item">
              <article className="entry">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="entry-thumb"> <a href="single_post.html"> <figure><img src="/images/blog-img6.jpg" alt="Blog" /></figure>  </a> <span className="blog-date"> <a href="#"> <span className="month-date"><small>22</small>Jun</span> </a> </span></div>
                  </div>
                  <div className="col-sm-12">
                
                      <h3 className="entry-title"><a href="single_post.html">Aliquam Et Metus Pharetra, Bibendum Massa</a></h3>
                      <div className="entry-meta-data"> <span className="author"> <i className="fa fa-user"></i>&nbsp; By: <a href="#">Admin</a></span>  <span className="comment-count"> <i className="fa fa-comment"></i>&nbsp; 3 </span>   </div>
                      <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i>&nbsp; <span>(5 votes)</span></div>
                      
                      <div className="entry-excerpt">Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus. Praesent Ornare Tortor Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus.</div>
                      <div className="entry-more"> <a href="#" className="button">Read more&nbsp; <i className="fa fa-angle-double-right"></i></a> </div>
                
                  </div>
                </div>
              </article>
            </li>
            <li className="post-item">
              <article className="entry">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="entry-thumb"> <a href="single_post.html"> <figure><img src="/images/blog-img7.jpg" alt="Blog" /></figure>  </a><span className="blog-date"> <a href="#"> <span className="month-date"><small>28</small>Jun</span> </a> </span> </div>
                  </div>
                  <div className="col-sm-12">
                
                      <h3 className="entry-title"><a href="single_post.html">Aliquam Et Metus Pharetra, Bibendum Massa</a></h3>
                      <div className="entry-meta-data"> <span className="author"> <i className="fa fa-user"></i>&nbsp; By: <a href="#">Admin</a></span>  <span className="comment-count"> <i className="fa fa-comment"></i>&nbsp; 3 </span>   </div>
                      <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i>&nbsp; <span>(5 votes)</span></div>
                      
                      <div className="entry-excerpt">Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus. Praesent Ornare Tortor Donec Vitae Hendrerit Arcu, Sit Amet Faucibus Nisl. Cras Pretium Arcu Ex. Aenean Posuere Libero Eu Augue Condimentum Rhoncus.</div>
                      <div className="entry-more"> <a href="#" className="button">Read more&nbsp; <i className="fa fa-angle-double-right"></i></a> </div>
                
                  </div>
                </div>
              </article>
            </li>
          </ul>
          <div className="sortPagiBar" id="blog_pages"><div className="pagination-area" style={{visibility: "visible"}}>
            <ul>
              <li><a className="active" href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
            </ul>
          </div>
            
          </div>
        </div>
        {/* <!-- ./ Center colunm -->  */}
   
    </div>
  </section>
  {/* <!-- Main Container End --> */}
  {/* <!-- service section --> */}
  <Service/>

        </div>
    );
}

export default Blog;