import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

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
