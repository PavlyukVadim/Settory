var AllOrdersComponent = React.createClass({
    
  getInitialState: function() {
    return {
      orders: this.props.ordersArr,
      page: 1,
      filterByStatus: 'all'
    };
  },

  nextPage: function() {
    var currPage = this.state.page;
    var currFilterByStatus = this.state.filterByStatus;
    var orders = this.state.orders.filter(function(order) {
      if (currFilterByStatus === 'all' ||
          currFilterByStatus === 'active' && order.status === 'Aктивно' ||
          currFilterByStatus === 'completed' && order.status === 'Завершено' ||
          currFilterByStatus === 'expected' && order.status === 'Очікується') {
        return true;
      }
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

  changeFilterByStatus: function() {
    var newValue = this.selectStatusFilter.value;
    this.setState((prevState) => {
      return {
        page: 1,
        filterByStatus: newValue
      };
    })
  },

  getTBody: function() {
    var optionsArr = ['Миття вікон', 'Миття посуду', 'Чистка холодильника', 'Чистка духовки', 'Прасування'];
    var ordersOnPage = 10;
    var currPage = this.state.page;
    var currFilterByStatus = this.state.filterByStatus;
    var orders = this.state.orders.filter(function(order) {
      if (currFilterByStatus === 'all' ||
          currFilterByStatus === 'active' && order.status === 'Aктивно' ||
          currFilterByStatus === 'completed' && order.status === 'Завершено' ||
          currFilterByStatus === 'expected' && order.status === 'Очікується') {
        return true;
      }
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
    return (
      <div>
        <div className="wrapperNav">
          <div className="navText">
            <p><strong>Замовлення</strong> Опрацювати кожне необхідно протягом 5 хвилин</p>
            <select defaultValue="all" 
                    onChange={this.changeFilterByStatus}
                    ref={(input) => {this.selectStatusFilter = input;}}>
              <option value="active">Aктивні</option>
              <option value="completed">Завершені</option>
              <option value="expected">Очікуються</option>
              <option value="all">Усі</option>
            </select>
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
