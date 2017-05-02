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
      onChange={this.handleChange} />;
  }
});


var userBox = 1;
ReactDOM.render(<MyHeader user={userBox}/>, $('header')[0]);
ReactDOM.render(<OrderBox/>, document.getElementById('reactBox'));
ReactDOM.render(<MyFooter/>, $('footer')[0]);

var i = 0;
var j =0;

function dataCod(mail,dTime,phone) {
  this.mail = mail;
  this.dTime = dTime;
  this.phone = phone;
}

function orderCod(numberValue, mail, phone, adress, room, dTimeH, dTimeD, option, pay, status) {
  this.numberValue = numberValue;
  this.mail = mail;
  this.phone = phone;
  this.adress = adress;
  this.room = room;
  this.dTimeH = dTimeH;
  this.dTimeD = dTimeD;
  this.option = option;
  this.pay = pay;
  this.status = status;
}

var order1 = new orderCod(1,'blabla@mail.com','0935556644','ShitIt st',2,'20:16','2k16',[1,2],500,false);
var order2 = new orderCod(2,'albalb@mail.com','0932223311','ShitHi st',1,'20:15','2k14',[1,4],600,false);
var order3 = new orderCod(3,'lablab@mail.com','0507778899','ShitHer st',3,'20:20','2k15',[1,3],700,true);

var dataArr = [new dataCod('1asdasf@mail','2012-10-10','000665'),
               new dataCod('2f@mail','2012-11-11','000665555'),
               new dataCod('3f@mail','2012-12-12','000')];

var promoArr = [new PromoCode('10', '2012-10-10', 'Blablabla1'),
                new PromoCode('20', '2012-11-11', 'Blablabla2'),
                new PromoCode('30', '2012-12-12', 'Blablabla3')];

var orderArr = [order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3,
                order1,order2,order3];

var spliceArr = [];
var copyArr = orderArr.slice();

do {
  spliceArr.push(copyArr.splice(0,20))
} while(copyArr[0] !== undefined);


var ShowOrderWrap = React.createClass({
  render: function(){
    return (
        <div>
          <div className="wrapperNav">
            <div className="navText">
              <p><strong>Замовлення</strong> Опрацювати кожне необхідно протягом 5 хвилин</p>
            </div>
          </div>
            <ShowOrder itemsIn={spliceArr}  />
        </div>
      )
    }
});


$('#reloadF, .logo').click(function() {
  $('reactBox').empty();
  ReactDOM.render(<OrderBox/>, document.getElementById('reactBox'));
});

$(".orders-link").click(function() {
  $('#reactBox').empty();
  $('.nav-item').removeClass("is-active");
  $('.orders-link').addClass("is-active");
  ReactDOM.render(<ShowOrderWrap/>, document.getElementById('reactBox'));
});

var pure = function() {
  $('#reactBox').empty();
  $('.nav-item').removeClass("is-active");
  $('.orders-link').addClass("is-active");
  ReactDOM.render(<ShowOrderWrap />, document.getElementById('reactBox'));
};

var pureFilter = function(bool1) {
  if(bool1) {
    setTimeout(function() {
      $('#toggle').prop('checked',true)
    }, 10);
  }
  $('#reactBox').empty();
  $('.nav-item').removeClass("is-active");
  $('#userOrder').addClass("is-active");
  ReactDOM.render(<FilterOrder itemsIn={orderArr} check={bool1}/>, document.getElementById('reactBox'));
};

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

$('.our-cleaning-link').click(function() {
  var bool1 = false;
  $('#reactBox').empty();
  $('.nav-item').removeClass("is-active");
  $('.our-cleaning-link').addClass("is-active");
  ReactDOM.render(<FilterOrder itemsIn={orderArr} check={bool1}/>, document.getElementById('reactBox'))
});
