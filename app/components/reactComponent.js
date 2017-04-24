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


$(document).ready(function(){
  ReactDOM.render(<OrderBox />, document.getElementById('reactBox'));
})

var userBox = 1;
ReactDOM.render(<UserDetect user={userBox} />, document.getElementById('hederRow'));

var i = 0;
var j =0;

function PromoCod(cof, dTime, mesg) {
  this.cof = cof,
  this.dTime = dTime,
  this.mesg = mesg
}
function dataCod(mail,dTime,phone) {
  this.mail = mail,
  this.dTime = dTime,
  this.phone = phone
}
function orderCod(numberValue, mail, phone, adress, room, dTimeH, dTimeD, option, pay, status) {
  this.numberValue = numberValue,
  this.mail = mail,
  this.phone = phone,
  this.adress = adress,
  this.room = room,
  this.dTimeH = dTimeH,
  this.dTimeD = dTimeD,
  this.option = option,
  this.pay = pay,
  this.status = status
}

var data1 = new dataCod('1asdasf@mail','2012-10-10','000665');
var data2 = new dataCod('2f@mail','2012-11-11','000665555');
var data3 = new dataCod('3f@mail','2012-12-12','000');
var Fpromo = new PromoCod('10','2012-10-10','Blablabla1');
var Spromo = new PromoCod('20','2012-11-11','Blablabla2');
var Thpromo = new PromoCod('30','2012-12-12','Blablabla3');
var order1 = new orderCod(1,'blabla@mail.com','0935556644','ShitIt st',2,'20:16','2k16',[1,2],500,false);
var order2 = new orderCod(2,'albalb@mail.com','0932223311','ShitHi st',1,'20:15','2k14',[1,4],600,false);
var order3 = new orderCod(3,'lablab@mail.com','0507778899','ShitHer st',3,'20:20','2k15',[1,3],700,true);
var dataArr = [data1,data2,data3];
var promoArr = [Fpromo,Spromo,Thpromo];
var orderArr =[order1,order2,order3,order1,order2,order3,order1,order2,order3,order1,order2,order3,order1,order2,order3,order1,order2,order3,order1,order2,order3,order1,order2,order3];
var spliceArr = [];
var copyArr = orderArr.slice();

do {
  spliceArr.push(copyArr.splice(0,20))
}
while(copyArr[0] !== undefined)


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

var ShowOrder = React.createClass({
     getInitialState: function(){
      let defaultArr = this.props.itemsIn
     return {
       defaultArr,
       items: []
     }

  },
    componentWillMount: function(){
    this.setState({items: this.state.defaultArr})
  },

    i: 0,
    plus: function(){
        if(i !== this.state.items.length && i < this.state.items.length-1) i += 1
        pure()
    },
    minus: function(){
        if(i !== 0 || i > 0) i -= 1
        pure()
    },
    render: function(){
        var list = this.state.items[i].map(function(item){
            var el = [];
            var statusChecked;
            var arr = item.option.map(function(items){
                if(items == 1) el.push('Миття вікон')
                if(items == 2) el.push('Миття посуду')
                if(items == 3) el.push('Чистка холодильника')
                if(items == 4) el.push('Чистка духовки')
                if(items == 5) el.push('Прасування')
            })
            if(item.status == false) {
                statusChecked = 'Активно'
            }
            else {statusChecked = 'Завершено'
                 }
            var length = el.map(function(option){
                return (
                    <li>{ option }</li>
                )
            });
             return (
                <tr>
                  <td>{item.numberValue}</td>
                  <td>{item.mail}</td>
                  <td>{item.phone}</td>
                  <td>{item.adress}</td>
                  <td>{item.room}</td>
                  <td>{item.dTimeH} {item.dTimeD}</td>
                  <td><ul>{length}</ul></td>
                  <td>{item.pay}</td>
                  <td>{statusChecked}</td>
                </tr>
             )
         });
        return (
            <div className="wrapperTable1">
            <table className="table is-narrow">
            <tbody>
            <tr>
              <td><strong>#</strong></td>
              <td><strong>Пошта</strong></td>
              <td><strong>Номер телефону</strong></td>
              <td><strong>Адреса</strong></td>
              <td><strong>К</strong></td>
              <td><strong>Час  і  дата</strong></td>
              <td><strong>Опції</strong></td>
              <td><strong>Сплачено</strong></td>
              <td><strong>Статус</strong></td>
            </tr>
              {list}
            </tbody>
            </table>
            <nav className="pagination">
          <a className="button" onClick={this.minus}>Попередня</a>
          <a className="button" onClick={this.plus}>Наступна</a>

        </nav>
            </div>
        )
    }
});
var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.defaultArr;
    updatedList = updatedList.filter(function(item){
        if(item.mail.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1)
      return item.mail.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
        else
            return item.phone.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
      let defaultArr = this.props.itemsIn
     return {
       defaultArr,
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.defaultArr})
  },
  render: function(){
    return (
        <div>
        <div className="wrapperNav">
        <div className="navText">
          <p><strong>Наші клієнти</strong>
            Інформація про них</p>
        </div>
      </div>
      <div className="filter-list">
        <input className="input" type="text" placeholder="Телефон або електронна пошта" onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
        </div>
    );
  }
});
var List = React.createClass({
    render: function(){
    let promoArrShow =  this.props.items.map(function(item, i){
             return (
                <div  key={i} className="vueCodShow">
                     <div className="vueMesg">
                        <h2> {item.mail} </h2>
                        <p> {item.phone} </p>
                    </div>
                    <div className="vueRightBlock">
                        <p>Приєднався</p>
                        <div className="vueMesg">
                            <h2>{item.dTime}</h2>
                            <a>Детальніше</a>
                        </div>
                     </div>
                 </div>

             )
         });
        return (
            <div> { promoArrShow } </div>
  )
    }
});

