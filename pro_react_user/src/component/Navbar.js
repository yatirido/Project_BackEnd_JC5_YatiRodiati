import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component 
{
    render() 
    {
        return (
            <div>
                <div className="row">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span> 
                            </button>
                            <Link to="#" className="navbar-brand"  style={{fontFamily: 'Tahoma'}}>FIONA - Casually classic</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <form className="navbar-form navbar-left">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" name="search" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
              
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/register">Register</Link>
                            </li>   
                            <li>
                                <Link to="/login" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-log-in"></span> Sign In</Link>
                                    <ul className="dropdown-menu collapseloginform" >
                                        <li>
                                            <p>Have an account? Great! <br />
                                                Please enter your email address and password to sign in:
                                            </p>
                                            <form action="/action_page.php">
                                                <div className="form-group boxform">
                                                    <label className="control-label" for="email">Email:</label>
                                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
                                                </div>
                                                <div className="form-group boxform">
                                                    <label className="control-label" for="pwd">Password:</label>
                                                    <input type="password" className="form-control" id="pwd" placeholder="Enter Password" name="pwd" required />
                                                </div>
                                                <div>
                                                    <button type="submit" className="btn btn-primary-f boxform">Submit</button>
                                                </div>
                                            </form>
                                            <p><br /><Link to="forgotpassword/" target="_blank">Forgot password?</Link></p>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <p><Link to="/register" target="_blank"><strong>Create/Register</strong></Link> a new account.</p>
                                        </li>
                                    </ul>
                            </li>            
                            <li>
                                <Link to="account/" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span> Account<span className="caret" /></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/userinfo" target="_blank">User Information</Link></li>
                                        <li className="divider"></li>
                                        <li><Link to="/transactionhistory" target="_blank">Transaction History</Link></li>
                                        <li className="divider"></li>
                                        <li><Link to="/deliveryaddress" target="_blank">Delivery Address</Link></li>
                                    </ul>
                            </li>   
                            <li>
                                <Link to="/shoppingcart" target="_blank"><span className="glyphicon glyphicon-shopping-cart"><span className="badge">2</span></span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    );
    }
}
export default Navbar;