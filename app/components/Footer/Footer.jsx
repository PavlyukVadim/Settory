import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  
  render() {
    return (
      <footer>
        <div className="wrapperFooter">
          <div className="footerBlock">
            <div className="footerContent">
              <div className="footerContentBox">
                <Link to="/newOrder">
                  <img className="logo" src="./static/img/logo.png"></img>
                </Link>
                <div className="tags">
                  <a href="https://www.instagram.com/settory/" className="SettoryId">#settory</a>
                  <a href="https://www.instagram.com/explore/tags/settoryclean/" className="SettoryId">#settoryclean</a>
                </div>
              </div>
              <div className="footerContentBox">
                <div className="site-map">
                  <Link to="/promoCodes">Промокод</Link>
                  <Link to="/allUsers">Користувачі</Link>
                  <Link to="/allOrders">Замовлення</Link>
                  <Link to="/yourOrders">Ваші прибирання</Link>
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
