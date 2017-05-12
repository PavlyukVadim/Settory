import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClientOrders extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      page: 1,
      numberOfPages: 0,
      filterByStatus: 'new in_progress'
    };
    this.fetchOrders();
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.switchFilter = this.switchFilter.bind(this);
    this.getTBody = this.getTBody.bind(this);
    this.getPagination = this.getPagination.bind(this);
    this.getFormattedStatus = this.getFormattedStatus.bind(this);
    let isAdmin = !~window.location.href.indexOf('#/user/');
    this.mediateRoute = isAdmin ? '/admin' : '/user';
  }
  
  fetchOrders() {
    let hostname = this.props.hostname;
    fetch(`${hostname}/orders.json`, {
            method: 'GET',
            credentials: 'include'
          })
          .then(response => response.json())
          .then(arrayOfOrders => this.setOrders(arrayOfOrders));
  }

  setOrders(arrayOfOrders) {
    this.setState({
      orders: arrayOfOrders,
      numberOfPages: Math.ceil(arrayOfOrders.filter((order) => ~'new in_progress'.indexOf(order.status)).length / 10)
    })
  }

  switchFilter() {
    let currFilterByStatus = this.state.filterByStatus === 'new in_progress' ? 'done' : 'new in_progress';
    let orders = this.state.orders.filter((order) => ~currFilterByStatus.indexOf(order.status));
    let newNumberOfPages = Math.ceil(orders.length / 10);
    this.setState((prevState) => {
      return {
        filterByStatus: currFilterByStatus,
        numberOfPages: newNumberOfPages
      };
    })
  }

  nextPage() {
    let currPage = this.state.page;
    let numberOfPages = this.state.numberOfPages;
    if (currPage < numberOfPages) {
      this.setState((prevState) => {
        return {
          page: prevState.page + 1
        };
      })
    }
  }

  prevPage() {
    let currPage = this.state.page;
    if (currPage > 1) {
      this.setState((prevState) => {
        return {
          page: prevState.page - 1
        };
      })
    }
  }

  getTBody() {
    if (!this.state.orders.length) {
      return;
    }
    let optionsArr = ['Миття вікон', 'Миття посуду', 'Чистка холодильника', 'Чистка духовки', 'Прасування'];
    let ordersOnPage = 10;
    let currPage = this.state.page;
    let currFilterByStatus = this.state.filterByStatus;
    let orders = this.state.orders.filter((order) => ~currFilterByStatus.indexOf(order.status));
    orders = orders.slice((currPage - 1) * ordersOnPage, currPage * ordersOnPage);
    let tBody = orders.map((order, orderIndex) => {
      let optionsKeys = Object.keys(orders[orderIndex].options);
      let options = optionsArr.filter((optionTitle, index) => {
        return order.options[optionsKeys[index]] === "true";
      }).map((option, index) => {
        return (<li key={index}>{option}</li>);
      });

      return (
        <tr key={orderIndex}>
          <td>{order.id}</td>
          <td>{order.address}</td>
          <td>{order.num_of_rooms}</td>
          <td>
            {order.time_order.slice(11, 16) + ' '} 
            {order.date_order} 
          </td>
          <td><ul>{options}</ul></td>
          <td>{order.amount}</td>
          <td>{this.getFormattedStatus(order.status)}</td>
        </tr>
      );
    });
    return tBody;
  }

  getFormattedStatus(status) {
    switch(status) {
      case 'new': return 'Очікується'
      case 'in_progress': return 'Очікується'
      case 'done': return 'Завершено'
    }
  }

  getPagination() {
    let currPage = this.state.page;
    let newNumberOfPages = this.state.numberOfPages;
    if (newNumberOfPages > 1) {
      return (
        <p>{`${currPage} з ${newNumberOfPages}`}</p>
      );
    } else {
      return (
        <p></p>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="wrapperNav">
          <div className="navText">
            <p><strong>Ваші прибирання</strong> Заплануйте нові прибирання та контролюйте вже заплановані</p>
          </div>
        </div>
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
              <Link to={`${this.mediateRoute}/newOrder`} className="button is-success order-cleaning">Замовити прибирання</Link>
            </div>
          </div>
          <div className="wrapperTable1">
            <table className="table is-narrow">
              <thead>
                <tr>
                  <td><strong>#</strong></td>
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
              <div className="pages">{this.getPagination()}</div>
              <a className="button" onClick={this.prevPage}>Попередня</a>
              <a className="button" onClick={this.nextPage}>Наступна</a>
            </nav>
          </div>
        </div>
      </div>
    )
  }  
}

export default ClientOrders;
