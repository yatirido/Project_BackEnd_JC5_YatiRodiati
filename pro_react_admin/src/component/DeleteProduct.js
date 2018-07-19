import React, { Component } from 'react';
import axios from 'axios';

class FormEdit extends Component {

    state = {
        productid: '',
        productname: '',
        categoryid: '',
        productprice: ''
    }

    componentDidMount()
    {
        var productid = this.props.location.state.ProductID;
        // productID refers to the one in file ProductList.js
        axios.get('http://localhost:8000/getproductdata/'+productid).then(
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

    deleteProduct = (e) => 
    {
        axios.post(`http://localhost:8000/deleteproduct/`, {
            productid: e.idproduct.value,
            productname: e.nameproduct.value,
            categoryid: e.idcategory.value,
            productprice: e.priceproduct.value
          });
    }
 
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Edit Data</legend>

                <input type="number" className="form-control" ref="idproduct" value={this.state.idproduct} />
                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Name</label>
                    <div className="col-lg-10">
                        <input ref="nameproduct" type="text" defaultValue={this.state.nameproduct} className="form-control" />
                    </div>
                </div>

                 <div className="form-group">
                    <label className="col-lg-2 control-label">Category ID</label>
                    <div className="col-lg-10">
                        <input ref="idcategory" type="text" defaultValue={this.state.idcategory} className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price</label>
                    <div className="col-lg-10">
                        <input ref="priceproduct" type="text" defaultValue={this.state.priceproduct} className="form-control" />
                    </div>
                </div>

                <div>
                    <h4>Are you sure will DELETE this product?</h4>
                    <br/>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                        <button type="button" onClick={() => this.deleteProduct(this.refs)} className="btn btn-primary">Yes, Delete</button>
                    </div>
                </div>
            </fieldset>
        </form>
      </div>
    )
  }
}
export default FormEdit

// PROBLEM: defaultValue doesnt work, nothing appear in the input box; except if we click "Cancel" button
