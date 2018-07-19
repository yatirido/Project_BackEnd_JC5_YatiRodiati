import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
// import {Link, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';

class ProductCategories extends Component 
{

  state = 
  {
    datacategory: [],
  }

  componentDidMount()
  {
    axios.get(`http://localhost:8000/category`).then(
        /** Function to get all categories data from backend */
        (getData) => {
            console.log(getData.data);
            this.setState({
                datacategory: getData.data
            });
        }
    )
  }

  render() 
  {
    const result = this.state.datacategory.map(
      (data, number) => {
          var no = number + 1;
          var CategoryID = data.categoryID
          var CategoryName = data.categoryName;
          var CategoryDesc = data.description;

          return <tr key={number} style={{textAlign: 'center'}}>
            <td>{no}</td>
            {/* <td>{ProductID}</td> */}
            {/* <td>{CategoryID}</td> */}
            <td>{CategoryName}</td>
            <td>{CategoryDesc}</td>
            <td>
              <Link to = {{pathname:'/editcategory/', state: {CategoryID: CategoryID}}} className="btn btn-warning">Edit</Link>&nbsp;
              <Link to = {{pathname:'/deletecategory/', state: {CategoryID: CategoryID}}} className="btn btn-danger">Delete</Link>&nbsp;
            </td>
        </tr>
        }
    );

    return (
  
    <div className="form-container">
   
      {/* <Navbar /> */}
      <Header />
  
      {/* MAIN CONTENT */}
      
        <h3><center>CATEGORY LIST</center></h3>
        <br />
        <Link to="/addcategory" className="btn btn-primary">Add New Category</Link>&nbsp;
        <br /><br />
        <div>
          <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>No.</th>
                    {/* <th style={{textAlign: 'center'}}>Product ID</th> */}
                    {/* <th style={{textAlign: 'center'}}>Category ID</th> */}
                    <th style={{textAlign: 'center'}}>Category Name</th>
                    <th style={{textAlign: 'center'}}>Description</th>
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
export default ProductCategories;