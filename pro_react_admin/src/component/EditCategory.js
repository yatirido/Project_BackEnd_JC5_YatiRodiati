import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class EditCategory extends Component {

    state = {
        categoryid: '',
        categoryname: '',
        categorydesc: ''
    }

    componentDidMount()
    {
        var categoryid = this.props.location.state.CategoryID;
        // CategoryID refers to the one in file ProductCategories.js
        axios.get('http://localhost:8000/getcategorydata/'+categoryid).then(
            (getdata) => 
            {
                console.log(getdata)
                this.setState(
                {
                    idcat: getdata.data[0].categoryID,
                    namecat: getdata.data[0].categoryName,
                    descriptioncat: getdata.data[0].description
                })
            })
    }

    updateCategory = (e) => 
    {
        axios.post(`http://localhost:8000/editcategory/`, {
            categoryid: e.idcat.value,
            categoryname: e.namecat.value,
            categorydesc: e.descriptioncat.value,
          });
    }
 
  render() {
    return (
      <div className="container">
      <Header />
        <form className="form-horizontal">
            <fieldset>
                <legend>Edit Category</legend>

                <input type="hidden" className="form-control" ref="idcat" value={this.state.idcat} />
                <div className="form-group">
                    <label className="col-lg-2 control-label">Category Name</label>
                    <div className="col-lg-10">
                        <input ref="namecat" type="text" Value={this.state.namecat} className="form-control" />
                    </div>
                </div>

                 <div className="form-group">
                    <label className="col-lg-2 control-label">Description</label>
                    <div className="col-lg-10">
                        <input ref="descriptioncat" type="text" Value={this.state.descriptioncat} className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                        <button type="button" onClick={() => this.updateCategory(this.refs)} className="btn btn-primary">Update</button>
                    </div>
                </div>
            </fieldset>
        </form>
      </div>
    )
  }
}
export default EditCategory

// PROBLEM: defaultValue doesnt work, nothing appear in the input box; except if we click "Cancel" button
