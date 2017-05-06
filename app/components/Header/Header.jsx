import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    if (this.props.user == 1 ) {
      return (
        <header>
          <div className="wrapperHeader ">
            <div className="navbar">
              <div className="navbarLogo">
                <img className="logo" src="./static/img/logo.png"></img>
              </div>
              <div className="mobile">
                <Link to="/promoCodes">Промокод</Link>
                <Link to="/allUsers">Користувачі</Link>
                <Link to="/allOrders">Замовлення</Link>
                <Link to="/yourOrders">Ваші прибирання</Link>
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
              <Link to="/yourOrders">Ваші прибирання</Link>
              <a className="nav-item" href="../">Вийти</a>
            </div>
          </div>
        </header>
      )
    }
  }
}

export default Header;
