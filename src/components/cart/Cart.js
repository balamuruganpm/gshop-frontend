import React from 'react';
import '../../css/style.css'
import '../../css/simple-line-icons.css';
import { Link,useNavigate} from 'react-router-dom';
import {removeItemFromCart} from '../../slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
function Cart(props) {
  const{items}= useSelector(state=>state.cartState);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();




    return (
        <div>
    <section className="main-container col1-layout">
    <div className="main container">
      <div className="col-main">
        <div className="cart">
          <div className="page-content page-order"><div className="page-title">
            <h2>Shopping Cart</h2>
          </div>
            
            
            <div className="order-detail-content">
              <div className="table-responsive">
                <table className="table table-bordered cart_summary">
                  <thead>
                    <tr>
                      <th className="cart_product">Product</th>
                      <th>Description</th>
                      <th>Avail.</th>
                      <th>Unit price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th className="action"><i className="fa fa-trash-o"></i></th>
                    </tr>
                  </thead>
                  {items.map(item=>(
                    <>
                  <tbody>
                    <tr>
                      <td className="cart_product"><Link to={`/product/${item.product}`}><img src={item.image} alt="Product" /></Link></td>
                      <td className="cart_description"><Link to={`/product/${item.product}`}><p className="product-name">{item.name}</p></Link>
                        <small><a href="#">Color : Red</a></small><br/>
                        <small><a href="#">Size : M</a></small></td>
                      <td className="availability in-stock">
                       {item.stock >0 ? <span className="label" style={{backgroundColor: item.stock > 0  ? 'green' : 'red'}}>Instock</span> : 
                       <span className="label" style={{backgroundColor: item.stock = 0  ? 'red' : 'green'}}>Nostock</span>}
                        
                      </td>
                      <td className="price"><span>₹{item.price}</span></td>
                      <td className="qty"><input className="form-control input-sm" type="text" value="1" /></td>
                      <td className="price"><span>₹ {item.price * item.quantity}</span></td>
                      <td className="action" onClick={()=> dispatch(removeItemFromCart(item.product))}><i className="icon-close"></i></td>
                    </tr>
                    
                  </tbody>
                  </>
                  ))}
                  <tfoot>
                    <tr>
                      <td colspan="2" rowspan="2"></td>
                      <td colspan="3">Total products (tax incl.)</td>
                      <td colspan="2">₹{items.reduce((acc,item)=>(acc + item.quantity * item.price),0)} </td>
                    </tr>
                    <tr>
                      <td colspan="3"><strong>Total</strong></td>
                      <td colspan="2"><strong>₹ {items.reduce((acc,item)=>(acc + item.quantity * item.price),0)} </strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="cart_navigation"> <Link to='/' className="continue-btn"><i className="fa fa-arrow-left"> </i>&nbsp; Continue shopping</Link>  <Link to='/check_out' className="checkout-btn"><i className="fa fa-check"></i> Proceed to checkout</Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   {/* <!-- service section --> */}
  
  <div className="jtv-service-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-4 col-xs-12">
          <div className="jtv-service">
            <div className="ser-icon"> <i className="fa fa-truck flip-horizontal"></i> </div>
            <div className="service-content">
              <h5>FREE SHIPPING WORLDWIDE </h5>
              <p>free ship-on oder over ₹299.00</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-12">
          <div className="jtv-service">
            <div className="ser-icon"> <i className="fa fa-mail-forward"></i> </div>
            <div className="service-content">
              <h5>MONEY BACK GUARATEE! </h5>
              <p>30 days money back guarantee!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-12">
          <div className="jtv-service">
            <div className="ser-icon"> <i className="fa fa-comments flip-horizontal"></i> </div>
            <div className="service-content">
              <h5>24/7 CUSTOMER SERVICE </h5>
              <p>We support online 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
        </div>
    );
}

export default Cart;