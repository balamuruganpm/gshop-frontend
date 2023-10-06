import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import { addCartItem } from "../../actions/cartAction";
import { addWishlistItem } from "../../actions/cartAction";


function Products(props) {
    const {products =[], loading, error} = useSelector((state) => state.productsState);
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);
    const [wishlistquantity,setWishlistQuantity] = useState(1);
   
 
    useEffect(()=>{
      if(error){
        return toast.error(error,{
         position: toast.POSITION.BOTTOM_CENTER
        })
      }
  

    dispatch(getProducts) 
   }, [error, dispatch])



    return (

            
<div className="container" style={{width:"120%"}}>
    <div className="special-products">
      <div className="page-header">
        <h2>special products</h2>
      </div>
      <div className="special-products-pro" >
        <div className="slider-items-products">
          <div id="special-products-slider" className="product-flexslider hidden-buttons">
            <div className="product-grid">
              { products && products.map(product =>(
               <div className="product-item" key={product._id}>
                <div class="item-inner">
                  <div class="product-thumb has-hover-img"> <Link to={`/product/${product._id}`}>
                    {product.images?.length > 0 && 
                    <> 
                    <img src={product.images[0]?.image}  alt="" /> 
                    <img class="hover-img" src={product.images[1]?.image}  alt="" />
                      </>
                    }
                    </Link>
                    <div class="pr-info-area animated animate2"><a class="quick-view"><i class="fa fa-search"><span>Quick view</span></i></a> <a  class="wishlist"><i class="fa fa-heart" 
                        onClick={()=>
                        { dispatch(addWishlistItem(product._id,quantity))
                          
                            toast('Item Added in Wishlist',{
                              type:'success',
                              position:toast.POSITION.TOP_RIGHT
                            })
        
                        }}><span>Wishlist</span></i>
                        </a> <a href="compare.html" class="compare"><i class="fa fa-exchange"><span>Compare</span></i></a> </div>
                  </div>
            

                  <div className="item-info" >
                    <div className="info-inner" >
                  
                      <div className="item-content item-details">
                      <Link to={`/product/${product._id}`}> <div className="item-title">
                        <h4><a title="Ipsums Dolors Untra" href="single_product.html">{product.name}</a></h4>
                      </div></Link>
                      <div className='ratings mt-auto'>
                         <div className='rating-outer'>
                         <div className='rating-inner'  style={{width: `${product.ratings / 5 * 100}%` }}></div>
                         </div>
                     </div>                        
                      <div className="item-price">
                          <div className="price-box"> <span className="regular-price"> <span className="price">₹ {product.price}</span> </span> </div>
                        </div>
                        <div className="pro-action">
                          <button type="button"  disabled={product.stock === 0 ? true : false} onClick={()=>
                { dispatch(addCartItem(product._id,quantity))
                  
                    toast('Cart Item Added',{
                      type:'success',
                      position:toast.POSITION.TOP_RIGHT
                    })

                }} className="add-to-cart-mt"> <i className="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
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

export default Products;