import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component 
{
    render() 
    {
        return (
            <div>

 <div className="login-form">
 <form action="#" method="post">
   <center><h2>FIONA Administrator</h2></center>   
   <br />
   <div className="form-group">
     <label className="control-label" htmlFor="email">Email:</label>
     <div>
       <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required style={{width: '90%'}} />
     </div>
   </div>
   <div className="form-group">
     <label className="control-label" htmlFor="pwd">Password:</label>
     <div>
       <input type="password" className="form-control" id="pwd" placeholder="Enter Password" name="pwd" required style={{width: '90%'}} />
     </div> 
   </div>
   <div>
     <br />
     <button type="submit" className="btn btn-primary-f" style={{width: '90%'}}><bold>SIGN IN</bold></button>
   </div>
   <div className="clearfix">
     <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
     <Link to="#" className="pull-right">Forgot Password?</Link>
   </div>   
 </form>
</div>
<div>
  <center><p>
    <Link to = "/productlist"> Click here to go to Admin page </Link>
    <br />
    <h6>(assumed admin login has been successfull)</h6>
  </p></center>
</div>  

  </div>
    );
    }
}
export default Login;