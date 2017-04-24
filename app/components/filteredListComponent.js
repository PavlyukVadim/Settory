var FilteredList = React.createClass({
  getInitialState: function(){
      var defaultArr = this.props.itemsIn
      return {
         defaultArr,
         items: []
      }
  },

  filterList: function(event){
    var updatedList = this.state.defaultArr;
    updatedList = updatedList.filter(function(item){
      if (item.mail.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
        return item.mail.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      } else {
        return item.phone.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      }
    });
    this.setState({items: updatedList});
  },

  componentWillMount: function(){
    this.setState({items: this.state.defaultArr});
  },

  render: function(){
    return (
        <div>
          <div className="wrapperNav">
            <div className="navText">
              <p><strong>Наші клієнти</strong>Інформація про них</p>
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
