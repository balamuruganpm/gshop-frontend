import React,{useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
// import axios from 'axios'
// import Card from './Card'

import {getAdminCategories} from '../../actions/categoryAction';

import {getProductByFilter} from '../../actions/filterAction'

function CategoryWiseProduct(props) {
 


    const{categories = []}=useSelector((state) => state.categoryState)   
    const{filterproducts = []}=useSelector((state)=>state.filterState)
    // const [text, setText] =useState('');
    const[categoryIds, setCategoryIds] = useState([]);

    const dispatch = useDispatch();




    useEffect(()=>{
      dispatch(getAdminCategories);

    },[dispatch])




 

  
    // const handleSearch = e =>{
    //     setCategoryIds(e.target.value);
    //     dispatch(getProductByFilter({ type: 'category', query:e.target.value}))
    // };

    const handleCategory = e => {
      resetState();
  
      const currentCategoryChecked = e.target.value;
      const allCategoriesChecked = [...categoryIds];
      const indexFound = allCategoriesChecked.indexOf(currentCategoryChecked);
  
      let updatedCategoryIds;
      if (indexFound === -1) {
        // add
        updatedCategoryIds = [...categoryIds, currentCategoryChecked];
        setCategoryIds(updatedCategoryIds);
      } else {
        // remove
        updatedCategoryIds = [...categoryIds];
        updatedCategoryIds.splice(indexFound, 1);
        setCategoryIds(updatedCategoryIds);
      }
  
      dispatch(
        getProductByFilter({ type: 'category', query: updatedCategoryIds })
      );
    };
   

    const resetState = () =>
    {
  
    setCategoryIds([])
    }
    return (
    <>
        <div className="container" style={{width:"120%"}}>

        {/* <div className="special-products">
           <div className="page-header">
             <h2>Categories</h2>
           </div>
    
           <div className='category-grid'>

              <div  className='category_area'>

            <div id="check_category"> <img src={categories[0]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[0]?.category}</h3><input type="checkbox" value={categories[0]?._id}   checked={categoryIds.includes(categories[0]?._id)} onChange={handleCategory}/></div>

              </div>
              <div className='category_area'>

              <Link to='/indoor_plants'><div id="check_category"> <img src={categories[1]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[1]?.category}</h3><input type="checkbox" value={categories[1]?._id} checked={categoryIds.includes(categories[1]?._id)}  onChange={handleCategory}/></div></Link> 
                   
              </div>

              <div className='category_area'>

              <Link to='/numismatist'><div id="check_category"> <img src={categories[2]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[2]?.category}</h3><input type="checkbox" value={categories[2]?._id} defa={categoryIds.includes(categories[2]?._id)} onChange={handleCategory}/></div></Link> 

              </div>

              <div  className='category_area'>

              <Link to='/his_her_essentials'><div id="check_category"> <img src={categories[3]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[3]?.category}</h3><input type="checkbox"  value={categories[3]?._id} checked={categoryIds.includes(categories[3]?._id)}  onChange={handleCategory} /></div></Link> 

              </div>

              <div className='category_area'>

              <Link to='/utility_product'><div id="check_category"> <img src={categories[4]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[4]?.category}</h3><input type="checkbox" value={categories[4]?._id} checked={categoryIds.includes(categories[4]?._id)}  onChange={handleCategory}/></div></Link> 

              </div>
          </div>
        </div> */}

<div className='border-top border-bottom bg-light p-3'>
        <select onChange={handleCategory}  className='form-control'>
						{categories &&
							categories.map(c => (
                    <option value={c._id} key={c._id} onClick={categoryIds.includes(c._id)} >{c.category}</option>	
							))}

               </select>
					</div>
		
        </div>
       
        <div className="container" style={{width:"120%"}}>
         <div className="special-products">
            <div className="page-header">
           <h2>GIFTS</h2>
          </div>
      <div className="special-products-pro" >
        <div className="slider-items-products">

          <div id="special-products-slider" className="product-flexslider hidden-buttons">
            <div className="category-grid">
   
              {filterproducts&& filterproducts.map(product =>(
                <div className="product-item">
               
                <div className="item-inner" style={{width:"250px",height:"330px",marginLeft:"1rem"}}>
                  <div className="product-thumb has-hover-img"  > 
                   <Link to={`/product/${product._id}`}> <figure style={{border: "1px #eee solid"}}>{product.images.length > 0 && <> <img src={product.images[0]?.image} alt="" /> <img className="hover-img" src={product.hoverimages[0]?.image} alt="" /> </> }</figure></Link>   
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
    </>
    );
}

export default CategoryWiseProduct;
