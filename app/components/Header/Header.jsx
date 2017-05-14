import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    this.setState((prevState) => {
      return {
        isShowMenu: !prevState.isShowMenu,
      };
    });
  }

  render() {
    let isAdmin = !~window.location.href.indexOf('#/user/');
    let mediateRoute = isAdmin ? '/admin' : '/user';
    let styleObj = {
      left: this.state.isShowMenu ? '0' : '100%'
    }
    return (
      <header>
        <div className="wrapperHeader ">
          <div className="navbar">
            <div className="navbarLogo">
              <Link to={`${mediateRoute}/newOrder`}>
                <img className="logo" src="./static/img/logo.png"></img>
              </Link>
            </div>
            <div id="menu">
              <a id="icon-menu" onClick={this.showMenu}>
                <i className="fa fa-bars"></i>
              </a>
              <div className="mobile" style={styleObj}>
                {isAdmin &&
                  <div className="admin-nav-links">
                    <NavLink to={`${mediateRoute}/promoCodes`} activeClassName="selected" className="nav-item">Промокод</NavLink>
                    <NavLink to={`${mediateRoute}/allUsers`} activeClassName="selected" className="nav-item">Користувачі</NavLink>
                    <NavLink to={`${mediateRoute}/allOrders`} activeClassName="selected" className="nav-item">Замовлення</NavLink>
                  </div>
                }
                <NavLink to={`${mediateRoute}/yourOrders`} activeClassName="selected" className="nav-item">Ваші прибирання</NavLink>
                <a className="nav-item" href="../">Вийти</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
