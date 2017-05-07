import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function orderData(orderObj) {
  this.orderNumber = orderObj.orderNumber;
  this.mail = orderObj.mail;
  this.phone = orderObj.phone;
  this.address = orderObj.address;
  this.numberOfRooms = orderObj.numberOfRooms;
  this.time = orderObj.time;
  this.date = orderObj.date;
  this.options = orderObj.options;
  this.price = orderObj.price;
  this.status = orderObj.status;
}

var order1 = new orderData({
  orderNumber: 1,
  mail: 'sample.mail1@mail.com',
  phone: '0935556644',
  address: 'Atlantic City, NJ 08401',
  numberOfRooms: 2,
  time: '20:16',
  date: '21/12/2016',
  options: [1, 2],
  price: 500,
  status: 'Aктивно'
});

var order2 = new orderData({
  orderNumber: 2,
  mail: 'sample.mail1@mail.com',
  phone: '093556544',
  address: 'Atlantic City, NJ 08546',
  numberOfRooms: 1,
  time: '20:15',
  date: '22/02/2009',
  options: [1, 4],
  price: 600,
  status: 'Завершено'
});

var order3 = new orderData({
  orderNumber: 3,
  mail: 'sample.mail1@mail.com',
  phone: '093556654',
  address: 'Atlantic City, NJ 65335',
  numberOfRooms: 3,
  time: '12:56',
  date: '22/02/2019',
  options: [1, 3],
  price: 700,
  status: 'Очікується'
});

var ordersArr = [order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3];


class ClientOrders extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      orders: ordersArr,
      page: 1,
      filterByStatus: 'Очікується'
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.switchFilter = this.switchFilter.bind(this);
    this.getTBody = this.getTBody.bind(this);
  }
  
  switchFilter() {
    this.setState((prevState) => {
      return {
        filterByStatus: prevState.filterByStatus === 'Очікується' ? 'Завершено' : 'Очікується'
      };
    })
  }

  nextPage() {
    let currPage = this.state.page;
    let orders = this.state.orders.filter((order) => order.status === currFilterByStatus);
    if (currPage <= orders.length / 10) {
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
    let optionsArr = ['Миття вікон', 'Миття посуду', 'Чистка холодильника', 'Чистка духовки', 'Прасування'];
    let ordersOnPage = 10;
    let currPage = this.state.page;
    let currFilterByStatus = this.state.filterByStatus;
    let orders = this.state.orders.filter((order) => order.status === currFilterByStatus);
    orders = orders.slice((currPage - 1) * ordersOnPage, currPage * ordersOnPage);
    let tBody = orders.map((order, orderIndex) => {
      let options = optionsArr.filter((optionTitle, index) => order.options.indexOf(index + 1) !== -1)
                              .map((option, index) => (<li key={index}>{option}</li>));
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
              <Link to="/newOrder" className="button is-success order-cleaning">Замовити прибирання</Link>
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
      </div>
    )
  }  
}

export default ClientOrders;
