import React, { Component } from 'react';
import './ErrorPromo.css';

class ErrorPromo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowError: false
    };
    this.closeErrorBox = this.closeErrorBox.bind(this);
  }

  closeErrorBox() {
    this.setState((prevState) => {
      return {
        isShowError: !prevState.isShowError,
      };
    });
    this.isErrorBoxClosed = true;
  }

  render() {
    let isShouldShow = (this.state.isShowError || !this.props.isValid) && !this.isErrorBoxClosed;
    this.isErrorBoxClosed = !this.isErrorBoxClosed;
    let styleObj = {
      display: isShouldShow ? 'block' : 'none'
    }

    return (
        <div id="error-promo" style={styleObj} onClick={this.closeErrorBox}>
          <div className="error-promo">
            <p>Ви ввели недійсний промокод!</p>
            <a className="button is-danger">Закрити</a>
          </div>
        </div>
    )
  }
}

export default ErrorPromo;
