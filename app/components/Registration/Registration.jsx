import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

class Registration extends Component {
  render() {
      return (
        <div id="registration-component">
          <div className="container">
            <h1 className="title">Реєстрація</h1>
            <p className="welcome">Вітаємо на <a>Settory</a>. Це ваша особиста<br /> домогосподарка.</p>
            <form>
            <div className="field">
              <label className="label">Ваш email</label>
              <p className="control">
                <input className="input" type="text" placeholder="example@ukr.net" />
              </p>
            </div>
            <div className="field">
              <label className="label">Ваш пароль(8 символів мінімум)</label>
              <p className="control">
                <input className="input" type="password" />
              </p>
            </div>
            <div className="field">
              <label className="label">Підтвердження пароля</label>
              <p className="control">
                <input className="input" type="password" />
              </p>
            </div>
            <div className="field">
              <label className="label">Ваш номер телефону</label>
              <p className="control">
                <input className="input" type="text" placeholder="067 067 06 67" />
              </p>
            </div>
            <p className="control">
                <button className="button is-success">Зареєструватись</button>
            </p>
            </form>
            <Link to="/sign_in">Увійти</Link>
          </div>
        </div>
      )
    }
  }

export default Registration;
