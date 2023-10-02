import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProductByFilter } from '../../actions/filterAction';
import { Link } from 'react-router-dom';

function Numismatist(props) {

    const{filter = []}=useSelector((state)=>state.filterState)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getProductByFilter())

    },[dispatch])
    return (
        <div className="container" style={{width:"120%"}}>
         <div className="special-products">
            <div className="page-header">
           <h2>NUMISMATIST</h2>
          </div>
      <div className="special-products-pro" >
        <div className="slider-items-products">

          <div id="special-products-slider" className="product-flexslider hidden-buttons">
            <div className="category-grid">
   
              {filter && filter.map(product =>(
                <div className="product-item">
               
                <div className="item-inner" style={{width:"250px",height:"330px",marginLeft:"1rem"}}>
                  <div className="product-thumb has-hover-img"  > 
                   <Link to={`/product/${product._id}`}> <figure style={{border: "1px #eee solid"}}>{product.images?.length > 0 && <> <img src={product.images[0]?.image} alt="" /> </> }</figure></Link>   
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
            
            </div>
          </div>
        </div>
      </div>
      </div>
        </div>
    );
}

export default  Numismatist;