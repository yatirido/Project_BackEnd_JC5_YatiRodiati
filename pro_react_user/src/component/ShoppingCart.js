import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

class ShoppingCart extends Component 
{
    render() 
    {
        return (
           
           <div>
                <Navbar />
                <Header />

                 {/* CONTENT - Shopping Cart */}
      <div id="cart-width">
        <br /><br />
        <header id="cart-title">
          <h3>Your Shopping Cart</h3>
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
                <td colSpan={1}><span className="thick">Rp. 2,950,000</span></td>
                <td />
              </tr>
              {/* checkout btn */}
              <tr className="checkoutrow">
                <td colSpan={6} className="checkout"><button id="submitbtn">Checkout Now!</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* END of Shopping CartCONTENT */}

                <Footer />
            </div>

);
}
}
export default ShoppingCart;