import React, { Component } from 'react';

class ListOfUsers extends Component {
  
  render() {
    let promoArrShow = this.props.items.map((item, i) => {
      return (
        <div key={i} className="vueCodShow">
          <div className="vueMesg">
            <h2>{item.mail}</h2>
            <p>{item.phone}</p>
          </div>
          <div className="vueRightBlock">
            <p>Приєднався</p>
            <div className="vueMesg">
              <h2>{item.dTime}</h2>
              <a>Детальніше</a>
            </div>
          </div>
        </div>
      );
    });

    return (<div>{promoArrShow}</div>);
  }
}

export default ListOfUsers;
