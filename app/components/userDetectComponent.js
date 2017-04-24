var UserDetect =  React.createClass({
    
    render: function() {
        if (this.props.user == 1 ) {
            return (
              <div className="nav-right_custom">
                <a className="nav-item" id="promo"> Промокод </a>
                <a className="nav-item" id="user">Користувачі</a>
                <a className="nav-item"id="order">Замовлення</a>
                <a className="nav-item" id="userOrder">Ваші прибирання</a>
                <a className="nav-item" href="../">Вийти</a>
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
