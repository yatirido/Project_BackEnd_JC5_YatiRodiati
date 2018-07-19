import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style/style.css';

class Header extends Component 
{
    render() 
    {
        return (
            <div>
                <div>
        {/* HEADER - Logo */}
        <div>
          <div className="hidden-xs">
            <Link to="/"><center><img src="images/LOGO_FIONA_small.jpg" height="10%" alt="Store Logo" className="img-responsive" /></center></Link>
          </div>
        </div>
        {/* HEADER - Menu Bar for Product Categories */}
        <div id="bottomheader">
          <ul className="nav nav-tabs nav-justified">
            <li><Link to="/" className="brown">HOME</Link></li>    
            <li><Link to="/products" className="brown">PRODUCTS</Link></li>
            <li><Link to="/" className="brown">BLOG</Link></li>
            <li><Link to="/" className="brown">ABOUT US</Link></li>
            <li><Link to="/" className="brown">CUSTOMER CARE</Link></li>
          </ul>
        </div>
      </div>
                
    </div>
    );
    }
}
export default Header;