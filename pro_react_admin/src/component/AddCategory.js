import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class AddCategory extends Component {
  addCategory = (event) => {
      axios.post(`http://localhost:8000/addcategory`, {
          input1: event.categoryname.value,
          input2: event.categorydesc.value,
        });
  }
 
  render() {
    
    return (
      <div className="container">
      <Header />
      <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Add Product Category</legend>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Category Name</label>
                    <div className="col-lg-10">
                        <input ref="categoryname" type="text" className="form-control" placeholder="Category name ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Description</label>
                    <div className="col-lg-10">
                        <input ref="categorydesc" type="text" className="form-control"  placeholder="Category description ..." />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                        <button type="button" onClick={() => this.addCategory(this.refs)} className="btn btn-primary">Add</button>
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
      </div>
    )
  }
}
export default AddCategory
