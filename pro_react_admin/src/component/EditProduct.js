import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Header from './Header';

class EditProduct extends Component {

    state = {
        productid: '',
        productname: '',
        categoryid: '',
        productprice: '',
        photoproduct: ''
    }

    componentDidMount()
    {
        var prod_id = this.props.location.state.ProductID;
        // ProductID refers to the one in file ProductList.js
        axios.get('http://localhost:8000/getproductdata/'+prod_id).then(
            (getdata) => 
            {
                console.log(getdata)
                this.setState(
                {
                    idproduct: getdata.data[0].productID,
                    nameproduct: getdata.data[0].productName,
                    idcategory: getdata.data[0].categoryID,
                    priceproduct: getdata.data[0].price
                })
            })
    }

    //   Di bagian input file (jika terjadi perubahan maka akan dijalankan fungsi "onchange")
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
            prod_id: e.idp.value,
            prod_name: e.namep.value,
            cat_id: e.idc.value,
            prod_price: e.pricep.value
        })
    }

    updateProduct = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', this.state.photoproduct);
        formData.append('productid', this.state.prod_id);
        formData.append('productname', this.state.prod_name);
        formData.append('productprice', this.state.prod_price);
        formData.append('categoryid', this.state.cat_id);
    
        axios.post('http://localhost:8000/editproduct/', formData);
      }
  

    // updateProduct = (e) => 
    // {
    //     axios.post(`http://localhost:8000/editproduct/`, {
    //         productid: e.idp.value,
    //         productname: e.namep.value,
    //         categoryid: e.idc.value,
    //         productprice: e.pricep.value
    //       });
    // }

  render() {
    return (

    <div className="form-container">
      <Header />
  
      {/* MAIN CONTENT */}
      <div className="container">
        <form className="form-horizontal" onSubmit={this.updateProduct} encType="multipart/form-data">
            <fieldset>
                <legend>Edit Data</legend>
                <input type="hidden" className="form-control" ref="idp" value={this.state.idproduct} />
                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Name</label>
                    <div className="col-lg-10">
                        <input ref="namep" type="text" Value={this.state.nameproduct} className="form-control" />
                    </div>
                </div>

                 <div className="form-group">
                    <label className="col-lg-2 control-label">Category ID</label>
                    <div className="col-lg-10">
                        <input ref="idc" type="text" Value={this.state.idcategory} className="form-control" />
                            {/* Category ID mau disuruh pilih, tapi ga jalan ngambil data id-nya                    */}
                        {/* <select ref="idc" className="form-control">
                            <option Value={this.state.idcategory} className>{this.state.idcategory}</option>
                            <option value={1} className>1. Sling Bag</option>
                            <option value={2} className>2. Tote Bag</option>
                            <option value={3} className>3. Wallet</option>
                          </select> */}
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price</label>
                    <div className="col-lg-10">
                        <input ref="pricep" type="text" Value={this.state.priceproduct} className="form-control" />
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
                            {/* <button type="button" onClick={() => this.updateProduct(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i>Update</button> */}
                    </div>
                </div>
            </fieldset>
        </form>
      </div>
    </div>
    )
  }
}
export default EditProduct

// PROBLEM: defaultValue doesnt work, nothing appear in the input box; except if we click "Cancel" button
// problem solved by using "Value" (capital V)
