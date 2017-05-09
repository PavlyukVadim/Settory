import React, { Component } from 'react';
import ListOfUsers from '../ListOfUsers/ListOfUsers.jsx';
import fetch from 'isomorphic-fetch';

class AdminUsers extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currArrayOfUsers: [],
      initialArrayOfUsers: []
    };
    this.fetchUsers();
    this.filterList = this.filterList.bind(this);
  }

  fetchUsers() {
    let hostname = 'http://localhost:3000';
    fetch(`${hostname}/users.json`, {
              method: 'GET',
              credentials: 'include'
          })
          .then(response => response.json())
          .then(arrayOfUsers => this.setUsers(arrayOfUsers));
  }

  setUsers(arrayOfUsers) {
    this.setState({
      currArrayOfUsers: arrayOfUsers,
      initialArrayOfUsers: arrayOfUsers
    })
  }

  filterList(e) {
    let updatedList = [].concat(this.state.initialArrayOfUsers);
    updatedList = updatedList.filter((item) => ~item.email.toLowerCase().search(e.target.value.toLowerCase()) 
                                            || ~item.phone.search(e.target.value));
    this.setState({currArrayOfUsers: updatedList});
  }

  render() {
    return (
      <div>
        <div className="wrapperNav">
          <div className="navText">
            <p><strong>Наші клієнти</strong>Інформація про них</p>
          </div>
        </div>
        <div className="filter-list">
          <input className="input" type="text" placeholder="Телефон або електронна пошта" onChange={this.filterList}/>
          <ListOfUsers items={this.state.currArrayOfUsers}/>
        </div>
      </div>
    );
  }  
}

export default AdminUsers;
