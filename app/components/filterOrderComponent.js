var FilterOrder = React.createClass({
  
  getInitialState: function() {
    var defaultArr = this.props.itemsIn;
    return {
      defaultArr,
      items: []
    }
  },

  componentWillMount: function() {
    this.setState({items: this.state.defaultArr});
    this.props.check ? this.filterList() : this.activeFilter();
  },

  activeFilter: function() {
    var updatedList = this.state.defaultArr;
    updatedList = updatedList.filter(function(item) {
      if (!item.status) return item;
    });
    this.setState({items: updatedList});
  },

  filterList: function() {
    var updatedList = this.state.defaultArr;
    updatedList = updatedList.filter(function(item) {
      if (item.status) return item;
    })
    this.setState({items: updatedList});
  },

  switchCleaning: function() {
    $('#toggle').prop('checked') ? this.filterList() : this.activeFilter();
  },

  createDoubleArray: function(){
    var promiseArr = this.state.items.slice();
    var doubleArray = [];
    do {
       doubleArray.push(promiseArr.splice(0, 20));
    } while (promiseArr[0] !== undefined);
    return doubleArray;
  },

  j: 0,

  nextPage: function(){
    var miss = this.createDoubleArray();
    var check = miss[0][0].status;
    if (j !== miss.length && j < miss.length - 1) j++;
    pureFilter(check == miss[0][0].status);
  },

  prevPage: function(){
    var miss = this.createDoubleArray();
    var check = miss[0][0].status;
    if (j !== 0 && j > 0) j--;
    pureFilter(check == miss[0][0].status);
  },

  render: function(){
    var miss = this.createDoubleArray();
    var list = miss[j].map(function(item) {
      var el = [];
      var definitionItems = ['Миття вікон', 'Миття посуду', 'Чистка холодильника', 'Чистка духовки', 'Прасування'];
      var statusChecked;

      var arr = item.option.map(function(items) {
        for (var i = 1; i <= definitionItems.length; i++) {
          if (items == i) el.push(definitionItems[i]);
        }
      });

      statusChecked = (!item.status) ? 'Активно' : 'Завершено';

      var length = el.map(function(option) {
        return (<li>{ option }</li>);
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
      );
    });

    return (
      <div>
        <div className="wrapperNav">
          <div className="navText">
            <p><strong>Ваші прибирання</strong> Заплануйте нові прибирання та контролюйте вже заплановані</p>
          </div>
        </div>
        <div>
          <div className="navButton">
            <div className="firstButtonBlock">
              <a className="button is-info" >Заплановані прибирання</a>
              <div className="toggleBox">
                <input type="checkbox" name="toggle" id="toggle" onChange={this.switchCleaning}/>
                <label htmlFor="toggle" />
              </div>
              <a className="button" >Проведені прибирання</a>
            </div>
            <a className="button is-success" href="order.html">Замовити прибирання</a>
          </div>
        </div>
        <div className="wrapperTable1">
          <table className="table is-narrow">
            <tbody>
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
              {list}
            </tbody>
          </table>
          <nav className="pagination">
            <a className="button" onClick={this.prevPage}>Попередня</a>
            <a className="button" onClick={this.nextPage}>Наступна</a>
          </nav>
        </div>
      </div>
    );
  }
});
