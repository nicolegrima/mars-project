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

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillReceiveProps: function(props) {
    if(props.start === true) {
      this.startTime();
    }
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

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

// CountdownTimer.propTypes = {
//   // startTime: React.PropTypes.number.isRequired,
//   onTimeFinished: React.PropTypes.func.isRequired
// }

module.exports = CountdownTimer;
