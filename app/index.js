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
import './index.css';

function getHostName() {
  return window.location.origin;
}

ReactDOM.render((
  <HashRouter>
    <div>
		<Header/>
    	<Route path = "/admin/newOrder" render={props => <OrderBox hostname={getHostName()} {...props}/>}/>
    	<Route path = "/admin/promoCodes" render={props => <PromoCodes hostname={getHostName()} {...props}/>}/>
    	<Route path = "/admin/allUsers" render={props => <AdminUsers hostname={getHostName()} {...props}/>}/>
      <Route path = "/admin/user:id" render={props => <UserDetails hostname={getHostName()} {...props}/>}/>
    	<Route path = "/admin/allOrders" render={props => <AdminOrders hostname={getHostName()} {...props}/>}/>
    	<Route path = "/admin/yourOrders" render={props => <ClientOrders hostname={getHostName()} {...props}/>}/>
      <Route path = "/user/newOrder" render={props => <OrderBox hostname={getHostName()} {...props}/>}/>
      <Route path = "/user/yourOrders" render={props => <ClientOrders hostname={getHostName()} {...props}/>}/>
    	<Footer />
    </div>
  </HashRouter>
), document.getElementById('root'));
