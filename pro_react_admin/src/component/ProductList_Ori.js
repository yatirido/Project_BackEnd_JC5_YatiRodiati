import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';

class ProductList extends Component 
{
    render() 
    {
        return (
      
<div>
  <Navbar />
  <Header />

   {/* MAIN BAR */}
   <div className="form-container">    
       <br/>
              <h3>PRODUCT LIST</h3>
              <div className="checkout-right">
                <h4>Last Update: <span>1 June 2018</span></h4>
                <table className="timetable_sub">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Product Name</th>
                      <th>Code</th>
                      <th>Stock Qty</th>
                      <th>Price (Rp.)</th>
                      <th>On Sale</th>
                      <th>Sale Price (Rp.)</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="rem1">
                      <td className="invert">1</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Crossbody Ryder</Link></td>
                      <td className="invert">CB001</td>
                      <td className="invert">6</td>
                      <td className="invert">950,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert"><Link to="../web/products.html">Crossbody</Link></td>
                      <td className="invert">
                        <div className="clearfix">
                          <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                          <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                        </div>  
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">2</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Crossbody Campbell</Link></td>
                      <td className="invert">CB002</td>
                      <td className="invert">3</td>
                      <td className="invert">Rp. 900,000</td>
                      <td className="invert">Yes</td>
                      <td className="invert">850,000</td>
                      <td className="invert"><Link to="../web/products.html">Crossbody</Link></td>
                      <td className="invert">
                        <div className="clearfix">
                          <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                          <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                        </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">3</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Crossbody Elle</Link></td>
                      <td className="invert">CB003</td>
                      <td className="invert">8</td>
                      <td className="invert">850,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert"><Link to="../web/products.html">Crossbody Bag</Link></td>
                      <td className="invert">
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                      </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">4</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Crossbody Emma</Link></td>
                      <td className="invert">CB004</td>
                      <td className="invert">4</td>
                      <td className="invert">950,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert">Crossbody Bag</td>
                      <td className="invert">
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                      </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">4</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Crossbody Kinley Small</Link></td>
                      <td className="invert">CB005</td>
                      <td className="invert">3</td>
                      <td className="invert">750,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert">Crossbody Bag</td>
                      <td className="invert">
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                      </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">5</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Tote Fiona</Link></td>
                      <td className="invert">TB001</td>
                      <td className="invert">3</td>
                      <td className="invert">1,100,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert">Tote Bag</td>
                      <td className="invert">
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                        </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">6</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Tote Rachel</Link></td>
                      <td className="invert">TB002</td>
                      <td className="invert">5</td>
                      <td className="invert">1,100,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert">Tote Bag</td>
                      <td className="invert">
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                        </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">7</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Tote Rachel Motif</Link></td>
                      <td className="invert">TB003</td>
                      <td className="invert">12</td>
                      <td className="invert">1,200,000</td>
                      <td className="invert">Yes</td>
                      <td className="invert">1,050,000</td>
                      <td className="invert">Tote Bag</td>
                      <td className="invert"> 
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                      </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">7</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Tote Fiona</Link></td>
                      <td className="invert">TB004</td>
                      <td className="invert">10</td>
                      <td className="invert">1,200,000</td>
                      <td className="invert">Yes</td>
                      <td className="invert">1,050,000</td>
                      <td className="invert">Tote Bag</td>
                      <td className="invert"> 
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                      </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">7</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Satchel Fiona</Link></td>
                      <td className="invert">SB001</td>
                      <td className="invert">5</td>
                      <td className="invert">1,300,000</td>
                      <td className="invert">Yes</td>
                      <td className="invert">1,150,000</td>
                      <td className="invert">Satchel Bag</td>
                      <td className="invert"> 
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                        </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">7</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Satchel Rachel</Link></td>
                      <td className="invert">SB002</td>
                      <td className="invert">8</td>
                      <td className="invert">1,300,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert">Satchel Bag</td>
                      <td className="invert"> 
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                      </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">7</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Satchel Ryder</Link></td>
                      <td className="invert">SB003</td>
                      <td className="invert">5</td>
                      <td className="invert">1,300,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert">Satchel Bag</td>
                      <td className="invert"> 
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                      </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">7</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Clutch Emma Midnight Navy</Link></td>
                      <td className="invert">CL001</td>
                      <td className="invert">7</td>
                      <td className="invert">800,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert">Clutch</td>
                      <td className="invert"> 
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                      </div>
                      </td>
                    </tr>
                    <tr className="rem1">
                      <td className="invert">7</td>
                      <td className="invert" style={{textAlign: 'left'}}><Link to="#">Clutch Emma Mineral Grey</Link></td>
                      <td className="invert">CL002</td>
                      <td className="invert">10</td>
                      <td className="invert">775,000</td>
                      <td className="invert">No</td>
                      <td className="invert" />
                      <td className="invert">Clutch</td>
                      <td className="invert"> 
                      <div className="clearfix">
                        <button type="submit" className="btn btn-xs btn-info pull-left">Edit</button>
                        <button type="submit" className="btn btn-xs btn-warning pull-right">Delete</button>
                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br /><br />
              <div className>
                <button type="submit" className="btn btn-lg btn-primary">Add New Product</button>
              </div>
              <br /><br />
            </div>
          </div>
        
    );
  }
}
export default ProductList;