
import { Routes,Route } from 'react-router-dom';
import Home from './components/home/Home'
import SingleProduct from './components/products/SingleProduct';
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import UserLogin from './components/users/UserLogin';
import Blog from './components/users/Blog'
import Cart from './components/cart/Cart'
import WishList from './components/cart/WishList'
import AboutUs from './components/home/AboutUs'
import ContactUs from './components/home/ContactUs'
import Shop from './components/home/Shop'
import Register from './components/users/Register';
import Profile from './components/users/Profile';
import CheckOut from './components/cart/CheckOut';
import Products from './components/admin/products/Products'
import AddProduct from './components/admin/products/AddProductDetail'
import Dashboard from './components/admin/Dashboard';
import Customers from './components/admin/customers/Customers';
import Order from './components/admin/orders/Order'
import Category from './components/admin/categories/Category';
import AddCategory from './components/admin/categories/AddCategory';
import UpdateCategory from './components/admin/categories/UpdateCategory';
import OrdersReport from './components/admin/orders/OrdersReport';
import Gift from './components/Productcategory/Gift';
import Numismatist from './components/Productcategory/Numismatist';
import HisAndHerEssentials from './components/Productcategory/HisAndHerEssentials';
import UtilityProducts from './components/Productcategory/UtilityProducts'
import IndoorPlants from './components/Productcategory/IndoorPlants';
import UpdateProduct from './components/admin/products/UpdateProduct';
import "react-bootstrap/dist/react-bootstrap.min.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (

  
    <div className="App">  
    <Header/>
      <ToastContainer theme="dark"/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about_us" element={<AboutUs/>}/>
      <Route path="/contact_us" element={<ContactUs/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/my_account" element={<UserLogin/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/check_out" element={<CheckOut/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
      <Route path="/gift" element={<Gift/>}/>
      <Route path="/indoor_plants" element={<IndoorPlants/>}/>
      <Route path="/numismatist" element={<Numismatist/>}/>
      <Route path="/utility_product" element={<UtilityProducts/>}/>
      <Route path="/his_her_essentials" element={<HisAndHerEssentials/>}/>
      <Route path="/admin/product/updateproduct/:id" element={<UpdateProduct/>}/>
    </Routes>  
   


     <Routes>
   
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/orders" element={<Order/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/addcategory" element={<AddCategory/>}/>
      <Route path="/admin/category/updatecategory/:id" element={<UpdateCategory/>}/>
      <Route path="/ordersreport" element={<OrdersReport/>}/>
      </Routes>

      <Footer/> 
      </div>


  );
}

export default App;
