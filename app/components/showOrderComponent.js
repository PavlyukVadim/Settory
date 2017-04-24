var ShowOrder = React.createClass({
    getInitialState: function(){
        var defaultArr = this.props.itemsIn
        return {
           defaultArr,
           items: []
        }
    },

    componentWillMount: function(){
      this.setState({items: this.state.defaultArr})
    },

    i: 0,

    nextPage: function(){
        if (i !== this.state.items.length && i < this.state.items.length-1) i++;
        pure();
    },

    prevPage: function(){
        if (i !== 0 || i > 0) i--;
        pure();
    },

    render: function(){
        var list = this.state.items[i].map(function(item){
            var el = [];
            var definitionItems = ['Миття вікон', 'Миття посуду', 'Чистка холодильника', 'Чистка духовки', 'Прасування'];
            var statusChecked;

            var arr = item.option.map(function(items){
              for (var i = 1; i <= definitionItems.length; i++) {
                if (items == i) el.push(definitionItems[i]);
              }
            });

            statusChecked = (!item.status) ? 'Активно' : 'Завершено';

            var length = el.map(function(option){
                return ( <li>{ option }</li> );
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
                <a className="button" onClick={this.nextPage}>Попередня</a>
                <a className="button" onClick={this.prevPage}>Наступна</a>
              </nav>
            </div>
        )
    }
});
