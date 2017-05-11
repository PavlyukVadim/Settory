import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import OrderBox from './components/OrderBox/OrderBox.jsx';
import PromoCodes from './components/PromoCodes/PromoCodes.jsx';
import AdminUsers from './components/AdminUsers/AdminUsers.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import AdminOrders from './components/AdminOrders/AdminOrders.jsx';
import ClientOrders from './components/ClientOrders/ClientOrders.jsx';
import Registration from './components/Registration/Registration.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import './index.css';

ReactDOM.render((
  <HashRouter>
    <div>
		<Header/>      
    	<Route path = "/admin/newOrder" component = {OrderBox} />
    	<Route path = "/admin/promoCodes" component = {PromoCodes} />
    	<Route path = "/admin/allUsers" component = {AdminUsers} />
      <Route path = "/admin/user:id" component = {UserDetails} />
    	<Route path = "/admin/allOrders" component = {AdminOrders} />
    	<Route path = "/admin/yourOrders" component = {ClientOrders} />
      <Route path = "/user/newOrder" component = {OrderBox} />
      <Route path = "/user/yourOrders" component = {ClientOrders} />
    	<Footer />
    </div>
  </HashRouter>
), document.getElementById('root'));
