import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Login from './component/Login';
import ProductList from './component/ProductList';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import DeleteProduct from './component/DeleteProduct';
import Invoices from './component/Invoices';
import SingleInvoice from './component/SingleInvoice';
import ProductCategories from './component/ProductCategories';
import AddCategory from './component/AddCategory';
import EditCategory from './component/EditCategory';

class App extends Component {
  render() 
  {
    return (

      <div>
            {/* <Route exact path ="/" component={Login}/> */}
            <Route exact path ="/" component={ProductList}/>
            <Route path="/productcategories" component={ProductCategories}/>
            <Route path="/productlist" component={ProductList}/>
            <Route path="/invoices" component={Invoices}/>
            <Route path="/singleinvoice" component={SingleInvoice}/>
            <Route path="/addproduct" component={AddProduct}/>
            <Route path="/editproduct" component={EditProduct}/>
            <Route path="/deleteproduct" component={DeleteProduct}/>
            <Route path="/addcategory" component={AddCategory}/>
            <Route path="/editcategory" component={EditCategory}/>
          </div>
    );
  }
}

export default App;