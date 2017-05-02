var YourOrdersWrap = React.createClass({
  
  render: function() {
    return (
      <div>
        <div className="wrapperNav">
          <div className="navText">
            <p><strong>Ваші прибирання</strong> Заплануйте нові прибирання та контролюйте вже заплановані</p>
          </div>
        </div>
        <YourOrders ordersArr={ordersArr}/>
      </div>
    );
  }
});


var YourOrders = React.createClass({
    
  getInitialState: function() {
    return {
      orders: this.props.ordersArr,
      page: 1,
      filterByStatus: 'Очікується'
    };
  },

  switchFilter: function() {
    this.setState((prevState) => {
      return {
        filterByStatus: prevState.filterByStatus === 'Очікується' ? 'Завершено' : 'Очікується'
      };
    })
  },

  nextPage: function() {
    var currPage = this.state.page;
    var orders = this.state.orders.filter(function(order) {
      return order.status === currFilterByStatus;
    });
    if (currPage <= orders.length / 10) {
      this.setState((prevState) => {
        return {
          page: prevState.page + 1
        };
      })
    }
  },

  prevPage: function() {
    var currPage = this.state.page;
    if (currPage > 1) {
      this.setState((prevState) => {
        return {
          page: prevState.page - 1
        };
      })
    }
  },

  getTBody: function() {
    var optionsArr = ['Миття вікон', 'Миття посуду', 'Чистка холодильника', 'Чистка духовки', 'Прасування'];
    var ordersOnPage = 10;
    var currPage = this.state.page;
    var currFilterByStatus = this.state.filterByStatus;
    var orders = this.state.orders.filter(function(order) {
      return order.status === currFilterByStatus;
    });
    orders = orders.slice((currPage - 1) * ordersOnPage, currPage * ordersOnPage);
    var tBody = orders.map(function(order, orderIndex) {
      
      var options = optionsArr.filter(function(optionTitle, index) {
        return order.options.indexOf(index + 1) !== -1;
      }).map(function(option, index) {
        return (<li key={index}>{option}</li>);
      });

      return (
        <tr key={orderIndex}>
          <td>{order.orderNumber}</td>
          <td>{order.mail}</td>
          <td>{order.phone}</td>
          <td>{order.address}</td>
          <td>{order.numberOfRooms}</td>
          <td>{order.time} {order.date}</td>
          <td><ul>{options}</ul></td>
          <td>{order.price}</td>
          <td>{order.status}</td>
        </tr>
      );
    });

    return tBody;
  },

  render: function() {
    console.log(this.state.filterByStatus);
    return (
      <div>
        <div>
          <div className="navButton">
            <div className="firstButtonBlock">
              <a className="button is-info">Заплановані прибирання</a>
              <div className="toggleBox">
                <input type="checkbox" name="toggle" id="toggle" onChange={this.switchFilter}/>
                <label htmlFor="toggle"/>
              </div>
              <a className="button">Проведені прибирання</a>
            </div>
            <a className="button is-success order-cleaning">Замовити прибирання</a>
          </div>
        </div>
        <div className="wrapperTable1">
          <table className="table is-narrow">
            <thead>
              <tr>
                <td><strong>#</strong></td>
                <td><strong>Пошта</strong></td>
                <td><strong>Номер телефону</strong></td>
                <td><strong>Адреса</strong></td>
                <td><strong>К</strong></td>
                <td><strong>Час і дата</strong></td>
                <td><strong>Опції</strong></td>
                <td><strong>Сплачено</strong></td>
                <td><strong>Статус</strong></td>
              </tr>
            </thead>
            <tbody>{this.getTBody()}</tbody>
          </table>
          <nav className="pagination">
            <a className="button" onClick={this.prevPage}>Попередня</a>
            <a className="button" onClick={this.nextPage}>Наступна</a>
          </nav>
        </div>
      </div>
    )
  }
});
