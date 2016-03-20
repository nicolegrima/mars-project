var React = require('react');

var CountdownTimer = React.createClass({

  getInitialState: function(){
    var startMinutes: 1;
    var seconds = this.getSeconds();

    return {
    secondsRemaining: seconds,
    };
  },

  getSeconds: function(){
    if(this.props.startMinutes >= 1) {
      return this.props.startMinutes * 60;
    } else {
      return 60;
    }
  },

  secondsLeft: function(){
    return Math.floor(this.state.secondsRemaining % 60);
  },

  minutesLeft: function(){
    return Math.floor(this.state.secondsRemaining / 60);
  },

  resetTimer: function(){
        clearInterval(this.interval);
        this.setState({ secondsRemaining: 60});
        this.start();
  },

  tick: function(){
    this.setState(
    {secondsRemaining: this.state.secondsRemaining - 1}
    );
    if(this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
      this.setState({seconds: 0});
    }
  },

  componentWillReceiveProps: function(props) {
    if(props.startTimer === true) {
      this.startTime();
    }
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

// Trying to get 0:00 = push to Rejected Page - still a WIP
 //  componentDidUpdate(prevProps, prevState) {
 //   if(this.state.secondsRemaining === 0) {
 //    //  this.props.onTimerFinished();
 //    this.onTimerFinished();
 //   }
 // },

  startTime: function(){
       this.interval = setInterval(this.tick, 1000);
     },

  render: function(){
    return (
      <div className='clock'>
        {this.minutesLeft()} : {this.secondsLeft() < 10 ? "0" + this.secondsLeft() : this.secondsLeft()}
      </div>
    );
  }
});


module.exports = CountdownTimer;
