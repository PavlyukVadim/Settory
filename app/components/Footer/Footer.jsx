import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
  
  render() {
    let isAdmin = !~window.location.href.indexOf('#/user/');
    let mediateRoute = isAdmin ? '/admin' : '/user';
    return (
      <footer>
        <div className="wrapperFooter">
          <div className="footerBlock">
            <div className="footerContent">
              <div className="footerContentBox">
                <Link to={`${mediateRoute}/newOrder`}>
                  <img className="logo" src="./static/img/logo.png"></img>
                </Link>
                <div className="tags">
                  <a href="https://www.instagram.com/settory/" className="SettoryId">#settory</a>
                  <a href="https://www.instagram.com/explore/tags/settoryclean/" className="SettoryId">#settoryclean</a>
                </div>
              </div>
              <div className="footerContentBox">
                <div className="site-map">
                  {isAdmin &&
                    <div className="admin-nav-links">
                      <Link to={`${mediateRoute}/promoCodes`}>Промокод</Link>
                      <Link to={`${mediateRoute}/allUsers`}>Користувачі</Link>
                      <Link to={`${mediateRoute}/allOrders`}>Замовлення</Link>
                    </div>
                  }
                  <Link to={`${mediateRoute}/yourOrders`}>Ваші прибирання</Link>
                </div>
              </div>
              <div className="footerContentBox iconBlock">
                <div>
                  <p>Потрібна допомога - телефонуйте: <br></br> 068 305 82 54</p>
                  <div>
                    <a href="mailto:settory@i.ua" className="icon-fa">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.facebook.com/settory.clean/" className="icon-fa">
                      <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/settory/" className="icon-fa">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> 
    )
  }
}

export default Footer;
