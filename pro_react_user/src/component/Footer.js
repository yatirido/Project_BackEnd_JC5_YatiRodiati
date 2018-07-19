import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component 
{
    render() 
    {
        return (
            <div>
            {/* FOOTER */}
            <div className="footer-container-top">
              <div className="container">
                <ul className="row nav nav-pills">
                  <li className="col-sm-3 nav-col">
                    <h4 status={0} className="footer-title hidden-xs">FIONA</h4>
                    {/* <h4 status="0" class="visible-xs footer-triggers">FIONA <span class="glyphicon glyphicon-chevron-down pull-right"></span></h4> */}
                    <div className="footer-collapse">
                      <Link to="#">About Us</Link>
                      <Link to="#">Company Profile</Link>
                      <Link to="#">Career at Fiona</Link>
                    </div>
                  </li>
                  <li className="col-sm-3 nav-col">
                    <h4 status={0} className="footer-title hidden-xs">SHOP</h4>
                    {/* <h4 status="0" class="visible-xs footer-triggers">SHOP <span class="glyphicon glyphicon-chevron-down pull-right"></span></h4> */}
                    <div className="footer-collapse">
                      <Link to="#">Shopping</Link>
                      <Link to="#">Payment Process</Link>
                      <Link to="#">Product Refund</Link>
                    </div>
                  </li>
                  <li className="col-sm-3 nav-col">
                    <h4 status={0} className="footer-title hidden-xs">CUSTOMER SERVICE</h4>
                    {/* <h4 status="0" class="visible-xs footer-triggers">CUSTOMER SERVICE <span class="glyphicon glyphicon-chevron-down pull-right"></span></h4> */}
                    <div className="footer-collapse">
                      <Link to="mailto://support@qlapa.com">support@fiona.com</Link>
                      <Link to="tel:+622122562088">+6221 22562088 </Link> 
                      <span className="hour">(Mon - Fri, 09.00 - 18.00)</span>
                    </div>
                  </li>
                  <li className="col-sm-3 nav-col">
                    <center>
                      <h4 status={0} className="footer-title hidden-xs">CONNECT WITH US</h4>
                      <div className="footer-collapse">
                        <div className="inline social-media-footer hidden-xs">
                          <Link to="#"><span className="fa fa-facebook" /></Link>
                          <Link to="#"><span className="fa fa-twitter" /></Link>
                          <Link to="#"><span className="fa fa-google google-plus" /></Link>
                          <Link to="#"><span className="fa fa-instagram" style={{marginRight: 0}} /></Link>
                          <br />
                        </div>
                        <div>
                          <div className="hidden-xs">
                            <Link to="#" target="_blank">
                              <img alt="Fiona Android Apps" title="Fiona Android Apps" className="img-responsive google-badge" src="images/google-play-badge.png" style={{margin: 'auto'}} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </center>
                  </li>
                </ul>
                <div className="visible-xs text-center">
                  <div className="row social-media-footer text-center">
                    <Link to="#" target="_blank"><span className="fa fa-facebook " /></Link>
                    <Link to="#" target="_blank"><span className="fa fa-twitter " /></Link>
                    <Link to="#"><span className="fa fa-google google-plus" /></Link>
                    <Link to="#" target="_blank"><span className="fa fa-instagram " style={{marginRight: 0}} /></Link>
                  </div>
                  <Link to="#" target="_blank">
                    <img alt="Fiona Android Apps" title="Fiona Android Apps" className="img-responsive google-badge" src="images/google-play-badge.png" style={{margin: 'auto'}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-container-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12" style={{textAlign: 'center'}}>
                    <Link to="/policy" className="footer-link">Policy</Link>
                    <Link to="blog/" className="footer-link">Blog</Link>
                    <span className="copyright">2018 © FIONA GROUP, INC. </span>
                  </div>
                </div>
              </div>
            </div>
            {/* END of FOOTER */}
          </div>
    );
    }
}
export default Footer;