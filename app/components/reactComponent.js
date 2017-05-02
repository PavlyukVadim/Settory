var Example = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },

  render: function() {
    return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}/>;
  }
});

var userBox = 1;
ReactDOM.render(<MyHeader user={userBox}/>, $('header')[0]);
ReactDOM.render(<OrderBox/>, document.getElementById('reactBox'));
ReactDOM.render(<MyFooter/>, $('footer')[0]);

function userData(mail, dTime, phone) {
  this.mail = mail;
  this.dTime = dTime;
  this.phone = phone;
}

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

var dataArr = [new userData('sample.mail1@mail.com','2012-10-10','0935556644'),
               new userData('sample.mail2@mail.com','2012-11-11','0932223311'),
               new userData('sample.mail3@mail.com','2012-12-12','0507778899')];

var promoArr = [new PromoCode('10', '2012-10-10', 'PromoCode1'),
                new PromoCode('20', '2012-11-11', 'PromoCode2'),
                new PromoCode('30', '2012-12-12', 'PromoCode3')];

var ordersArr = [order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3];

$('#reloadF, .logo, .order-cleaning').click(function() {
  $('reactBox').empty();
  ReactDOM.render(<OrderBox/>, document.getElementById('reactBox'));
});

$(".orders-link").click(function() {
  $('#reactBox').empty();
  $('.nav-item').removeClass("is-active");
  $('.orders-link').addClass("is-active");
  ReactDOM.render(<AllOrdersComponent ordersArr={ordersArr}/>, document.getElementById('reactBox'));
});

$('.promocode-link').click(function() {
  $('#reactBox').empty();
  $('.nav-item').removeClass('is-active');
  $('.promocode-link').addClass('is-active');
  ReactDOM.render(<ShowPromo items={promoArr}/>, document.getElementById('reactBox'));
});

$('.users-link').click(function() {
  $('#reactBox').empty();
  $('.nav-item').removeClass("is-active");
  $('.users-link').addClass("is-active");
  ReactDOM.render(<FilteredList itemsIn={dataArr}/>, document.getElementById('reactBox'));
});

$('.your-cleaning-link').click(function() {
  $('#reactBox').empty();
  $('.nav-item').removeClass("is-active");
  $('.our-cleaning-link').addClass("is-active");
  ReactDOM.render(<YourOrdersWrap/>, document.getElementById('reactBox'))
});
