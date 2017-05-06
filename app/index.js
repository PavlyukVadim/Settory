import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';

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
    	<Route path = "/neworder" component = {OrderBox} />
    	<Route path = "/promocodes" component = {PromoCodes} />
    	<Route path = "/allusers" component = {AdminUsers} />
    	<Route path = "/allorders" component = {AdminOrders} />
    	<Route path = "/yourorders" component = {ClientOrders} />
    	<Footer />
    </div>
</HashRouter>
), document.getElementById('root'));