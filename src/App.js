import Header1 from './components/layouts/Header1'
import Footer from './components/layouts/Footer'
import { Routes,Route } from 'react-router-dom';
import Home from './components/home/Home'
import SingleProduct from './components/products/SingleProduct';

import MyAccount from './components/users/MyAccount';
import Blog from './components/users/Blog'
import Cart from './components/cart/Cart'
import WishList from './components/cart/WishList'
import AboutUs from './components/home/AboutUs'
import ContactUs from './components/home/ContactUs'
import Shop from './components/home/Shop'
import Register from './components/users/Register';
import Profile from './components/users/Profile';
import CheckOut from './components/cart/CheckOut';
import Adminpanel from './components/admin/Adminpanel';
import Products from './components/admin/products/Products'
import Dashboard from './components/admin/Dashboard';
import Customers from './components/admin/customers/Customers';
import Order from './components/admin/orders/Order'
import Category from './components/admin/categories/Category';
import AddCategory from './components/admin/categories/AddCategory';
import OrdersReport from './components/admin/orders/OrdersReport';
import "react-bootstrap/dist/react-bootstrap.min.js";


function App() {

  return (
    <div className="App">
      <Adminpanel/>

    {/* <Header1/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about_us" element={<AboutUs/>}/>
      <Route path="/contact_us" element={<ContactUs/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/my_account" element={<MyAccount/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/check_out" element={<CheckOut/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
    </Routes>  
    <Footer/> */}
     <Routes>
     <Route path="/" element={<Adminpanel/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/orders" element={<Order/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/addcategory" element={<AddCategory/>}/>
      <Route path="/ordersreport" element={<OrdersReport/>}/>
       </Routes>

 
    </div>
  );
}

export default App;
