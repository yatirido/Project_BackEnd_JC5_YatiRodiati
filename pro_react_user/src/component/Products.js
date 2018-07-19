import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

class Products extends Component 
{
    render() 
    {
        return (
      
<div>
  <Navbar />
  <Header />
  
        {/* CONTENT    */}
        <br />
        <div>
          {/* CONTENT - Side and Main BAr */}
          <div>
            {/* CONTENT -SIDE BAR */}
            <div className="col-sm-2 sidebar-category">
              <br />
              <p /><h4>CATEGORIES:</h4><p />
              <ul className="nav">
                <li className="dropdown">
                  <Link to="#" className="brown dropdown-toggle" data-toggle="dropdown">Crossbody Bags<span className="caret" /></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/products" target="_blank">Basic</Link></li>
                    <li><Link to="/products" target="_blank">Pattern</Link></li>
                  </ul>
                </li>
                <li><Link to="/products" target="_blank" className="brown">Tote Bags</Link></li>
                <li><Link to="/products" target="_blank" className="brown">Satchel Bags</Link></li>
                <li><Link to="/products" target="_blank" className="brown"> Wallets</Link></li>
                <li><Link to="/products" target="_blank" className="brown"><h5>SALE!</h5></Link></li>
                <br />
              </ul>
              <br />
              <p /><h4>FILTER BY:</h4><p />
              <ul className="nav">
                <li className="dropdown">
                  <Link to="#" className="brown dropdown-toggle" data-toggle="dropdown">PRICE<span className="caret" /></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/products"> Under Rp. 500,000</Link></li>
                    <li><Link to="/products">Rp 500,000 - Rp 750,000</Link></li>
                    <li><Link to="/products">Rp 750,000 - Rp 1,000,000</Link></li>
                    <li><Link to="/products">Rp 1,000,000 - Rp 1,500,000</Link></li>
                    <li><Link to="/products">Rp 1,000,000 - Rp 1,500,000</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="#" className="brown dropdown-toggle" data-toggle="dropdown">COLOUR<span className="caret" /></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/products">Brown</Link></li>
                    <li><Link to="/products">Grey</Link></li>
                    <li><Link to="/products">Blue</Link></li>
                    <li><Link to="/products">Green</Link></li>
                    <li><Link to="/products">Red</Link></li>
                    <li><Link to="/products">Black</Link></li>
                  </ul>
                </li>
                <br />
              </ul>
            </div>
            {/* CONTENT - MAIN BAR */}
            {/* Create the Main Content i.e. User Information sub menu*/}
            <div className="col-sm-10 form-container-holder">
              <div className="topcontent">
                <p /><h2>All Products</h2><p />
              </div>
              <div>
                {/* Products Row 1 */}
                <div>
                  <ul className="nav nav-tabs nav-justified">
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Crossbody_Ryder_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Crossbody Ryder <br /> Rp. 950,000</figcaption>
                        </figure>
                      </Link>
                    </li> 
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Crossbody_Campbell_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Crossbody Campbell <br /> Rp. 900,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Crossbody_Elle_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Crossbody Elle <br /> Rp. 850,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Crossbody_Emma_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Crossbody Emma <br /> Rp. 950,000</figcaption>
                        </figure>
                      </Link>
                    </li> 
                  </ul>
                </div>
                <br />
                {/* Products Row 2 */}
                <div>
                  <ul className="nav nav-tabs nav-justified">
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Crossbody_Kinley_Small_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Crossbody Kinley Small <br /> Rp. 800,000</figcaption>
                        </figure>
                      </Link>
                    </li> 
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Tote_Fiona_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Tote Fiona <br /> Rp. 1,100,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Tote_Rachel_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Tote Rachel <br /> Rp. 1,100,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Tote_Rachel_Motif_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Tote Rachel Pattern <br /> Rp. 1,200,000</figcaption>
                        </figure>
                      </Link>
                    </li> 
                  </ul>
                </div>
                {/* Products Row 3 */}
                <div>
                  <ul className="nav nav-tabs nav-justified">
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Tote_Fiona_E_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption>Tote Fiona <br /> Rp. 1,200,000</figcaption>
                        </figure>
                      </Link>
                    </li> 
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Satchel_Fiona_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Satchel Fiona <br /> Rp. 1,300,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Satchel_Rachel_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Satchel Rachel <br /> Rp. 1,300,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Satchel_Ryder_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Satchel Ryder <br /> Rp. 1,350,000</figcaption>
                        </figure>
                      </Link>
                    </li> 
                  </ul>
                </div>
                <br />
                {/* Products Row 4 */}
                <div>
                  <ul className="nav nav-tabs nav-justified">
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Clutch_Emma_RFID_MidnightNavy_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Clutch Emma Midnight Navy <br /> Rp. 800,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Clutch_Emma_RFID_MineralGrey_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Clutch Emma Mineral Grey <br /> Rp. 775,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Clutch_Emma_RFID_Cooper_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Clutch Emma Cooper <br /> Rp. 750,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Clutch_Emma_RFID_FadedIndigo_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Clutch Emma Faded Indigo <br /> Rp. 775,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Products Row 5 */}
                <div>
                  <ul className="nav nav-tabs nav-justified">
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Hobo_Maya_Motif_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Hobo Maya Motif <br /> Rp. 1,100,000 </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleproduct" className="brown">
                        <figure>
                          <img src="images/Hobo_Maya_Small_1.jpg" width="70%" height="70%" alt="" />
                          <figcaption> Hobo Maya Small <br /> Rp. 900,000 </figcaption>
                        </figure>
                      </Link>
                    </li> 
                    <li /> 
                    <li /> 
                  </ul>
                </div>
              </div>
              {/* END of MAIN BAR */}
            </div>
            {/* End of Side and Main Bar */}
            {/* CONTENT - Bottom - Short Description */}
            <div className="col-sm-12 hidden-xs" style={{backgroundColor: 'white', fontSize: 10, fontFamily: 'Georgia', textAlign: 'center', paddingTop: 5, paddingBottom: 5}}>
              <h4>UNCOVER OUR COVETABLE CROSSBODY HANDBAG COLLECTIONS</h4>
              <p>Modern looks, inspired by mid-century lines complete our crossbody handbag collections. 
                <br />
                We’re excited to introduce our Preston and Knox handbag collections which come in our favorite on-the-go silhouette. 
                <br />
                For the woman who commutes to work every day or for those lively nights out, we’ve got the perfect hands-free and on-trend crossbody handbags.
              </p>
            </div>
          </div>
          {/* END of CONTENT */}
        </div>
        
        <Footer />
        </div>

);
}
}
export default Products;