import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';
// import Sidebar from './Sidebar';

class ProductCategories extends Component 
{
    render() 
    {
        return (
      
<div>
  <Navbar />
  <Header />

      {/* MAIN BAR */}
      <div className="form-container"> 
      <br/>
        <h3>PRODUCT CATEGORIES</h3>
        <h4>Last Update: <span>1 June 2018</span></h4>
        <table className="timetable_sub">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Categories</th>
              <th>Description</th>
              <th>Product Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="rem1">
              <td className="invert">1</td>
              <td className="invert"><Link to="/productcategories">Crossbody Bags</Link></td>
              <td className="invert">Including sling bags and messenger bags with various sizes</td>
              <td className="invert">20</td>
              <td className="invert">
                <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
              </td>
            </tr>
            <tr className="rem1">
              <td className="invert">2</td>
              <td className="invert"><Link to="/productcategories">Tote Bags</Link></td>
              <td className="invert">Including sling bags and messenger bags with various sizes</td>
              <td className="invert">12</td>
              <td className="invert">
                <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
              </td>
            </tr>
            <tr className="rem1">
              <td className="invert">3</td>
              <td className="invert"><Link to="#">Satchel Bags</Link></td>
              <td className="invert">Including sling bags and messenger bags with various sizes</td>
              <td className="invert">15</td>
              <td className="invert">
                <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
              </td>
            </tr>
            <tr className="rem1">
              <td className="invert">4</td>
              <td className="invert"><Link to="#">Wallets</Link></td>
              <td className="invert">Including sling bags and messenger bags with various sizes</td>
              <td className="invert">10</td>
              <td className="invert">
                <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
              </td>
            </tr>
            <tr className="rem1">
              <td className="invert">5</td>
              <td className="invert"><Link to="#">New Arrivals</Link></td>
              <td className="invert">Including sling bags and messenger bags with various sizes</td>
              <td className="invert">5</td>
              <td className="invert">
                <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
              </td>
            </tr>
            <tr className="rem1">
              <td className="invert">6</td>
              <td className="invert"><Link to="#">On SALE</Link></td>
              <td className="invert">Including sling bags and messenger bags with various sizes</td>
              <td className="invert">8</td>
              <td className="invert">
                <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <div className>
          <button type="submit" className="btn btn-lg btn-primary">Add New Category</button>
          <br/><br/>
        </div>
      </div>
  
       
</div>

);
}
}
export default ProductCategories;