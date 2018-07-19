import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

class Register extends Component 
{
    render() 
    {
        return (
          <div>
            <Navbar />
            <Header />

{/* CONTENT - Registration Form */}
<br />
<div className="regform">
  <br />
  <p /><h3><center>REGISTER</center></h3><p />
  <form className="form-horizontal" action="#">
    <div className="form-group boxform">
      <label className="control-label col-sm-3" htmlFor="user">Name:</label>
      <div className="col-sm-9">
        <input type="text" className="form-control" id="user" placeholder="Enter name" name="name" />
      </div>
    </div>
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
        <label className="radio-inline"><input type="radio" name="gender" />Male</label>
        <label className="radio-inline"><input type="radio" name="gender" />Female</label>
      </div>
    </div>
    <div className="col-sm-offset-3 col-sm-9">
      <button type="submit" className="btn btn-primary-f" style={{width: '75%'}}><bold>Submit</bold></button>
    </div>
  </form>
  <br /><br /><br />
  <div className="col-sm-offset-3 col-sm-9">
    <p className="boxform">Already have an account? Please login <Link to="/login">here</Link></p>
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
export default Register;
