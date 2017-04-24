var Timepick = React.createClass({
  
  getInitialState: function() {
    return { 
      orderDate: new Date()
    }
  },
  
  componentDidMount: function() {
    this.timeCheck();
  },

  timeCheck: function() {
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
  },
  
  timepick: function() {
    var selectedTime = $("#datapicker1").datepicker('getDate');
    var currDate = new Date();
    this.setState({orderDate: selectedTime});
    
    if (selectedTime.toDateString() === currDate.toDateString()) {
      var closestTime = currDate.getHours() + 3;
      if (closestTime >= 19) {
        var tomorrow = currDate.setDate(currDate.getDate() + 1);
        $('#datapicker1').datepicker('setDate', new Date(tomorrow)); 
      }  else if (closestTime > 8) {
        $('#forTime').timepicker('option', 'minTime', closestTime + ':00');
      }
    } else {
      $('#forTime').timepicker('option', 'minTime', '8:00');
    }
    $('#forTime').timepicker('show');  
  },
    
  render: function() {
    return (
      <input className="input timepicker" id="forTime" onClick={this.timepick} type="text" required />
    )
  }

});
