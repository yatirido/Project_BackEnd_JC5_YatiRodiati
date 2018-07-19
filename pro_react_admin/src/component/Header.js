import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component 
{
    render() 
    {
      return (
    
        <div className="" style={{marginTop: '57px'}}>
          <ul className="nav nav-tabs nav-justified menu-container">
            {/* <li><Link to = "#"><b> DASHBOARD </b> </Link></li>     */}
            <li><Link to = "/productcategories"><b> PRODUCT CATEGORIES </b> </Link></li>
            <li><Link to = "/productlist"><b> PRODUCT LIST </b></Link></li>
            <li><Link to = "/invoices"><b> INVOICES </b></Link></li>
          </ul>
        </div>
      );
    }
  }

export default Header;