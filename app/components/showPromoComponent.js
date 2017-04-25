function PromoCode(discount, dTime, code) {
  this.discount = discount;
  this.dTime = dTime;
  this.code = code;
}

var ShowPromo = React.createClass({
  componentDidMount: function() {
    this.timepick();
  },

  timepick: function() {
    $("#datapicker2").datepicker({
      dateFormat: 'dd/mm/yy'
    });
  },

  getPromoCodes: function() {
    var promoCodes = this.props.items.map(function(item, i) {
      return (
        <div className="promoCodShow" key={i}>
          <p>Промо на {item.discount}% дійсне до {item.dTime}, код:{item.code}</p>
          <a className="deletepromo">Видалити</a>
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
          <form id="promoCreate">
            <p className="control has-addons">
              <input className="input" type="text" placeholder="процент" required />
              <a className="button">%</a>
            </p>
            <p className="control has-addons">
              <input type="text" className="input" id="datapicker2" onClick={this.timepick} placeholder="день/місяць/рік" required />
              <a className="button">ДАТА</a>
            </p>
            <p className="control has-addons">
              <input className="input" type="text" placeholder="код" />
              <a className="button">КОД</a>
            </p>
            <p className="control">
              <button className="button is-success" type="submit">Додати промо</button>
            </p>
          </form>
        </div>
        <div className="promoShowContent">{this.getPromoCodes()}</div>
      </div>
    )
  }
});
