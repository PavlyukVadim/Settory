import React, { Component } from 'react';

function PromoCode(discount, dTime, code) {
  this.percent = +discount;
  this.end_date = dTime;
  this.code = code;
}

class PromoCodes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      arrayOfPromoCodes: []
    };
    this.fetchPromoCodes();
    this.addPromoCode = this.addPromoCode.bind(this);
    this.timePick = this.timePick.bind(this);
    this.getPromoCodes = this.getPromoCodes.bind(this);
    this.deletePromoCode = this.deletePromoCode.bind(this);
  }

  componentDidMount() {
    this.timePick();
  }
  
  fetchPromoCodes() {
    let hostname = this.props.hostname;
    fetch(`${hostname}/admin_promos.json`, {
            method: 'GET',
            credentials: 'include'
          })
          .then(response => response.json())
          .then(arrayOfPromoCodes => this.setPromoCodes(arrayOfPromoCodes));
  }

  setPromoCodes(arrayOfPromoCodes) {
    this.setState({
      arrayOfPromoCodes: arrayOfPromoCodes,
    })
  }

  timePick() {
    $('#datapicker2').datepicker({
      dateFormat: 'dd/mm/yy'
    });
  }

  deletePromoCode(promoId) {
    this.setState((prevState) => {
      return {
        arrayOfPromoCodes: prevState.arrayOfPromoCodes.filter((promo) => promo.id != promoId)
      };
    })

    let indexOfToken = document.cookie.indexOf('XSRF-TOKEN=');
    let token = document.cookie.slice(indexOfToken + 11);
    let hostname = this.props.hostname;
    token = decodeURIComponent(token);
    fetch(`${hostname}/promos/${promoId}`, {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json;charset=UTF-8',
              'X-Requested-With': 'XMLHttpRequest',
              'X-CSRF-TOKEN': token,
            }
          });
  }

  addPromoCode(e) {
    e.preventDefault();
    let newPromoCode = new PromoCode(this.discountInput.value, this.dTimeInput.value, this.codeInput.value);
    this.setState((prevState) => {
      prevState.arrayOfPromoCodes.push(newPromoCode);
      return {
        arrayOfPromoCodes: prevState.arrayOfPromoCodes
      };
    });
    
    let indexOfToken = document.cookie.indexOf('XSRF-TOKEN=');
    let token = document.cookie.slice(indexOfToken + 11);
    let hostname = this.props.hostname;
    token = decodeURIComponent(token);
    fetch(`${hostname}/create_promo`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json;charset=UTF-8',
              'X-Requested-With': 'XMLHttpRequest',
              'X-CSRF-TOKEN': token,
            },
            body: JSON.stringify(newPromoCode)
          });
  }

  getPromoCodes() {
    let promoCodes = this.state.arrayOfPromoCodes.map((item, i) => {
      return (
        <div className="promoCodShow" key={i}>
          <p>Промо на {item.percent}% дійсне до {item.end_date}, код:{item.code}</p>
          <a className="deletepromo" onClick={() => this.deletePromoCode(item.id)}>Видалити</a>
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
