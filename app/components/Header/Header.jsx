import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    console.log(this.props);
    if (this.props.user == 1 ) {
      return (
        <header>
          <div className="wrapperHeader ">
            <div className="navbar">
              <div className="navbarLogo">
                <Link to="/newOrder">
                  <img className="logo" src="./static/img/logo.png"></img>
                </Link>
              </div>
              <div className="mobile">
                <NavLink to="/promoCodes" activeClassName="selected" className="nav-item">Промокод</NavLink>
                <NavLink to="/allUsers" activeClassName="selected" className="nav-item">Користувачі</NavLink>
                <NavLink to="/allOrders" activeClassName="selected" className="nav-item">Замовлення</NavLink>
                <NavLink to="/yourOrders" activeClassName="selected" className="nav-item">Ваші прибирання</NavLink>
                <a className="nav-item" href="../">Вийти</a>  
              </div>
            </div>
          </div>
        </header>
      )
    } else {
      return (
        <header>
          <div className="nav">
            <div className="nav-left">
              <a className="nav-item" href="../">Settory</a>
            </div>
            <div className="nav-right_custom">
              <Link to="/yourOrders" className="nav-item">Ваші прибирання</Link>
              <a className="nav-item" href="../">Вийти</a>
            </div>
          </div>
        </header>
      )
    }
  }
}

export default Header;
