import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

class Login extends Component 
{
    render() 
    {
        return (
           
           <div>
             <Navbar />
             <Header />
             
{/* CONTENT - Sign In */}
<br />
<div className="regform">
  <br />
  <p /><h3><center>SIGN IN</center></h3><p />
  <form className="form-horizontal" action="/action_page.php">
    <div className="form-group boxform">
      <label className="control-label col-sm-3" htmlFor="email">Email:</label>
      <div className="col-sm-9">
        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
      </div>
    </div>
    <div className="form-group boxform">
      <label className="control-label col-sm-3" htmlFor="pwd">Password:</label>
      <div className="col-sm-9">
        <input type="password" className="form-control" id="pwd" placeholder="Enter Password" name="pwd" required />
      </div> 
    </div>
    <div className="form-group">
      <div className="col-sm-offset-3 col-sm-9">
        <div className="checkbox">
          <label><input type="checkbox" name="remember" /> Remember me</label>
        </div>
      </div>
    </div>
    <div className="col-sm-offset-3 col-sm-9">
      <button type="submit" className="btn btn-primary-f boxform" style={{width: '75%'}}><bold>SIGN IN</bold></button>
    </div>
  </form>
  <br /><br /><br />
  <div className="col-sm-offset-3 col-sm-9">
    <p>Forgot password? Please click <Link to="#">here</Link></p>
  </div>
  <br /><br />
</div>
<br />
{/* END of CONTENT */}

<Footer />
</div>

);
}
}
export default Login;