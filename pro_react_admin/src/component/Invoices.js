import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';

class Invoices extends Component 
{
    render() 
    {
      return (
      
      <div>
        <Navbar />
        <Header />

 <div className="form-container">    
        <form className="navbar-form navbar-right" action="/action_page.php">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search Invoice" name="search" />
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit">
                <i className="glyphicon glyphicon-search" />
              </button>
            </div>
          </div>
        </form>
        <div className="ads-grid_shop">
          <div className="shop_inner_inf">
            <div className="privacy about">
              <h3>INVOICES</h3>
              <div className="checkout-right">
                <h4>Period: <span>26 - 28 May 2018</span></h4>
                <table className="timetable_sub">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Invoice #</th>
                      <th>Customer</th>
                      <th>Destination</th>
                      <th>Transaction Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="rem1">
                      <td className="invert">1</td>
                      <td className="invert"><Link to="singleinvoice">10000120</Link></td>
                      <td className="invert">Sandy A.</td>
                      <td className="invert">Jakarta</td>
                      <td className="invert">26 May 2018</td>
                      <td className="invert">Rp. 2,750,000</td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">2</td>
                      <td className="invert"><Link to="singleinvoice">10000121</Link></td>
                      <td className="invert">Lidya M.</td>
                      <td className="invert">Bandung</td>
                      <td className="invert">26 May 2018</td>
                      <td className="invert">Rp. 1,550,000</td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">3</td>
                      <td className="invert"><Link to="singleinvoice">10000122</Link></td>
                      <td className="invert">Christina S</td>
                      <td className="invert">Jakarta</td>
                      <td className="invert">27 May 2018</td>
                      <td className="invert">Rp. 2,750,000</td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">4</td>
                      <td className="invert"><Link to="singleinvoice">10000123</Link></td>
                      <td className="invert">Hani M</td>
                      <td className="invert">Denpasar</td>
                      <td className="invert">27 May 2018</td>
                      <td className="invert">Rp. 2,750,000</td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">5</td>
                      <td className="invert"><Link to="singleinvoice">10000124</Link></td>
                      <td className="invert">Alfian</td>
                      <td className="invert">Solo</td>
                      <td className="invert">27 May 2018</td>
                      <td className="invert">Rp. 1,500,000</td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">6</td>
                      <td className="invert"><Link to="singleinvoice">10000125</Link></td>
                      <td className="invert">Bebeb</td>
                      <td className="invert">Jakarta</td>
                      <td className="invert">28 May 2018</td>
                      <td className="invert">Rp. 2,750,000</td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">7</td>
                      <td className="invert"><Link to="singleinvoice">10000126</Link></td>
                      <td className="invert">Aminah</td>
                      <td className="invert">Bandung</td>
                      <td className="invert">28 May 2018</td>
                      <td className="invert">Rp. 3,250,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  
</div>

);
}
}
export default Invoices;