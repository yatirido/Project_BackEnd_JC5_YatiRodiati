import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

class TransactionHistory extends Component 
{
    render() 
    {
        return (
           
<div>
  <Navbar />
  <Header />
 {/* CONTENT */}
      {/* SIDE BAR */}
      <div className="container-fluid text-center">    
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <ul className="menu-container nav nav-stacked">
              <li><Link to="/userinfo"><b>User Information</b> <span className="left-menu-label" /></Link></li>
            </ul>
            <ul className="menu-container nav nav-stacked">
              <li className="active"><Link to="/transactionhistory"><b>Transaction History</b></Link></li>
            </ul>
            <ul className="menu-container nav nav-stacked">
              <li className><Link to="/deliveryaddress"><b>Delivery Address</b></Link></li>
            </ul>
          </div>
          {/* END of SIDE BAR */}
          {/* MAIN BAR */}
          <div className="col-sm-9 form-container">    
            {/* TRANSACTION MENU TYPES (Updaid, Unsent, Finish, Cancelled) */}
            <div className="transaction-menu">
              <ul className="nav nav-tabs nav-justified">
                <li><Link to="/transactionhistory" className="black">Unpaid</Link></li>
                <li><Link to="/transactionhistory" className="black">Unsent</Link></li>
                <li className="active"><Link to="/transactionhistory" className="black">Finished</Link></li>
                <li><Link to="/transactionhistory" className="black">Unreceived</Link></li>
                <li><Link to="/transactionhistory" className="black">Cancelled</Link></li>
              </ul>
              {/* List of Transaction based on transaction ID and Date */}
              {/* List #1 */}
              {/* CONTENT - Shopping Cart */}

      <div id="cart-width">
        <br />
        <h3>Transaction History</h3>
        <header id="cart-title">
          <center>
            <h4>Invoice No. 10000120</h4>
            <h5>Transaction Date: 28 May 2018</h5>
          </center>
        </header>
        <div id="cart-page" className="table-responsive">
          <table id="cart-table">
            <thead>
              <tr>
                <th className="first">No.</th>
                <th className="second">Product</th>
                <th className="third">Product Name</th>
                <th className="fourth">Qty</th>
                <th className="fifth">Price</th>
                <th className="sixth">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {/* shopping cart contents */}
              <tr className="productitm">
                <td>1</td>
                <td><Link to="/singleproduct"><img src="images/Clutch_Emma_RFID_Cooper_1.jpg" className="img-responsive item-image" alt="Emma Cooper Clutch" /></Link></td>
                <td><Link to="/singleproduct">Emma Cooper Clutch</Link></td>
                <td><input type="number" defaultValue={1} min={0} max={99} className="qtyinput" /></td>
                <td>Rp. 750,000</td>
                <td><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="productitm">
                <td>2</td>
                <td><Link to="/singleproduct"><img src="images/Crossbody_Ryder_1.jpg" className="img-responsive item-image" alt="Ryder Crossbody Bag" /></Link></td>
                <td><Link to="/singleproduct">Ryder Crossbody Bag</Link></td>
                <td><input type="number" defaultValue={1} min={0} max={99} className="qtyinput" /></td>
                <td>Rp. 950,000</td>
                <td><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="productitm">
                <td>3</td>
                <td><img src="images/Tote_Fiona_1.jpg" className="img-responsive item-image" alt="Fiona Tote Bag"/></td>
                <td>Fiona Tote Bag</td>
                <td><input type="number" defaultValue={1} min={0} max={99} className="qtyinput" /></td>
                <td>Rp. 1,100,000</td>
                <td><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              {/* tax + subtotal */}
              <tr className="extracosts">
                <td />
                <td className="light">Shipping &amp; Tax</td>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={1}><span>Rp. 350,000</span></td>
                <td />
              </tr>
              <tr className="totalprice">
                <td />
                <td className="light">Total:</td>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={1}><span className="">Rp. 2,950,000</span></td>
                <td />
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
              {/* END of transaction #1 */}

              {/* List of Transaction based on transaction ID and Date */}
              {/* List #2 */}
              <div id="cart-width">
        <br />
        <h3>Transaction History</h3>
        <header id="cart-title">
          <center>
            <h4>Invoice No. 10000058</h4>
            <h5>Transaction Date: 25 May 2018</h5>
          </center>
        </header>
        <div id="cart-page" className="table-responsive">
          <table id="cart-table">
            <thead>
              <tr>
                <th className="first">No.</th>
                <th className="second">Product</th>
                <th className="third">Product Name</th>
                <th className="fourth">Qty</th>
                <th className="fifth">Price</th>
                <th className="sixth">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {/* shopping cart contents */}
              <tr className="productitm">
                <td>1</td>
                <td><Link to="/singleproduct"><img src="images//Hobo_Maya_Motif_1.jpg" className="img-responsive item-image" alt="Hobo Maya Motif" /></Link></td>
                <td><Link to="/singleproduct">Hobo Maya Motif</Link></td>
                <td><input type="number" defaultValue={1} min={0} max={99} className="qtyinput" /></td>
                <td>Rp. 1,100,000</td>
                <td><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              
              {/* tax + subtotal */}
              <tr className="extracosts">
                <td />
                <td className="light">Shipping &amp; Tax</td>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={1}><span>Rp. 100,000</span></td>
                <td />
              </tr>
              <tr className="totalprice">
                <td />
                <td className="light">Total:</td>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={1}><span className="">Rp. 1,200,000</span></td>
                <td />
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
              {/* END of transaction #2 */}
            </div></div></div></div>

            <Footer />
            </div>

);
}
}
export default TransactionHistory;