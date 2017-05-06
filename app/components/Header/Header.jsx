import React, { Component } from 'react';

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
                <a className="nav-item promocode-link">Промокод</a>
                <a className="nav-item users-link">Користувачі</a>
                <a className="nav-item orders-link">Замовлення</a>
                <a className="nav-item your-cleaning-link">Ваші прибирання</a>
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
              <a className="nav-item" id="userOrder">Ваші прибирання</a>
              <a className="nav-item" href="../">Вийти</a>
            </div>
          </div>
        </header>
      )
    }
  }
}

export default Header;
