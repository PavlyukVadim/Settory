import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import OrderBox from './components/OrderBox/OrderBox.jsx';
import PromoCodes from './components/PromoCodes/PromoCodes.jsx';
import AdminUsers from './components/AdminUsers/AdminUsers.jsx';
import AdminOrders from './components/AdminOrders/AdminOrders.jsx';
import ClientOrders from './components/ClientOrders/ClientOrders.jsx';
import './index.css';

ReactDOM.render((
  <HashRouter>
    <div>
		<Header user={1} />
    	<Route path = "/newOrder" component = {OrderBox} />
    	<Route path = "/promoCodes" component = {PromoCodes} />
    	<Route path = "/allUsers" component = {AdminUsers} />
    	<Route path = "/allOrders" component = {AdminOrders} />
    	<Route path = "/yourOrders" component = {ClientOrders} />
    	<Footer />
    </div>
  </HashRouter>
), document.getElementById('root'));
