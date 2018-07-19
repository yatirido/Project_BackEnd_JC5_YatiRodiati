import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

class UserInfo extends Component 
{
    render() 
    {
        return (
            
            <div>
              <Navbar />
              <Header />
               {/* CONTENT - Account -User Information */}
      <div className="container-fluid text-center">    
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <ul className="menu-container nav nav-stacked">
              <li className="active"><Link to="/userinfo"><b>User Information</b> <span className="left-menu-label" /></Link></li>
            </ul>
            <ul className="menu-container nav nav-stacked">
              <li className><Link to="/transactionhistory"><b>Transaction History</b></Link></li>
            </ul>
            <ul className="menu-container nav nav-stacked">
              <li className><Link to="/deliveryaddress"><b>Delivery Address</b></Link></li>
            </ul>
          </div>
          <div className="col-sm-9 form-container-holder">
            <div className="row">
              <div className="col-sm-12 form-container">             
                <form method="POST" action="/account/info/change-account-info">
                  <div className="row field">
                    <div className="col-xs-12">
                      <h3>User Information</h3>
                      <br />
                    </div>
                  </div>
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <p className="col-sm-3 field-name">Name</p>
                        <div className="col-sm-9">
                          <input id="user" name="name" type="text" className="form-control" defaultValue="Yati Rodiati" />
                        </div>
                      </div>
                    </div>
                    <p className="col-sm-4 hidden-xs tips">Please use your full name.</p>
                  </div>
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <p className="col-sm-3 field-name">Gender</p>
                        <div className="col-sm-6">
                          <select id="gender" name="gender" className="form-control">
                            <option value="null" className>Choose Gender</option>
                            <option value="true" className>Male</option>
                            <option value="false" selected className>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <p className="col-sm-3 field-name">Date of Birth</p>
                        <div className="col-sm-3 col-xs-4">
                          <select id="date" name="date" className="form-control">
                            <option value={-1} className>Date</option>
                            <option value={1} className>1</option>
                            <option value={2} className>2</option>
                            <option value={3} className>3</option>
                            <option value={4} className>4</option>
                            <option value={5} className>5</option>
                            <option value={6} className>6</option>
                            <option value={7} className>7</option>
                            <option value={8} className>8</option>
                            <option value={9} className>9</option>
                            <option value={10} className>10</option>
                            <option value={11} className>11</option>
                            <option value={12} className>12</option>
                            <option value={13} className>13</option>
                            <option value={14} className>14</option>
                            <option value={15} className>15</option>
                            <option value={16} className>16</option>
                            <option value={17} className>17</option>
                            <option value={18} className>18</option>
                            <option value={19} className>19</option>
                            <option value={20} className>20</option>
                            <option value={21} className>21</option>
                            <option value={22} className>22</option>
                            <option value={23} className>23</option>
                            <option value={24} className>24</option>
                            <option value={25} className>25</option>
                            <option value={26} className>26</option>
                            <option value={27} className>27</option>
                            <option value={28} className>28</option>
                            <option value={29} className>29</option>
                            <option value={30} className>30</option>
                            <option value={31} className>31</option>
                          </select>
                        </div>
                        <div className="col-sm-3 col-xs-4">
                          <select id="month" name="month" className="form-control">
                            <option value={-1} className>Month</option>
                            <option value={0} className>Januari</option>
                            <option value={1} className>Februari</option>
                            <option value={2} className>Maret</option>
                            <option value={3} className>April</option>
                            <option value={4} className>Mei</option>
                            <option value={5} className>Juni</option>
                            <option value={6} className>Juli</option>
                            <option value={7} className>Agustus</option>
                            <option value={8} className>September</option>
                            <option value={9} className>Oktober</option>
                            <option value={10} className>November</option>
                            <option value={11} className>Desember</option>
                          </select>
                        </div>
                        <div className="col-sm-3 col-xs-4">
                          <select id="year" name="year" className="form-control">
                            <option value={-1} className>Year</option>
                            <option value={1971} className>1971</option>
                            <option value={1972} className>1972</option>
                            <option value={1973} className>1973</option>
                            <option value={1974} className>1974</option>
                            <option value={1975} className>1975</option>
                            <option value={1976} className>1976</option>
                            <option value={1977} className>1977</option>
                            <option value={1978} className>1978</option>
                            <option value={1979} className>1979</option>
                            <option value={1980} className>1980</option>
                            <option value={1981} className>1981</option>
                            <option value={1982} className>1982</option>
                            <option value={1983} className>1983</option>
                            <option value={1984} className>1984</option>
                            <option value={1985} className>1985</option>
                            <option value={1986} className>1986</option>
                            <option value={1987} className>1987</option>
                            <option value={1988} className>1988</option>
                            <option value={1989} className>1989</option>
                            <option value={1990} className>1990</option>
                            <option value={1991} className>1991</option>
                            <option value={1992} className>1992</option>
                            <option value={1993} className>1993</option>
                            <option value={1994} className>1994</option>
                            <option value={1995} className>1995</option>
                            <option value={1996} className>1996</option>
                            <option value={1997} className>1997</option>
                            <option value={1998} className>1998</option>
                            <option value={1999} className>1999</option>
                            <option value={2000} className>2000</option>
                            <option value={2001} className>2001</option>
                            <option value={2002} className>2002</option>
                            <option value={2003} className>2003</option>
                          </select>
                        </div>
                      </div>
                    </div>   
                  </div>
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <p className="col-sm-3 field-name">Email</p>
                        <div className="col-sm-9">
                          <div className="input-group">
                            <input id name="email" type="email" className="form-control" defaultValue="yatirido@gmail.com" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <p className="col-sm-3 field-name">Mobile No.</p>
                        <div className="col-sm-9">
                          <input name="phone-number" type="text" className="form-control" defaultValue />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 visible-xs tips-holder" />
                    <p className="col-sm-4 hidden-xs tips">Mobile number is often required by the courier agent for delivery.</p>
                  </div>
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-sm-9 col-sm-offset-3 col-xs-12 submit-button">
                          <input type="submit" className="btn btn-primary-f" defaultValue="Save Information" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <br />
              </div>
              <div className="col-sm-12 form-container">    
                <form method="POST" action="/account/info/change-password">
                  <div className="row field">
                    <div className="col-xs-12">
                      <h3>Change Password</h3>
                      <br />
                    </div>
                  </div>
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <p className="col-sm-3 field-name">Old Password</p>
                        <div className="col-sm-9">
                          <input name="current-password" type="password" className="form-control" placeholder="Enter old password" />
                        </div>
                      </div>
                    </div>
                    <p className="col-sm-4 hidden-xs tips">Please don't give your password information to anyone.</p>
                  </div>
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <p className="col-sm-3 field-name">New Password</p>
                        <div className="col-sm-9">
                          <input name="new-password" type="password" className="form-control" placeholder="Enter new password" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <p /><div className="col-sm-9 col-sm-offset-3"><p />
                          <input name="repeat-password" type="password" className="form-control" placeholder="Repeat new password" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row field">
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-sm-9 col-sm-offset-3 col-xs-12 submit-button">
                          <input type="submit" className="btn btn-primary-f" defaultValue="Change Password" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
          </div>
    );
    }
}
export default UserInfo;
