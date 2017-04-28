var MyHeader =  React.createClass({
    
    render: function() {
      if (this.props.user == 1 ) {
        return (
          <div className="wrapperHeader ">
            <div className="navbar">
              <div className="navbarLogo">
                <img className="logo" src="../../static/img/logo.png"></img>
              </div>
              <div className="mobile">
                <a className="nav-item promocode-link">Промокод</a>
                <a className="nav-item users-link">Користувачі</a>
                <a className="nav-item orders-link">Замовлення</a>
                <a className="nav-item our-cleaning-link">Ваші прибирання</a>
                <a className="nav-item" href="../">Вийти</a>  
              </div>
            </div>
          </div>
        )
      } else {
          return (
            <div className="nav">
              <div className="nav-left">
                <a className="nav-item" href="../">Settory</a>
              </div>
              <div className="nav-right_custom">
                <a className="nav-item" id="userOrder">Ваші прибирання</a>
                <a className="nav-item" href="../">Вийти</a>
              </div>
            </div>
          )
      }
    }
});
