import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

class SignIn extends Component {
  render() {
      return (
        <div id="sign_in-component">
          <div className="container">
            <h1 className="title">Увійти до профілю</h1>
            <form>
            <div className="field">
              <label className="label">Ваш email</label>
              <p className="control">
                <input className="input" type="text" placeholder="example@ukr.net" />
              </p>
            </div>
            <div className="field">
              <label className="label">Ваш пароль</label>
              <p className="control">
                <input className="input" type="password" />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                   Запам'ятати мене
                </label>
              </p>
            </div>
            <p className="control">
                <button className="button is-success">Увійти</button>
            </p>
            </form>
            <Link to="/sign_up">Зареєструватися</Link>
            <Link to="/forgot_password">Забули пароль?</Link>
          </div>
        </div>
      )
    }
  }

export default SignIn;
