import React, { Component } from 'react';

class TimePicker extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      orderDate: new Date()
    };
    this.timePick = this.timePick.bind(this);
  }

  componentDidMount() {
    this.timeCheck();
  }

  timeCheck() {
    $('#forTime').timepicker({
      'minTime': this.state.orderTime,
      'timeFormat': 'H:i',
      'interval': 30,
      'forceRoundTime': true,
      'autoclose':false,
      'show2400' : true,
      'scrollDefault': 'now',
      'maxTime': '19:00'
    });
  }
  
  timePick() {
    let selectedTime = $("#datapicker1").datepicker('getDate');
    let currDate = new Date();
    this.setState({orderDate: selectedTime});
    
    if (selectedTime.toDateString() === currDate.toDateString()) {
      let closestTime = currDate.getHours() + 3;
      if (closestTime >= 19) {
        let tomorrow = currDate.setDate(currDate.getDate() + 1);
        $('#datapicker1').datepicker('setDate', new Date(tomorrow)); 
      }  else if (closestTime > 8) {
        $('#forTime').timepicker('option', 'minTime', closestTime + ':00');
      }
    } else {
      $('#forTime').timepicker('option', 'minTime', '8:00');
    }
    $('#forTime').timepicker('show');  
  }
    
  render() {
    return (
      <input className="input timepicker" id="forTime" onClick={this.timePick} type="text" required />
    )
  }
}

export default TimePicker;