var OrderBox = React.createClass({

    make_pay:function(){
        console.log('start')
        var onAjaxSuccess=function(data)
 {
 // Здесь мы получаем данные в переменную data
     console.log(data)
 $('#form_responce').html(data); //И передаем эту форму в невидимое поле form_responce
 $('#form_responce form').submit() //Сразу же автоматически сабмитим эту форму, так как всеравно клиент её не видит
 console.log('toto')
 }

 $.get("../payment/makeform.php",{price: $('#price').text()},onAjaxSuccess)

    },
    minus1: function(){
    $("input[name='roomQuantity']").val(function(index,newVal){
        if(newVal-1 < 1) return 1
        else return newVal - 1

            });
        this.multiCheck()
    },
    plus1: function(){
        $("input[name='roomQuantity']").val(function(index,newVal){
            if(newVal >= 10) return 10
            else return +newVal +1
    });
    this.multiCheck()
    },
     minus2: function(){
    $("input[name='bathQuantity']").val(function(index,newVal){
        if(newVal-1 < 1) return 1
        else return newVal - 1
            });
        this.multiCheck()
    },
    plus2: function(){  $("input[name='bathQuantity']").val(function(index,newVal){
            if(newVal >= 10) return 10
            else return +newVal +1
    });
    this.multiCheck()
    },
    componentDidMount: function(){
        this.multiCheck();
        this.dataPic();
         let a = new Date().valueOf()+24*60*60*1000;
        $( "#datapicker1" ).datepicker( "setDate",new Date(a))

    },
    timepick:function(){
        console.log('time');

    },
    dataPic: function(inter = 0){
        $("#datapicker1").datepicker({
            'dateFormat': 'dd MM yy',
            'minDate': inter,
            });
        $('#forTime').val('')

    },
    summa: function (){
        var sum = 0;
        if($('#1stOpt').prop("checked")) sum +=300
        if($('#2stOpt').prop("checked")) sum +=100
        if($('#3stOpt').prop("checked")) sum += 150
        if($('#4stOpt').prop("checked")) sum += 150
        if($('#5stOpt').prop("checked")) sum += 125
        if($('#6stOpt').prop("checked")) sum += 150
        if($('#7stOpt').prop("checked")) sum += 200
        if($('#8stOpt').prop("checked")) sum += 150
        if($('#9stOpt').prop("checked")) sum += 50
        sum += $("input[name='roomQuantity']").val()*100 + 400
        sum += ($("input[name='bathQuantity']").val()-1)*100
         $('#price').empty()
        $('#price').text(sum)
    },
    check: function(){
         $("input[name='roomQuantity']").val(function(index,newVal){
        if(newVal > 10) return 10
        else if (newVal < 1) return 1
        else return newVal
            });
    },
    multiCheck: function(){
      this.check()
        this.summa()
    },
    render: function(i){
        return (
      <div  key={i} className="wrapperOrderBlock">
        <form id="orderForm">
          <div className="orderBlock">
            <label className="label">Адреса квартири</label>
            <p className="control">
              <input className="input" type="text" placeholder="вулиця Богдана Хмельницького 64,квартира13" required />
            </p>
            <label className="label">Кількість кімнат</label>
            <p className="control has-addons">
              <a className="button" id="minus" onClick={this.minus1}>
                -
              </a>
              <input className="input is-expanded" type="text" required maxLength={2} defaultValue={1} name="roomQuantity" min={1} onChange={this.multiCheck}/>
              <a className="button" id="plus" onClick={this.plus1}>
                +
              </a>
            </p>
            <label className="label">Кількість санвузлів</label>
            <p className="control has-addons">
              <a className="button" id="minus1" onClick={this.minus2}>
                -
              </a>
              <input className="input is-expanded" type="text" required maxLength={2} defaultValue={1} name="bathQuantity" min={1} onChange={this.multiCheck}/>
              <a className="button" id="plus1" onClick={this.plus2}>
                +
              </a>
            </p>
            <label className="label">На яку дату?</label>
            <p className="control">
             <input type="text" className="input" id="datapicker1" required onChange={this.timepick} onClick={this.dataPic} />
            </p>
            <label className="label" id="time">На який час?</label>
            <p className="control">
              < Timepick />
            </p>
            <label className="label">Додаткові опції</label>
            <p className="control checkBoxBox">
              <label className="checkbox">
                <input type="checkbox" id="1stOpt" onChange={this.summa}/>
                Миття вікон
              </label>
              <label className="checkbox">
                <input type="checkbox" id="2stOpt" onChange={this.summa}/>
                Миття посуду
              </label>
              <label className="checkbox">
                <input type="checkbox" id="3stOpt" onChange={this.summa}/>
                Чистка холодильники
              </label>
              <label className="checkbox">
                <input type="checkbox" id="4stOpt" onChange={this.summa}/>
                Чистка духовки
              </label>
              <label className="checkbox">
                <input type="checkbox" id="5stOpt" onChange={this.summa}/>
                Прасування
              </label>
            <label className="checkbox">
                <input type="checkbox" id="6stOpt" onChange={this.summa}/>
                Чистка мікрохвільової печі
              </label>
            <label className="checkbox">
                <input type="checkbox" id="7stOpt" onChange={this.summa}/>
                Прибирання в кухонних шафах
              </label>
            <label className="checkbox">
                <input type="checkbox" id="8stOpt" onChange={this.summa}/>
                Миття кухонної витяжки
              </label>
            <label className="checkbox">
                <input type="checkbox" id="9stOpt" onChange={this.summa}/>
                Загрузка однієї партії білизни
              </label>
            </p>
          </div>
          <div className="orderBox" id="cost">
            <span>Сума замовлення: &nbsp;&nbsp;</span>
            <span id="price"></span>
            <p>Ми зв{'\''}яжемось з вами за годину до прибирання :)</p>
            <p className="control">
              <input className="input" type="text" placeholder="Промокод, якщо є" />
            </p>
            <input type="button" onClick={this.make_pay} className="button is-info" defaultValue="Забронювати" />
          </div>
        </form>
      </div>
        )
    }
});

