import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
// import {Link, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';

class ProductList extends Component 
{

  state = 
  {
    dataproduct: [],
  }

  componentDidMount()
  {
    axios.get(`http://localhost:8000/`).then(
        /** Function to get all products data from backend */
        (getData) => {
            console.log(getData.data);
            this.setState({
                dataproduct: getData.data
            });
        }
    )
  }

  render() 
  {
    const result = this.state.dataproduct.map(
      (data, number) => {
          var no = number + 1;
          var ProductID = data.productID;
          var CategoryID = data.categoryID
          var ProductName = data.productName;
          var ProductPrice = data.price;

          return <tr key={number} style={{textAlign: 'center'}}>
            <td>{no}</td>
            {/* <td>{ProductID}</td> */}
            <td>{ProductName}</td>
            <td>{CategoryID}</td>
            <td>{ProductPrice}</td>
            <td>
              <Link to = {{pathname:'/editproduct/', state: {ProductID: ProductID}}} className="btn btn-warning">Edit</Link>&nbsp;
              <Link to = {{pathname:'/deleteproduct/', state: {ProductID: ProductID}}} className="btn btn-danger">Delete</Link>&nbsp;
            </td>
        </tr>
        }
    );

    return (
  
    <div className="form-container">
   
      {/* <Navbar /> */}
      <Header />
  
      {/* MAIN CONTENT */}
      
        <h3><center>PRODUCT LIST</center></h3>
        <br />
        <Link to="/addproduct" className="btn btn-primary">Add New Product</Link>&nbsp;
        <br /><br />
        <div>
          <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>No.</th>
                    {/* <th style={{textAlign: 'center'}}>Product ID</th> */}
                    <th style={{textAlign: 'center'}}>Product Name</th>
                    <th style={{textAlign: 'center'}}>Category ID</th>
                    <th style={{textAlign: 'center'}}>Price</th>
                    <th style={{textAlign: 'center'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
          </table>
        </div>
        <br />
      </div>
    );
  }
}
export default ProductList;