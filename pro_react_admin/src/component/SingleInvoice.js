import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';

class SingleInvoice extends Component 
{
    render() 
    {
        return (
      
<div>
  <Navbar />
  <Header />

   {/* MAIN BAR */}
   <div className="form-container">    
        {/* TRANSACTION MENU TYPES (Updaid, Unsent, Finish, Cancelled) */}
    <div className="transaction-menu">
      <ul className="nav nav-tabs nav-justified">
        <li><Link to="/invoices" className="black">Unpaid</Link></li>
        <li><Link to="/invoices" className="black">Unsent</Link></li>
        <li className="active"><Link to="/invoices" className="black">Finished</Link></li>
        <li><Link to="/invoices" className="black">Unreceived</Link></li>
        <li><Link to="/invoices" className="black">Cancelled</Link></li>
      </ul>
      
          {/* List of Finished Transaction based on transaction ID and Date */}
          {/* List #1 */}
     <div className>
        <div className="ads-grid_shop">
          <div className="shop_inner_inf">
            <div className="privacy about">
              <h3>Transaction ID: <span>#10000120</span></h3>
              <div className="checkout-right">
                <h4>Transaction Date: <span>28 May 2018</span></h4>
                <table className="timetable_sub">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Sub Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="rem1">
                      <td className="invert">1</td>
                      <td className="invert-image"><Link to="#"><img src="images/Clutch_Emma_RFID_Brown_1.jpg" alt=" " className="img-responsive" /></Link></td>
                      <td className="invert">
                        <div className="quantity">
                          <div className="quantity-select">
                            <div className="entry value"><span>1</span></div>
                          </div>
                        </div>
                      </td>
                        <td className="invert">Emma RFID Brown Clutch</td>
                        <td className="invert">Rp. 750,000</td>
                        <td className="invert">Rp. 750,000</td>
                      </tr>
                      <tr className="rem2">
                        <td className="invert">2</td>
                        <td className="invert-image"><Link to="#"><img src="images/Crossbody_Elle_1.jpg" alt=" " className="img-responsive" /></Link></td>
                        <td className="invert">
                          <div className="quantity">
                            <div className="quantity-select">
                              <div className="entry value"><span>1</span></div>
                            </div>
                          </div>
                        </td>
                        <td className="invert">Elle Crossbody Bag</td>
                        <td className="invert">Rp. 900,000</td>
                        <td className="invert">Rp. 900,000</td>
                      </tr>
                      <tr className="rem3">
                        <td className="invert">3</td>
                        <td className="invert-image"><Link to="#"><img src="images/Tote_Fiona_1.jpg" alt=" " className="img-responsive" /></Link></td>
                        <td className="invert">
                          <div className="quantity">
                            <div className="quantity-select">
                              <div className="entry value"><span>1</span></div>
                            </div>
                          </div>
                        </td>
                          <td className="invert">Fiona Tote Bag</td>
                          <td className="invert">Rp. 1,100,000</td>
                          <td className="invert">Rp. 1,100,000</td>
                      </tr>
                      <tr className="rem4">
                        <td className="invert" colSpan={5} style={{textAlign: 'right'}}><strong>Total: </strong></td>
                        <td className="invert"><strong>Rp. 2,750,000</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>

);
}
}
export default SingleInvoice;