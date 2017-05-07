import React, { Component } from 'react';

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


class AdminOrders extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      orders: ordersArr,
      page: 1,
      numberOfPages: Math.floor(ordersArr.length / 10) + 1,
      filterByStatus: 'all'
    };
    this.changeFilterByStatus = this.changeFilterByStatus.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.getTBody = this.getTBody.bind(this);
    this.getPagination = this.getPagination.bind(this);
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

  changeFilterByStatus() {
    let newValue = this.selectStatusFilter.value;
    let orders = this.state.orders.filter((order) => {
      if (newValue === 'all' ||
          newValue === 'active' && order.status === 'Aктивно' ||
          newValue === 'completed' && order.status === 'Завершено' ||
          newValue === 'expected' && order.status === 'Очікується') {
        return true;
      }
    });
    let newNumberOfPages = Math.floor(orders.length / 10) + 1; 
    this.setState((prevState) => {
      return {
        page: 1,
        filterByStatus: newValue,
        numberOfPages: newNumberOfPages
      };
    });
  }

  getTBody() {
    let optionsArr = ['Миття вікон', 'Миття посуду', 'Чистка холодильника', 'Чистка духовки', 'Прасування'];
    let ordersOnPage = 10;
    let currPage = this.state.page;
    let currFilterByStatus = this.state.filterByStatus;
    let orders = this.state.orders.filter((order) => {
      if (currFilterByStatus === 'all' ||
          currFilterByStatus === 'active' && order.status === 'Aктивно' ||
          currFilterByStatus === 'completed' && order.status === 'Завершено' ||
          currFilterByStatus === 'expected' && order.status === 'Очікується') {
        return true;
      }
    });
    orders = orders.slice((currPage - 1) * ordersOnPage, currPage * ordersOnPage);
    let tBody = orders.map((order, orderIndex) => {
      let options = optionsArr.filter((optionTitle, index) => {
        return order.options.indexOf(index + 1) !== -1;
      }).map((option, index) => {
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
            <div className="pages">{this.getPagination()}</div>
            <a className="button" onClick={this.prevPage}>Попередня</a>
            <a className="button" onClick={this.nextPage}>Наступна</a>
          </nav>
        </div>
      </div>
    )
  }  
}

export default AdminOrders;
