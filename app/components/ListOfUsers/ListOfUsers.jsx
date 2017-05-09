import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListOfUsers extends Component {
  
  render() {
    let promoArrShow = this.props.items.map((item, i) => {
      return (
        <div key={i} className="vueCodShow">
          <div className="vueMesg">
            <h2>{item.email}</h2>
            <p>{item.phone}</p>
          </div>
          <div className="vueRightBlock">
            <p>Приєднався</p>
            <div className="vueMesg">
              <h2>{new Date(item.created_at).toLocaleDateString()}</h2>
              <Link to={'users/' + item.id}>Детальніше</Link>
            </div>
          </div>
        </div>
      );
    });

    return (<div>{promoArrShow}</div>);
  }
}

export default ListOfUsers;
