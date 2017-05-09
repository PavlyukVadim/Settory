import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

class ForgotPassword extends Component {
  render() {
      return (
        <div id="forgot_password-component">
          <div className="container">
            <h1 className="title">Забули пароль?</h1>
            <form>
            <div className="field">
              <label className="label">Ваш email</label>
              <p className="control">
                <input className="input" type="text" placeholder="example@ukr.net" />
              </p>
            </div>
            <p className="control">
                <button className="button">Надішліть мені новий пароль</button>
            </p>
            </form>
            <Link to="/sign_in">Увійти</Link>
            <Link to="/sign_up">Зареєструватися</Link>
          </div>
        </div>
      )
    }
  }

export default ForgotPassword;
