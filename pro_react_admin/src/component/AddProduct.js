import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
  addProduct = (e) => {
      axios.post(`http://localhost:8000/addproduct`, {
          input1: e.productname.value,
          input2: e.categoryid.value,
          input3: e.productprice.value,
         
        });
  }
 
  render() {
    
    return (
      <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Add Product</legend>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Name</label>
                    <div className="col-lg-10">
                        <input ref="productname" type="text" className="form-control" placeholder="Product name ..." />
                    </div>
                </div>

                 <div className="form-group">
                    <label className="col-lg-2 control-label">Category ID</label>
                    <div className="col-lg-10">
                        <input ref="categoryid" type="text" className="form-control" placeholder="Category ID ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price</label>
                    <div className="col-lg-10">
                        <input ref="productprice" type="text" className="form-control"  placeholder="Product price ..." />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                        <button type="button" onClick={() => this.addProduct(this.refs)} className="btn btn-primary">Add</button>
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default AddProduct
