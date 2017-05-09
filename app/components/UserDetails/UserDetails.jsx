import React, { Component } from 'react';
import './UserDetails.css'; 

class UserDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchUser();
  }

  fetchUser() {
    let hostname = 'http://localhost:3000';
    let params = this.props.location.pathname;
    fetch(`${hostname}${params}.json`, {
              method: 'GET',
              credentials: 'include'
          })
          .then(response => response.json())
          .then(userData => this.setUser(userData));
  }

  setUser(userData) {
    this.setState({
      userData: userData
    })
  }

  render() {
    let userData = this.state.userData;
    if (userData && userData.id) {
      return (
        <div id="user-details-component" className="container">
          <h1>User{userData.id}</h1>
          <h2>{userData.phone}</h2>
          <h3>{userData.email}</h3>
          <h5>ПРИЄДНАВСЯ {new Date(userData.created_at).toLocaleDateString()}</h5>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default UserDetails;
