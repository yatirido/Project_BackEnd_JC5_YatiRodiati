import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Header from './Header';

class AddProduct extends Component {

    state = {
        productname: '',
        categoryid: '',
        productprice: '',
        photoproduct: ''
    }

    onchange = (e) => {
        switch(e.target.name){
            case 'photoprod':
                this.setState({
                    photoproduct: e.target.files[0],
                });
                break;
        }
    }

    value = (e) => {
        this.setState({
            // prod_id: e.idp.value,
            prod_name: e.namep.value,
            cat_id: e.idc.value,
            prod_price: e.pricep.value
        })
    }

    addProduct = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', this.state.photoproduct);
        formData.append('productname', this.state.prod_name);
        formData.append('productprice', this.state.prod_price);
        formData.append('categoryid', this.state.cat_id);
    
        axios.post('http://localhost:8000/addproduct/', formData);
      }

//   addProduct = (e) => {
//       axios.post(`http://localhost:8000/addproduct`, {
//           input1: e.productname.value,
//           input2: e.categoryid.value,
//           input3: e.productprice.value,
//           input4: e.productphoto.value,
//         });
//   }
 
  render() {
    
    return (

        <div className="form-container">
      <Header />
  
      {/* MAIN CONTENT */}
      <div className="container">
        {/* <form className="form-horizontal"> */}
        <form className="form-horizontal" onSubmit={this.addProduct} encType="multipart/form-data">
            <fieldset>
                <legend>Add Product</legend>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Name</label>
                    <div className="col-lg-10">
                        <input ref="namep" type="text" className="form-control" placeholder="Product name ..." />
                    </div>
                </div>

                 <div className="form-group">
                    <label className="col-lg-2 control-label">Category ID</label>
                    <div className="col-lg-10">
                        <input ref="idc" type="text" className="form-control" placeholder="Category ID ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price</label>
                    <div className="col-lg-10">
                        <input ref="pricep" type="text" className="form-control"  placeholder="Product price ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Photo</label>
                    <div className="col-lg-10">
                        <input name="photoprod" onChange={this.onchange} type="file" className="form-control"  />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                        <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i>Update</button>
                        {/* <button type="button" onClick={() => this.addProduct(this.refs)} className="btn btn-primary">Add</button> */}
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
      </div>
    )
  }
}
export default AddProduct
