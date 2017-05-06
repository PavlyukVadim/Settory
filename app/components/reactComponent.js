var userBox = 1;
ReactDOM.render(<MyHeader user={userBox}/>, $('header')[0]);
ReactDOM.render(<OrderBox/>, document.getElementById('reactBox'));
ReactDOM.render(<MyFooter/>, $('footer')[0]);

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