$('#reloadF').click(function(){
     $('reactBox').empty();
    ReactDOM.render(<OrderBox />,document.getElementById('reactBox'))
});

$('#order').click(function(){
    $('#reactBox').empty();
     $('.nav-item').removeClass("is-active")
    $('#order').addClass("is-active")
   ReactDOM.render(<ShowOrderWrap  />,document.getElementById('reactBox'))
});

var pure = function(){
    $('#reactBox').empty();
     $('.nav-item').removeClass("is-active")
    $('#order').addClass("is-active")
   ReactDOM.render(<ShowOrderWrap />, document.getElementById('reactBox'))
};

var pureFilter = function(bool1){
    if(bool1) {
    setTimeout(function(){
        $('#toggle').prop('checked',true)
    }),10
    }
    $('#reactBox').empty();
     $('.nav-item').removeClass("is-active")
    $('#userOrder').addClass("is-active")
   ReactDOM.render(<FilterOrder itemsIn={ orderArr } check={ bool1 }/>, document.getElementById('reactBox'))
};

$('#promo').click(function(){
     $('#reactBox').empty();
    $('.nav-item').removeClass("is-active")
    $('#promo').addClass("is-active")
    ReactDOM.render(<ShowPromo items={ promoArr } />,document.getElementById('reactBox'))
});

$('#user').click(function(){
    $('#reactBox').empty();
     $('.nav-item').removeClass("is-active")
    $('#user').addClass("is-active")
   ReactDOM.render(<FilteredList itemsIn={ dataArr }/>,document.getElementById('reactBox'))
});

$('#userOrder').click(function(){
    var bool1 = false
    $('#reactBox').empty();
     $('.nav-item').removeClass("is-active")
    $('#userOrder').addClass("is-active")
   ReactDOM.render(<FilterOrder itemsIn={ orderArr } check={ bool1 } />,document.getElementById('reactBox'))
});
