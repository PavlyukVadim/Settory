import React, { Component } from 'react';

function PromoCode(discount, dTime, code) {
  this.discount = discount;
  this.dTime = dTime;
  this.code = code;
}

class PromoCodes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      arrayOfPromoCodes: this.getInitialPromoCodes()
    };
    this.addPromoCode = this.addPromoCode.bind(this);
    this.timePick = this.timePick.bind(this);
    this.getPromoCodes = this.getPromoCodes.bind(this);
    this.deletePromoCode = this.deletePromoCode.bind(this);
  }

  getInitialPromoCodes() {
    return [new PromoCode('10', '2012-10-10', 'PromoCode1'),
            new PromoCode('20', '2012-11-11', 'PromoCode2'),
            new PromoCode('30', '2012-12-12', 'PromoCode3')];

  }

  componentDidMount() {
    this.timePick();
  }

  timePick() {
    $('#datapicker2').datepicker({
      dateFormat: 'dd/mm/yy'
    });
  }

  deletePromoCode(i) {
    this.setState((prevState) => {
      prevState.arrayOfPromoCodes.splice(i, 1);
      return {
        arrayOfPromoCodes: prevState.arrayOfPromoCodes
      };
    })
  }

  addPromoCode(e) {
    e.preventDefault();
    this.setState((prevState) => {
      let newPromoCode = new PromoCode(this.discountInput.value,
                                       this.dTimeInput.value,
                                       this.codeInput.value);
      prevState.arrayOfPromoCodes.push(newPromoCode);
      return {
        arrayOfPromoCodes: prevState.arrayOfPromoCodes
      };
    })
  }

  getPromoCodes() {
    let promoCodes = this.state.arrayOfPromoCodes.map((item, i) => {
      return (
        <div className="promoCodShow" key={i}>
          <p>Промо на {item.discount}% дійсне до {item.dTime}, код:{item.code}</p>
          <a className="deletepromo" onClick={() => this.deletePromoCode(i)}>Видалити</a>
        </div>
      );
    });
    return promoCodes;
  }

  render() {
    let promoCodes = this.getPromoCodes();
    return (
      <div>
        <div className="wrapperPromoCreate">
          <h2>Промокоди</h2>
          <form id="promoCreate" onSubmit={ this.addPromoCode }>
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
                     onClick={ this.timePick } 
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
        <div className="promoShowContent">
          {promoCodes}
        </div>
      </div>
    )
  }
}

export default PromoCodes;
