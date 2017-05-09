import React, { Component } from 'react';
import './UserDetails.css'; 

function userData(mail, phone) {
  this.id = 1;
  this.mail = mail;
  this.phone = phone;
  this.registrationDate = new Date();
};

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: new userData('sample.mail1@mail.com', '0935556644')
    };
  }

  render() {
    let userData = this.state.userData;
    return (
      <div id="user-details-component" className="container">
        <h1>User{userData.id}</h1>
        <h2>{userData.phone}</h2>
        <h3>{userData.mail}</h3>
        <h5>ПРИЄДНАВСЯ {userData.registrationDate.toLocaleDateString()}</h5>
      </div>
    )
  }
}

export default UserDetails;
