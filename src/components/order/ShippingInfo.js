import React,{useState} from 'react';
import { countries } from 'countries-list';
import { useNavigate} from 'react-router-dom';
import {  saveShippingInfo} from '../../slice/cartSlice'
import { useSelector,useDispatch } from 'react-redux';
function ShippingInfo(props) {


    const {shippingInfo = {} } = useSelector(state=>state.cartState);

    const [firstName,setFirstname] =useState( shippingInfo.firstName);
    const [lastName,setLastname] =useState( shippingInfo.lastName);
    const [address,setAddress] =useState( shippingInfo.address);
    const [city,setCity] =useState( shippingInfo.city);
    const [phoneNo,setphoneNo] =useState( shippingInfo.phoneNo);
    const [postalCode,setPostalCode] =useState( shippingInfo.postalCode);
    const [country,setCountry] =useState(shippingInfo.country);
    const [state,setState] =useState( shippingInfo.state);
    const [email,setEmail] =useState( shippingInfo.email);
    const [companyName,setCompanyname] =useState( shippingInfo.companyName);
    const countryList = Object.values(countries);
    const[showContainer, setShowcontainer] = useState(true)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShippingInfo({firstName, lastName, address,city,phoneNo,postalCode,country,state,email,companyName}))
        // navigate('/payment')
        // if(isAuthenticated){
        //   navigate('/payment')
       
        // }else{
        //   toast('Please Login To Pay',{
        //     position:toast.POSITION.TOP_RIGHT,
            
          
        //   })
        // }
    }

    return (
        <div>
            {showContainer && 
              <div className="box-border">
                <form>
                   <ul>
                    <li className="row">
                        <div className="col-sm-6">
                            <label for="first_name" className="required">First Name</label>
                            <input type="text"  value={firstName} onChange={(e)=>setFirstname(e.target.value)} name="name" className="input form-control" id="first_name"/>
                        </div>
                        {/* <!--/ [col] --> */}
                        <div className="col-sm-6">
                            <label for="last_name" className="required">Last Name</label>
                            <input type="text"  value={lastName} onChange={(e)=>setLastname(e.target.value)} name="lastname"  className="input form-control" id="last_name"/>
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}
                    <li className="row">
                        <div className="col-sm-6">
                            <label for="company_name">Company Name</label>
                            <input type="text"  value={companyName} onChange={(e)=>setCompanyname(e.target.value)} name="companyname"  className="input form-control" id="company_name"/>
                        </div>
                        {/* <!--/ [col] --> */}
                        <div className="col-sm-6">
                            <label for="email_address" className="required">Email Address</label>
                            <input type="text" className="input form-control" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"  id="email_address" />
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}
                    <li className="row"> 
                        <div className="col-sm-9">
                            <label for="address" className="required">Address</label>
                            <input type="text" className="input form-control" value={address} onChange={(e)=>setAddress(e.target.value)} name="address" id="address"/>
                        </div>
                        {/* <!--/ [col] --> */}

                    </li>
                    {/* <!-- / .row --> */}

                    <li className="row">

                        <div className="col-sm-6">
                            
                            <label for="city" className="required">City</label>
                            <input className="input form-control" type="text"  value={city} onChange={(e)=>setCity(e.target.value)} name="city"  id="city" />

                        </div>
                        {/* <!--/ [col] --> */}

                        <div className="col-sm-6">
                            <label className="required"  >State/Province</label>
                                <select className="input form-control" value={state} onChange={(e)=>setState(e.target.value)} name="state" >
                                    <option value={state}>Alabama</option>
                                    <option value={state}>Illinois</option>
                                    <option value={state}>Kansas</option>
                            </select>
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}

                    <li className="row">

                        <div className="col-sm-6">

                            <label for="postal_code" className="required">Zip/Postal Code</label>
                            <input className="input form-control" type="text" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} name="postcode" id="postal_code"/>
                        </div>
                        {/* <!--/ [col] --> */}

                        <div  className="col-sm-6">
                            <label className="required">Country</label>
                            <select className="input form-control"  value={country} onChange={(e)=>setCountry(e.target.value)} >
                            { countryList.map ( (country,i)=>(
                          <option value={country.name} key={i} required>{country.name}</option>
                      ))}
                            </select>
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}
                    <li className="row">
                        <div className="col-sm-6">
                            <label for="telephone" className="required">Telephone</label>
                            <input className="input form-control" type="text"  value={phoneNo} onChange={(e)=>setphoneNo(e.target.value)} name="phone"  id="telephone"/>
                        </div>
                        {/* <!--/ [col] --> */}

                        <div className="col-sm-6">
                            <label for="fax">Fax</label>
                            <input className="input form-control" type="text" name="" id="fax"/>
                        </div>
                        {/* <!--/ [col] --> */}

                    </li>
                    {/* <!--/ .row --> */}

                    <li className="row">
                        <div className="col-sm-6">
                            <label for="password" className="required">Password</label>
                            <input className="input form-control" type="password" name="" id="password" />
                        </div>
                            {/* !--/ [col] --> */}

                        <div className="col-sm-6">
                            <label for="confirm" className="required">Confirm Password</label>
                            <input className="input form-control" type="password" name="" id="confirm"/>
                        </div>
                        {/* <!--/ [col] --> */}
                    </li>
                    {/* <!--/ .row --> */}
                    <li  onClick={()=>setShowcontainer(!showContainer)}>
                        <button className="button" onClick={submitHandler}><i className="fa fa-angle-double-right"></i>&nbsp; <span>Continue</span></button>
                    </li>
                   </ul>
                </form>
              </div>
            }
        </div>
    );
}

export default ShippingInfo;