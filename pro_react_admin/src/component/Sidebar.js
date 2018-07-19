import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component 
{
    render() 
    {
        return (
            <div>
  {/* SIDE BAR */}
  <div className="container-fluid text-center">    
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <ul className="menu-container nav nav-stacked">
              <li><Link to="#"><b>Dashboard</b> <span className="left-menu-label" /></Link></li>
            </ul>
            <ul className="menu-container nav nav-stacked">
              <li className><Link to="/productcategories"><b>Product Categories</b></Link></li>
            </ul>
            <ul className="menu-container nav nav-stacked">
              <li className="active"><Link to="/productlist"><b>Product Lists</b></Link></li>
            </ul>
            <ul className="menu-container nav nav-stacked">
              <li className><Link to="/invoices"><b>Invoices</b></Link></li>
            </ul>
          </div>
       
        </div></div>
   {/* END of SIDE BAR */}


     
            </div>
    );
    }
}
export default Sidebar;