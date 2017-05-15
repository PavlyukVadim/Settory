import React, { Component } from 'react';
import TimePicker from '../TimePicker/TimePicker.jsx';
import ErrorPromo from '../PromoCodes/ErrorPromo.jsx';
/*options = [{title: 'windows', price: 300, selected: false},
             {title: 'dishes', price: 100, selected: false},
             {title: 'freezer', price: 150, selected: false},
             {title: 'oven', price: 150, selected: false},
             {title: 'iron', price: 125, selected: false},
             {title: 'microwave', price: 150, selected: false},
             {title: 'kitchenCabinet', price: 200, selected: false},
             {title: 'hood', price: 150, selected: false},
             {title: 'underware', price: 50, selected: false}];*/

class OrderBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOrderValid: false
    };
    this.options = { windows: false,
                     dishes: false,
                     freezer: false,
                     oven: false,
                     iron: false,
                     microwave: false,
                     kitchenCabinet: false,
                     hood: false,
                     underware: false };
    this.makePay = this.makePay.bind(this);
    this.decreaseNumberOfRooms = this.decreaseNumberOfRooms.bind(this);
    this.increaseNumberOfRooms = this.increaseNumberOfRooms.bind(this);
    this.decreaseNumberOfBathrooms = this.decreaseNumberOfBathrooms.bind(this);
    this.increaseNumberOfBathrooms = this.increaseNumberOfBathrooms.bind(this);
    this.dataPick = this.dataPick.bind(this);
    this.timePick = this.timePick.bind(this);
    this.summa = this.summa.bind(this);
    this.inputsValidation = this.inputsValidation.bind(this);
    this.fetchDisabledDates();
    this.orderValidation = this.orderValidation.bind(this);
  }

  componentDidMount() {
    let now = new Date();
    this.multiCheck();
    this.dataPick();
    $("#datapicker1").datepicker('setDate', now);
  }

  fetchDisabledDates() {
    let hostname = this.props.hostname;
    fetch(`${hostname}/disabled_dates.json`, {
            method: 'GET',
            credentials: 'include'
          })
          .then(response => response.json());
  }

  makePay() {
    /*let onAjaxSuccess = (data) => {
      $('#form_responce').html(data); //И передаем эту форму в невидимое поле form_responce
      $('#form_responce form').submit() //Сразу же автоматически сабмитим эту форму, так как всеравно клиент её не видит
    }
    $.get('../payment/makeform.php', {price: $('#price').text()}, onAjaxSuccess);*/
    this.sendOrder();
  }

  sendOrder() {
    let address = this.addressInput.value;
    let numOfRooms = this.numberOfRoomsInput.value;
    let dateOrder = this.dateOrderInput.value;
    let timeOrder = this.timeOrder;
    let promoCode = this.promoCodeInput.value;
    // these options didn't implement on back-end.
    delete this.options.microwave;
    delete this.options.kitchenCabinet;
    delete this.options.hood;
    delete this.options.underware;

    let opts = this.options;
    let data = {
      amount: this.sum,
      address: address,
      num_of_rooms: numOfRooms,
      date_order: dateOrder,
      time_order: timeOrder,
      options: opts
    };

    let indexOfToken = document.cookie.indexOf('XSRF-TOKEN=');
    let token = document.cookie.slice(indexOfToken + 11);
    let hostname = this.props.hostname;
    token = decodeURIComponent(token);
    fetch(`${hostname}/orders`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json;charset=UTF-8',
              'X-Requested-With': 'XMLHttpRequest',
              'X-CSRF-TOKEN': token,
            },
            body: JSON.stringify({
              'dae': data,
              'promocode': promoCode
            })
          }).then(() => {
            let isAdmin = !~window.location.href.indexOf('#/user/');
            let mediateRoute = isAdmin ? '/admin' : '/user';
            this.props.history.push(`${mediateRoute}/yourOrders`);
          });
  }

  decreaseNumberOfRooms() {
    let numberOfRooms = +this.numberOfRoomsInput.value;
    this.numberOfRoomsInput.value = numberOfRooms - 1 < 1 ? 1 : numberOfRooms - 1;
    this.multiCheck();
  }

  increaseNumberOfRooms() {
    let numberOfRooms = +this.numberOfRoomsInput.value;
    this.numberOfRoomsInput.value = numberOfRooms >= 10 ? 10 : numberOfRooms + 1;
    this.multiCheck();
  }

  decreaseNumberOfBathrooms() {
    let numberOfBathrooms = +this.numberOfBathroomsInput.value;
    this.numberOfBathroomsInput.value = numberOfBathrooms - 1 < 1 ? 1 : numberOfBathrooms - 1;
    this.multiCheck();
  }

  increaseNumberOfBathrooms() {
    let numberOfBathrooms = +this.numberOfBathroomsInput.value;
    this.numberOfBathroomsInput.value = numberOfBathrooms >= 10 ? 10 : numberOfBathrooms + 1;
    this.multiCheck();
  }

  dataPick(inter) {
    inter = inter || 0;
    $('#datapicker1').datepicker({
      'dateFormat': 'dd.mm.yy',
      'minDate': inter,
    });
    $('#forTime').val('');
  }

  timePick(newTime) {
    this.timeOrder = newTime;
    this.orderValidation();
  }

  orderValidation() {
    let address = this.addressInput && this.addressInput.value;
    let timeOrder = this.timeOrder;
    this.setState({
      isOrderValid: !!address && timeOrder
    })
  }

  summa() {
    this.sum = 0;
    for (let option in this.options) {
      this.options[option] = false;
    }
    if ($('#1stOpt').prop("checked")) { this.sum += 300; this.options.windows = true; }
    if ($('#2stOpt').prop("checked")) { this.sum += 100; this.options.dishes = true; }
    if ($('#3stOpt').prop("checked")) { this.sum += 150; this.options.freezer = true; }
    if ($('#4stOpt').prop("checked")) { this.sum += 150; this.options.oven = true; }
    if ($('#5stOpt').prop("checked")) { this.sum += 125; this.options.iron = true; }
    if ($('#6stOpt').prop("checked")) { this.sum += 150; this.options.microwave = true; }
    if ($('#7stOpt').prop("checked")) { this.sum += 200; this.options.kitchenCabinet = true; }
    if ($('#8stOpt').prop("checked")) { this.sum += 150; this.options.hood = true; }
    if ($('#9stOpt').prop("checked")) { this.sum += 50; this.options.underware = true; }
    this.sum += $("input[name='roomQuantity']").val() * 100 + 400;
    this.sum += ($("input[name='bathQuantity']").val() - 1) * 100;
    $('#price').empty();
    $('#price').text(this.sum + ' грн');
  }

  inputsValidation() {
    let numberOfRooms = +this.numberOfRoomsInput.value || 0;
    let numberOfBathrooms = +this.numberOfBathroomsInput.value || 0;

    numberOfRooms = numberOfRooms > 10 ? numberOfRooms % 10 : numberOfRooms;
    numberOfRooms = numberOfRooms < 1 ? 1 : numberOfRooms;
    this.numberOfRoomsInput.value = numberOfRooms;

    numberOfBathrooms = numberOfBathrooms > 10 ? numberOfBathrooms % 10 : numberOfBathrooms;
    numberOfBathrooms = numberOfBathrooms < 1 ? 1 : numberOfBathrooms;
    this.numberOfBathroomsInput.value = numberOfBathrooms;
  }

  multiCheck() {
    this.inputsValidation();
    this.summa();
  }

  render() {
    return (
      <div className="wrapperOrderBlock">
        <ErrorPromo />
        <form id="orderForm">
          <div className="orderBlock">
            <label className="label">Адреса квартири</label>
            <p className="control">
              <input className="input"
                     type="text"
                     onChange={this.orderValidation}
                     ref={(input) => {this.addressInput = input;}}
                     placeholder="вулиця Богдана Хмельницького 64,квартира13"
                     required />
            </p>
            <label className="label">Кількість кімнат</label>
            <p className="control has-addons">
              <a className="button" id="minus" onClick={this.decreaseNumberOfRooms}>-</a>
              <input className="input is-expanded"
                     type="text"
                     ref={(input) => {this.numberOfRoomsInput = input;}}
                     onChange={this.multiCheck}
                     name="roomQuantity"
                     min={1}
                     defaultValue={1}
                     maxLength={2}
                     required />
              <a className="button" id="plus" onClick={this.increaseNumberOfRooms}>+</a>
            </p>
            <label className="label">Кількість санвузлів</label>
            <p className="control has-addons">
              <a className="button" id="minus1" onClick={this.decreaseNumberOfBathrooms}>-</a>
              <input className="input is-expanded"
                     type="text"
                     ref={(input) => {this.numberOfBathroomsInput = input;}}
                     onChange={this.multiCheck}
                     maxLength={2}
                     defaultValue={1}
                     name="bathQuantity"
                     min={1}
                     required />
              <a className="button" id="plus1" onClick={this.increaseNumberOfBathrooms}>+</a>
            </p>
            <label className="label">На яку дату?</label>
            <p className="control">
              <input type="text" className="input"
                     id="datapicker1"
                     ref={(input) => {this.dateOrderInput = input;}}
                     onClick={this.dataPick}
                     required/>
            </p>
            <label className="label" id="time">На який час?</label>
            <p className="control">
              <TimePicker updateTime={this.timePick}/>
            </p>
            <label className="label">Додаткові опції</label>
            <p className="control checkBoxBox">
              <label className="checkbox">
                <input type="checkbox" id="1stOpt" onChange={this.summa}/>Миття вікон
              </label>
              <label className="checkbox">
                <input type="checkbox" id="2stOpt" onChange={this.summa}/>Миття посуду
              </label>
              <label className="checkbox">
                <input type="checkbox" id="3stOpt" onChange={this.summa}/>Чистка холодильники
              </label>
              <label className="checkbox">
                <input type="checkbox" id="4stOpt" onChange={this.summa}/>Чистка духовки
              </label>
              <label className="checkbox">
                <input type="checkbox" id="5stOpt" onChange={this.summa}/>Прасування
              </label>
              <label className="checkbox">
                <input type="checkbox" id="6stOpt" onChange={this.summa}/>Чистка мікрохвільової печі
              </label>
              <label className="checkbox">
                <input type="checkbox" id="7stOpt" onChange={this.summa}/>Прибирання в кухонних шафах
              </label>
              <label className="checkbox">
                <input type="checkbox" id="8stOpt" onChange={this.summa}/>Миття кухонної витяжки
              </label>
              <label className="checkbox">
                <input type="checkbox" id="9stOpt" onChange={this.summa}/>Загрузка однієї партії білизни
              </label>
            </p>
          </div>
          <div className="orderBox" id="cost">
            <p className="order-amount">Сума замовлення: &nbsp;<span id="price"></span></p>
            <p>Ми зв{'\''}яжемось з вами за годину до прибирання :)</p>
            <p className="control">
              <input className="input"
                     type="text"
                     ref={(input) => {this.promoCodeInput = input;}}
                     placeholder="Промокод" />
            </p>
            <input id="reserve"
                   type="button"
                   disabled={!this.state.isOrderValid}
                   onClick={this.makePay}
                   className="button is-info"
                   defaultValue="Забронювати" />
          </div>
        </form>
      </div>
    );
  }
}

export default OrderBox;
