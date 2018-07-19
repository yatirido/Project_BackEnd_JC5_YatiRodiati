import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component 
{
  render() 
  {
    return (
      <div>
       {/* Fixed Top Navigation Bar */}
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" /> 
            </button>
            <Link to ="#" className="navbar-brand"  style={{fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>FIONA - Web Administrator</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <form className="navbar-form navbar-left" action="/action_page.php">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" name="search" />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search" />
                  </button>
                </div>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-envelope" /><span className="badge blue">3</span></Link>
                <ul className="dropdown-menu">
                  <li>
                    <div className="notification_header">
                      <h5>You have 3 messages</h5>
                    </div>
                  </li>
                  <li><Link to="#">
                      <div className="user_img"><img src="images/p5.png" alt=""/></div>
                      <div className="notification_desc">
                        <p>Anita Amalia</p>
                        <p><span>1 hour ago</span></p>
                      </div>
                      <div className="clearfix" />	
                    </Link></li>
                  <li className="odd"><Link to="#">
                      <div className="user_img"><img src="images/p6.png" alt="" /></div>
                      <div className="notification_desc">
                        <p>Dimitry M</p>
                        <p><span>1 hour ago</span></p>
                      </div>
                      <div className="clearfix" />	
                    </Link></li>
                  <li><Link to="#">
                      <div className="user_img"><img src="images/p7.png" alt="" /></div>
                      <div className="notification_desc">
                        <p>Budiman W</p>
                        <p><span>2 hour ago</span></p>
                      </div>
                      <div className="clearfix" />	
                    </Link></li>
                  <li>
                    <div className="notification_bottom">
                      <Link to="#">See all messages</Link>
                    </div> 
                  </li>
                </ul>
              </li>	
              <li>
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-tasks" /><span className="badge blue">2</span></Link>
              </li>
              <li>
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-log-out" /> Log Out</Link>
              </li>            
              <li>
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user" /> Account</Link>
                <ul className="dropdown-menu">
                  <li><Link to="#"><span className="glyphicon glyphicon-user" />Setting</Link></li>
                  <li className="divider" />
                  <li><Link to="#"><span className="glyphicon glyphicon-user" /> Profile</Link></li>
                  <li className="divider" />
                  <li><Link to="#"><span className="glyphicon glyphicon-log-out" /> Log Out</Link></li>
                </ul>
              </li>   
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
  }
}
export default Navbar;