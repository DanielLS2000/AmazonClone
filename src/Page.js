import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';

export const Page_Home = () => (
  <div>
    <Header/>
    <Home/>
  </div>
);

export const Page_Checkout = () => (
    <div>
        <Header/>
        <Checkout/>
    </div>
);

export const Page_Login = () => (
  <div>
    <Login/>
  </div>
);

export const Page_Payment = () => (
  <div>
    <Header/>
    <Payment/>
  </div>
);
