import React,{useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {getAdminCategories} from '../../actions/categoryAction';
import {getProductByFilter} from '../../actions/filterAction'


function CategoryWiseProduct(props) {
 

    const[categoryIds, setCategoryIds] = useState([]);
    const dispatch = useDispatch();
    const{categories = []}=useSelector((state) => state.categoryState)   

    useEffect(()=>{
      dispatch(getAdminCategories);
    },[dispatch])



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

        <div className="special-products">
           <div className="page-header">
             <h2>Categories</h2>
           </div>
    
           <div className='category-grid'>

              <div  className='category_area'>

             <Link to ="/gift"> <div id="check_category"> <img src={categories[0]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[0]?.category}</h3><input type="checkbox" value={categories[0]?._id}   checked={categoryIds.includes(categories[0]?._id)} onChange={handleCategory}/></div></Link>

              </div>
              <div className='category_area'>

              <Link to='/numismatist '><div id="check_category"> <img src={categories[1]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[1]?.category}</h3><input type="checkbox" value={categories[1]?._id} checked={categoryIds.includes(categories[1]?._id)}  onChange={handleCategory}/></div></Link> 
                   
              </div>

              <div className='category_area'>

              <Link to='/indoor_plants'><div id="check_category"> <img src={categories[2]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[2]?.category}</h3><input type="checkbox" value={categories[2]?._id} defa={categoryIds.includes(categories[2]?._id)} onChange={handleCategory}/></div></Link> 

              </div>

              <div  className='category_area'>

              <Link to='/his_her_essentials'><div id="check_category"> <img src={categories[3]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[3]?.category}</h3><input type="checkbox"  value={categories[3]?._id} checked={categoryIds.includes(categories[3]?._id)}  onChange={handleCategory} /></div></Link> 

              </div>

              <div className='category_area'>

              <Link to='/utility_product'><div id="check_category"> <img src={categories[4]?.images[0]?.image}    alt=""/><h3 className='categoryname'>{categories[4]?.category}</h3><input type="checkbox" value={categories[4]?._id} checked={categoryIds.includes(categories[4]?._id)}  onChange={handleCategory}/></div></Link> 

              </div>
          </div>
        </div>
     </div>
    </>
    );
}

export default CategoryWiseProduct;