import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

class DeliveryAddress extends Component 
{
    render() 
    {
        return (
        
          <div>
            <Navbar />
            <Header />
{/* CONTENT - Account -Delivery Address */}
<div className="container-fluid text-center">    
<div className="row content">
  <div className="col-sm-3 sidenav">
    <ul className="menu-container nav nav-stacked">
      <li><Link to="/userinfo"><b>User Information</b> <span className="left-menu-label" /></Link></li>
    </ul>
    <ul className="menu-container nav nav-stacked">
      <li className><Link to="/transactionhistory"><b>Transaction History</b></Link></li>
    </ul>
    <ul className="menu-container nav nav-stacked">
      <li className="active"><Link to="/deliveryaddress"><b>Delivery Address</b></Link></li>
    </ul>
  </div>
  <div className="col-sm-9 form-container">    
    <form method="POST" action="/account/info/save_address">
      <div className="row field">
        <div className>
          <h3>Delivery Address</h3>
          <p style={{textAlign: 'left'}}>For every purchase, the following address will be the default delivery address.</p>
          <br />
        </div>
      </div>
      <div className="row field">
        <div className="col-sm-8">
          <div className="row">
            <p className="col-sm-3 field-name">Full Name</p>
            <div className="col-sm-9">
              <input name="name" type="password" className="form-control" placeholder="Enter full name" />
            </div>
          </div>
        </div>
      </div>
      <div className="row field">
        <div className="col-sm-8">
          <div className="row">
            <p className="col-sm-3 field-name">Address</p>
            <div className="col-sm-9">
              <input name="street" type="text" className="form-control" placeholder="Enter building name, street name, number" />
            </div>
          </div>
        </div>
      </div>
      <div className="row field">
        <div className="col-sm-8">
          <div className="row">
            <p /><div className="col-sm-9 col-sm-offset-3">
              <input name="city" type="text" className="form-control" placeholder="City or District" />
            </div><p />
          </div>
        </div>
      </div>
      <div className="row field">
        <div className="col-sm-8">
          <div className="row">
            <p /><div className="col-sm-9 col-sm-offset-3">
              <input name="province" type="text" className="form-control" placeholder="Province" />
            </div><p />
          </div>
        </div>
      </div>
      <div className="row field">
        <div className="col-sm-8">
          <div className="row">
            <p className="col-sm-3 field-name">Post Code</p>
            <div className="col-sm-9">
              <input name="postcode" type="text" className="form-control" placeholder="Enter post code" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row field">
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3 col-xs-12 submit-button">
              <input type="submit" className="btn btn-primary-f" defaultValue="Save Address" />
            </div>
          </div>
        </div>
      </div>
      <br />
    </form>
  </div>
</div>
</div>
<Footer />
</div>
 );
}
}
export default DeliveryAddress;