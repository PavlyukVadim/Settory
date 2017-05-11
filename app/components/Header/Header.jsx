import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    if (!~window.location.href.indexOf('#/user/')) {
      return (
        <header>
          <div className="wrapperHeader ">
            <div className="navbar">
              <div className="navbarLogo">
                <Link to="/admin/newOrder">
                  <img className="logo" src="./static/img/logo.png"></img>
                </Link>
              </div>
              <div className="mobile">
                <NavLink to="/admin/promoCodes" activeClassName="selected" className="nav-item">Промокод</NavLink>
                <NavLink to="/admin/allUsers" activeClassName="selected" className="nav-item">Користувачі</NavLink>
                <NavLink to="/admin/allOrders" activeClassName="selected" className="nav-item">Замовлення</NavLink>
                <NavLink to="/admin/yourOrders" activeClassName="selected" className="nav-item">Ваші прибирання</NavLink>
                <a className="nav-item" href="../">Вийти</a>  
              </div>
            </div>
          </div>
        </header>
      )
    } else {
      return (
        <header>
          <div className="wrapperHeader ">
            <div className="navbar">
              <div className="navbarLogo">
                <Link to="/user/newOrder">
                  <img className="logo" src="./static/img/logo.png"></img>
                </Link>
              </div>
              <div className="mobile">
                <NavLink to="/user/yourOrders" activeClassName="selected" className="nav-item">Ваші прибирання</NavLink>
                <a className="nav-item" href="../">Вийти</a>  
              </div>
            </div>
          </div>
        </header>
      )
    }
  }
}

export default Header;
