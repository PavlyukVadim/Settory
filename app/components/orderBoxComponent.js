var OrderBox = React.createClass({
  make_pay: function() {
    console.log('start');
    var onAjaxSuccess = function(data) {
      // Здесь мы получаем данные в переменную data
      console.log(data)
      $('#form_responce').html(data); //И передаем эту форму в невидимое поле form_responce
      $('#form_responce form').submit() //Сразу же автоматически сабмитим эту форму, так как всеравно клиент её не видит
      console.log('toto');
    }
    $.get('../payment/makeform.php', {price: $('#price').text()}, onAjaxSuccess);
  },

  decreaseNumberOfRooms: function() {
    var numberOfRooms = +this.numberOfRoomsInput.value;
    this.numberOfRoomsInput.value = numberOfRooms - 1 < 1 ? 1 : numberOfRooms - 1;
    this.multiCheck()
  },

  increaseNumberOfRooms: function() {
    var numberOfRooms = +this.numberOfRoomsInput.value;
    this.numberOfRoomsInput.value = numberOfRooms >= 10 ? 10 : numberOfRooms + 1;
    this.multiCheck()
  },

  decreaseNumberOfBathrooms: function() {
    var numberOfBathrooms = +this.numberOfBathroomsInput.value;
    this.numberOfBathroomsInput.value = numberOfBathrooms - 1 < 1 ? 1 : numberOfBathrooms - 1;
    this.multiCheck();
  },

  increaseNumberOfBathrooms: function() {
    var numberOfBathrooms = +this.numberOfBathroomsInput.value;
    this.numberOfBathroomsInput.value = numberOfBathrooms >= 10 ? 10 : numberOfBathrooms + 1;
    this.multiCheck();
  },

  componentDidMount: function(){
    var currDate = new Date();
    var tomorrow = currDate.setDate(currDate.getDate() + 1);
    this.multiCheck();
    this.dataPick();
    $("#datapicker1").datepicker('setDate', new Date(tomorrow));
  },

  dataPick: function(inter) {
    inter = inter || 0;
    $("#datapicker1").datepicker({
      'dateFormat': 'dd MM yy',
      'minDate': inter,
    });
    $('#forTime').val('');
  },
  
  summa: function () {
    var sum = 0;
    if ($('#1stOpt').prop("checked")) sum += 300;
    if ($('#2stOpt').prop("checked")) sum += 100;
    if ($('#3stOpt').prop("checked")) sum += 150;
    if ($('#4stOpt').prop("checked")) sum += 150;
    if ($('#5stOpt').prop("checked")) sum += 125;
    if ($('#6stOpt').prop("checked")) sum += 150;
    if ($('#7stOpt').prop("checked")) sum += 200;
    if ($('#8stOpt').prop("checked")) sum += 150;
    if ($('#9stOpt').prop("checked")) sum += 50;
    sum += $("input[name='roomQuantity']").val() * 100 + 400;
    sum += ($("input[name='bathQuantity']").val() - 1) * 100;
    $('#price').empty();
    $('#price').text(sum);
  },

  inputsValidation: function() {
    var numberOfRooms = +this.numberOfRoomsInput.value || 0;
    var numberOfBathrooms = +this.numberOfBathroomsInput.value || 0;
    
    numberOfRooms = numberOfRooms > 10 ? numberOfRooms % 10 : numberOfRooms;
    numberOfRooms = numberOfRooms < 1 ? 1 : numberOfRooms;
    this.numberOfRoomsInput.value = numberOfRooms;

    numberOfBathrooms = numberOfBathrooms > 10 ? numberOfBathrooms % 10 : numberOfBathrooms;
    numberOfBathrooms = numberOfBathrooms < 1 ? 1 : numberOfBathrooms;
    this.numberOfBathroomsInput.value = numberOfBathrooms;
  },

  multiCheck: function() {
    this.inputsValidation();
    this.summa();
  },

  render: function(i) {
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
                     onClick={this.dataPick}
                     required/>
            </p>
            <label className="label" id="time">На який час?</label>
            <p className="control">
              <Timepick/>
            </p>
            <label className="label">додаткові опції</label>
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
