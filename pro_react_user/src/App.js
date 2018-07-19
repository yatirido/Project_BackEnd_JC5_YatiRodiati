import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Home from './component/Home';
import UserInfo from './component/UserInfo';
import TransactionHistory from './component/TransactionHistory';
import DeliveryAddress from './component/DeliveryAddress';
import SingleProduct from './component/SingleProduct';
import Products from './component/Products';
import Register from './component/Register';
import Login from './component/Login';
import ShoppingCart from './component/ShoppingCart';


class App extends Component {
  render() 
  {
    return (

      <div>
            <Route exact path ="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/shoppingcart" component={ShoppingCart}/>
            <Route path="/deliveryaddress" component={DeliveryAddress}/>
            <Route path="/userinfo" component={UserInfo}/>
            <Route path="/transactionhistory" component={TransactionHistory}/>
            <Route path="/products" component={Products}/>
            <Route path="/singleproduct" component={SingleProduct}/>
       
          </div>
    );
  }
}

export default App;
