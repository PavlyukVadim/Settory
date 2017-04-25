function PromoCode(discount, dTime, code) {
  this.discount = discount;
  this.dTime = dTime;
  this.code = code;
}

var ShowPromo = React.createClass({
  getInitialState: function() {
    return {
      arrayOfPromoCodes: this.props.items
    }
  },

  componentDidMount: function() {
    this.timepick();
  },

  timepick: function() {
    $('#datapicker2').datepicker({
      dateFormat: 'dd/mm/yy'
    });
  },

  deletePromoCode: function(i) {
    this.setState((prevState) => {
      prevState.arrayOfPromoCodes.splice(i, 1);
      return {
        arrayOfPromoCodes: prevState.arrayOfPromoCodes
      };
    })
  },

  addPromoCode: function(e) {
    e.preventDefault();
    this.setState((prevState) => {
      var newPromoCode = new PromoCode(this.discountInput.value,
                                       this.dTimeInput.value,
                                       this.codeInput.value);
      prevState.arrayOfPromoCodes.push(newPromoCode);
      return {
        arrayOfPromoCodes: prevState.arrayOfPromoCodes
      };
    })
  },

  getPromoCodes: function() {
    var promoCodes = this.state.arrayOfPromoCodes.map((item, i) => {
      return (
        <div className="promoCodShow" key={i}>
          <p>Промо на {item.discount}% дійсне до {item.dTime}, код:{item.code}</p>
          <a className="deletepromo" onClick={() => this.deletePromoCode(i)}>Видалити</a>
        </div>
      );
    });
    return promoCodes;
  },

  render: function() {
    return (
      <div>
        <div className="wrapperPromoCreate">
          <h2>Промокоди</h2>
          <form id="promoCreate" onSubmit={this.addPromoCode}>
            <p className="control has-addons">
              <input className="input" type="text" 
                     ref={(input) => { this.discountInput = input; }}
                     placeholder="процент" 
                     required />
              <a className="button">%</a>
            </p>
            <p className="control has-addons">
              <input type="text" className="input"
                     id="datapicker2"
                     onClick={this.timepick} 
                     ref={(input) => { this.dTimeInput = input; }}
                     placeholder="день/місяць/рік" 
                     required />
              <a className="button">ДАТА</a>
            </p>
            <p className="control has-addons">
              <input className="input" type="text" 
                     ref={(input) => { this.codeInput = input; }}
                     placeholder="код" />
              <a className="button">КОД</a>
            </p>
            <p className="control">
              <button className="button is-success" type="submit" >Додати промо</button>
            </p>
          </form>
        </div>
        <div className="promoShowContent">{this.getPromoCodes()}</div>
      </div>
    )
  }
});
