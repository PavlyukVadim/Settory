var AllOrdersWrap = React.createClass({
  
  render: function() {
    return (
      <div>
        <div className="wrapperNav">
          <div className="navText">
            <p><strong>Замовлення</strong> Опрацювати кожне необхідно протягом 5 хвилин</p>
          </div>
        </div>
        <AllOrders ordersArr={ordersArr}/>
      </div>
    );
  }
});


var AllOrders = React.createClass({
    
  getInitialState: function() {
    return {
      orders: this.props.ordersArr,
      page: 1
    };
  },

  nextPage: function() {
    var currPage = this.state.page;
    if (currPage <= this.state.orders.length / 10) {
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

    var orders = this.state.orders.slice((currPage - 1) * ordersOnPage, currPage * ordersOnPage);
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
    return (
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
    )
  }
});
