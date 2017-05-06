import React, { Component } from 'react';
import ListOfUsers from '../ListOfUsers/ListOfUsers.jsx';

function userData(mail, dTime, phone) {
  this.mail = mail;
  this.dTime = dTime;
  this.phone = phone;
};

let initialArr = [new userData('sample.mail1@mail.com','2012-10-10','0935556644'),
                  new userData('sample.mail2@mail.com','2012-11-11','0932223311'),
                  new userData('sample.mail3@mail.com','2012-12-12','0507778899')];


class AdminUsers extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: initialArr
    };
    this.filterList = this.filterList.bind(this);
  }

  filterList(e) {
    let updatedList = [].concat(initialArr);
    updatedList = updatedList.filter((item) => ~item.mail.toLowerCase().search(e.target.value.toLowerCase()) 
                                            || ~item.phone.toLowerCase().search(e.target.value.toLowerCase()));
    this.setState({items: updatedList});
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
          <ListOfUsers items={this.state.items}/>
        </div>
      </div>
    );
  }  
}

export default AdminUsers;
